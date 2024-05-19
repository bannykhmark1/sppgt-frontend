import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <div className="flex flex-col mt-3 bg-yellow-400 rounded-lg">
            {product.types.map(type =>
                <button
                    className={`p-3 text-black 
                    ${type.id === product.selectedType.id ? 'bg-orange-500' : ''} 
                    hover:bg-orange-600 focus:outline-none`}
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </button>
            )}
        </div>
    );
});

export default TypeBar;