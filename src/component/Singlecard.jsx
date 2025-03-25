import React from "react";

function Singlecard({ character, onClose }) {
    if (!character) return null;

    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-lg flex items-center justify-center p-4 z-50 min-h-screen">
            <div className="bg-gray-900 text-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 relative transition-transform transform scale-95 hover:scale-100 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-full transition duration-300"
                    aria-label="Close"
                >
                    ✕
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg border-4 border-white shadow-lg transition duration-300 transform hover:scale-105"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">{character.name}</h2>
                        <p className="text-gray-300 text-lg mt-1">{character.race}</p>
                        <p className="text-yellow-400 text-lg font-semibold mt-2">Power: {character.ki}</p>
                        <p className="text-yellow-500 text-lg font-semibold">Max Power: {character.maxKi}</p>
                    </div>
                </div>

                {character.transformations?.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-3 border-b border-gray-600 pb-2">Transformations</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
                            {character.transformations.map((trans, index) => (
                                <div key={index} className="text-center transition transform hover:scale-105">
                                    <img
                                        src={trans.image}
                                        alt={trans.name}
                                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-md border-2 border-gray-500 shadow-md mx-auto"
                                    />
                                    <p className="text-sm mt-2 font-semibold">{trans.name}</p>
                                    <p className="text-xs text-yellow-400 font-medium">Power: {trans.ki}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Singlecard;
