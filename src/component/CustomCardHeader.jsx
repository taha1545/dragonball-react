export default function CharacterCard({ image, name, power, job,onClick }) {
    return (
        <div  onClick={onClick} className="w-72 h-[450px] bg-gray-300 shadow-xl rounded-xl overflow-hidden 
                        transform transition duration-300 hover:scale-110 hover:shadow-2xl">

            <div className="relative w-full h-64 flex items-center justify-center bg-gray-700">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 
                                hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                        🔥 Power: {power}
                    </p>
                </div>
            </div>

            <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                <p className="text-gray-500 font-medium mt-1">{job}</p>
                <div className="mt-8 text-amber-600 font-semibold text-lg">Power Level: {power}</div>
            </div>
        </div>
    );
}
