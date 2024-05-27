import React, { useState } from 'react';
import { Range } from 'react-range';

const MIN = 0;
const MAX = 100000;
const STEP = 100;

const PriceFilter = ({ onFilterChange }) => {
    const [values, setValues] = useState([MIN, MAX]); // Начальные значения ползунков

    const handleChange = (values) => {
        setValues(values);
        onFilterChange({ minPrice: values[0], maxPrice: values[1] });
    };

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <label className="block text-lg mb-10 font-medium text-yellow-600 mb-2">Диапазон цен</label>
            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '100%',
                            backgroundColor: '#ddd',
                            position: 'relative',
                            borderRadius: '999px'
                        }}
                    >
                        <div
                    style={{
                        position: 'absolute',
                        height: '100%',
                        background: 'linear-gradient(to right, #FFA500, #FFD700)',
                        borderRadius: '999px',
                        left: `${(values[0] - MIN) / (MAX - MIN) * 100}%`,
                        right: `${100 - (values[1] - MIN) / (MAX - MIN) * 100}%`
                    }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '24px',
                            width: '24px',
                            borderRadius: '50%',
                            backgroundColor: '#FFA500',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                            border: '2px solid #FFD700'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '-28px',
                                color: '#fff',
                                backgroundColor: '#FFA500',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                fontSize: '14px',
                            }}
                        >
                            {values[index]}
                        </div>
                    </div>
                )}
            />
            <div className="flex justify-between mt-2 text-sm font-medium text-gray-700">
                <div>
                    <label className="block">Минимальная цена</label>
                    <input 
                        type="number" 
                        value={values[0]} 
                        readOnly 
                        className="mt-1 block w-full text-start rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        />
                    </div>
              
                    <div>
                        <label className="block">Максимальная цена</label>
                        <input 
                            type="number" 
                            value={values[1]} 
                            readOnly 
                            className="mt-1 block w-full text-end rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
        );
    };

    export default PriceFilter;