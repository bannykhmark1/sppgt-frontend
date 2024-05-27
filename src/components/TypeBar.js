import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer(() => {
    const { product } = useContext(Context);
    return (
        <div className="flex flex-col mt-3 bg-yellow-400 rounded-lg shadow-lg p-2">
            {product.types.map(type => (
                <button
                    key={type.id}
                    className={`p-3 text-left text-black
                        ${type.id === product.selectedType.id ? 'bg-orange-500 text-white' : 'bg-yellow-400 text-black'} 
                        hover:bg-orange-600 hover:text-white focus:outline-none transition duration-300 ease-in-out
                        rounded-lg mb-2`}
                    onClick={() => product.setSelectedType(type)}
                >
                    {type.name}
                </button>
            ))}
        </div>
    );
});

export default TypeBar;