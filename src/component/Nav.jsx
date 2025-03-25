

function Nav() {
    return (
        <nav className="fixed w-full h-[75px] bg-transparent backdrop-blur-lg  flex items-center flex-row z-10">
            <div className="text-white h-full w-1/3 ml-[12%] flex items-center">
                <h3 className="font-extrabold text-xl lg:text-3xl">DragonBall Review</h3>
            </div>

            <ul className="flex flex-row justify-between w-[20%] gap-5 ml-[12%] text-white text-lg lg:text-xl font-medium">
                <li className="hover:text-gray-300 cursor-grab">Planets</li>
                <li className="hover:text-gray-300 cursor-grab">All</li>
                <li className="hover:text-gray-300 cursor-grab">Support</li>
            </ul>
        </nav>

    );
}
export default Nav;