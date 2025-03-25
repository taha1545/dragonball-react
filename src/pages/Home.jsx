import Nav from "../component/Nav";
import "./Home.css";
import CharacterCard from "../component/CustomCardHeader";
import { useState, useEffect } from "react";
import Singlecard from "../component/Singlecard";
//

function Home() {

    const [char, SetChar] = useState([]);
    const [err, Seterr] = useState("");
    const [loader, Setloader] = useState(false);
    const [singlechar, Setsinglechar] = useState(null);
    const [page, setPage] = useState(1);


    const apiurl = "https://dragonball-api.com/api/characters";


    async function getallcharcter() {

        Setloader(true);

        try {
            const response = await fetch(`${apiurl}`);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();

            SetChar(data.items || []);
        } catch (error) {
            console.error("Fetch error:", error);
            Seterr("Error while trying to fetch data");
        } finally {
            Setloader(false);
        }
    }



    async function loadmore() {
        try {
            const nextPage = page + 1;
            const response = await fetch(`https://dragonball-api.com/api/characters?page=${nextPage}`);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            SetChar([...char, ...data.items]);
            setPage(nextPage);
        } catch (error) {
            console.error("Fetch error:", error);
            Seterr("Error while trying to fetch data");
        }
    }

    async function Getsinglechakter(id) {
        try {
            const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            Setsinglechar(data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    useEffect(() => {
        getallcharcter();
    }, []);



    return (
        <div className="bg-[#505262]">

            <Nav />

            <div className="h-screen w-full flex flex-row items-center bg-house">
                <div className="flex flex-col w-[60%] lg:w-[40%] h-[50%] ml-[15%]">
                    <h3 className="mt-[5%] mb-[10%] w-full text-white font-extrabold text-3xl tracking-widest">
                        Feel like your Super hero!
                    </h3>
                    <p className="text-white text-xl font-light ml-[1%] mb-[8%]">
                        You can see your favorite Dragon Ball character and review their details.
                    </p>
                    <div>
                        <button className="mt-[2%] bg-amber-800 px-14 lg:px-18 rounded-3xl py-4 text-white hover:bg-amber-950 font-bold shadow-md transition-all duration-300">
                            <a href="https://web.dragonball-api.com/">
                                See Details!
                            </a>
                        </button>
                    </div>
                </div>

                <div className="h-[50%] w-[20%] ml-[5%] hidden">
                    <img src="/goku.png" className="h-full w-full rounded-4xl" />
                </div>
            </div>

            <div className="bg-black py-12">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-white font-extrabold text-4xl mb-8 pl-[5%]">
                        All Characters:
                    </h3>

                    {loader ? (
                        <p className="text-white text-xl text-center mt-6 ">Loading...</p>
                    ) : err ? (
                        <p className="text-red-500 text-xl text-center">{err}</p>
                    ) : (
                        <div className="grid grid-cols-1 pl-[12%] lg:pl-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {char.map((data) => (
                                <CharacterCard
                                    onClick={() => Getsinglechakter(data.id)}
                                    key={data.id}
                                    image={data.image}
                                    name={data.name}
                                    power={data.ki}
                                    job={data.race}
                                />
                            ))}
                        </div>
                    )}
                    <div className="flex w-full h-[150px] items-center justify-center">
                        <button onClick={() => { loadmore() }}
                            className=" bg-blue-700 px-14 lg:px-18 rounded-3xl py-4 text-white
                         hover:bg-blue-950 font-bold shadow-md transition-all duration-300">
                            See more
                        </button>
                    </div>
                </div>
            </div>

            <Singlecard character={singlechar} onClose={() => Setsinglechar(null)} />


        </div>
    );
}

export default Home;
