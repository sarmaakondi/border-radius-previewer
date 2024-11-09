import { useState } from "react";

function BorderBox() {
    const [borderRadius, setBorderRadius] = useState({
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBorderRadius({
            ...borderRadius,
            [name]: value,
        });
    };

    const copyToClipboard = () => {
        const cssSyntax = `
        border-top-left-radius: ${borderRadius.topLeft}px;
        border-top-right-radius: ${borderRadius.topRight}px;
        border-bottom-left-radius: ${borderRadius.bottomLeft}px;
        border-bottom-right-radius: ${borderRadius.bottomRight}px;
        `;

        navigator.clipboard.writeText(cssSyntax);
        alert("CSS syntax copied to clipboard!");
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <div
                className="border-4 border-gray-500 w-80 h-60 md:w-120 md:h-80 lg:w-140 lg:h-100"
                style={{
                    borderTopLeftRadius: `${borderRadius.topLeft}px`,
                    borderTopRightRadius: `${borderRadius.topRight}px`,
                    borderBottomLeftRadius: `${borderRadius.bottomLeft}px`,
                    borderBottomRightRadius: `${borderRadius.bottomRight}px`,
                }}
            ></div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-10 lg:gap-10">
                <div className="flex flex-row items-center justify-between space-x-12 md:flex-col md:space-x-0 lg:flex-col font-mono gap-2">
                    <label htmlFor="topLeft">Top-L</label>
                    <input
                        type="number"
                        name="topLeft"
                        id="topLeft"
                        className="border border-gray-600 rounded-md w-24 h-12 md:w-20 md:h-16 lg:w-24 lg:h-16 text-center text-xl md:text-2xl lg:text-3xl"
                        value={borderRadius.topLeft}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-row items-center justify-between md:flex-col lg:flex-col font-mono gap-2">
                    <label htmlFor="topRight">Top-R</label>
                    <input
                        type="number"
                        name="topRight"
                        id="topRight"
                        className="border border-gray-600 rounded-md w-24 h-12 md:w-20 md:h-16 lg:w-24 lg:h-16 text-center text-xl md:text-2xl lg:text-3xl"
                        value={borderRadius.topRight}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-row items-center justify-between md:flex-col lg:flex-col font-mono gap-2">
                    <label htmlFor="bottomLeft">Bottom-L</label>
                    <input
                        type="number"
                        name="bottomLeft"
                        id="bottomLeft"
                        className="border border-gray-600 rounded-md w-24 h-12 md:w-20 md:h-16 lg:w-24 lg:h-16 text-center text-xl md:text-2xl lg:text-3xl"
                        value={borderRadius.bottomLeft}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-row items-center justify-between md:flex-col lg:flex-col font-mono gap-2">
                    <label htmlFor="bottomRight">Bottom-R</label>
                    <input
                        type="number"
                        name="bottomRight"
                        id="bottomRight"
                        className="border border-gray-600 rounded-md w-24 h-12 md:w-20 md:h-16 lg:w-24 lg:h-16 text-center text-xl md:text-2xl lg:text-3xl"
                        value={borderRadius.bottomRight}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button
                className="bg-gray-500 hover:bg-gray-700 px-10 py-4 rounded-full uppercase text-white text-center text-xl md:text-2xl lg:text-3xl font-mono font-bold"
                onClick={copyToClipboard}
            >
                copy css
            </button>
        </div>
    );
}

export default BorderBox;
