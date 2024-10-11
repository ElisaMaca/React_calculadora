import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const AstroCalculadora = () => {
    const displayRef = useRef(null);

    useEffect(() => {
        
    }, []);

    const appendToDisplay = (value) => {
        if (displayRef.current) {
            displayRef.current.value += value; 
        }
    };

    const calculate = () => {
        if (displayRef.current) {
            try {
                const expression = displayRef.current.value.replace(/\^/g, '**');
                displayRef.current.value = eval(expression);
            } catch (error) {
                displayRef.current.value = 'Error';
            }
        }
    };

    const clearDisplay = () => {
        if (displayRef.current) {
            displayRef.current.value = ''; 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-sky-200">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-blue-500 mt-8">
                    AstroCalculadora
                </h2>
                <input
                    type="text"
                    ref={displayRef}
                    id="calculator-display"  
                    name="calculatorDisplay"  
                    className="input input-bordered w-full mb-4 text-right"
                    readOnly                  
                />
                <div className="grid grid-cols-4 gap-4">
                    {['7', '8', '9', '/',
                      '4', '5', '6', '*',
                      '1', '2', '3', '-',
                      '0', '.', '^', '+',
                      'C', '='].map((value) => (
                        <button
                            key={value}
                            className="btn"
                            onClick={() => {
                                if (value === 'C') {
                                    clearDisplay();
                                } else if (value === '=') {
                                    calculate();
                                } else {
                                    appendToDisplay(value);
                                }
                            }}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AstroCalculadora;
