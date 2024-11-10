import { useState } from "react";
import Toast from "./Toast";

function BorderBox() {
    const [borderRadius, setBorderRadius] = useState({
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
    });
    const [showToast, setShowToast] = useState(false);

    const handleToastClose = () => {
        setShowToast(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (/^\d*$/.test(value)) {
            setBorderRadius((prevBorderRadius) => ({
                ...prevBorderRadius,
                [name]: value,
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setBorderRadius((prevBorderRadius) => ({
            ...prevBorderRadius,
            [name]: value === "" ? 0 : Number(value),
        }));
    };

    const copyToClipboard = () => {
        const cssSyntax = `border-top-left-radius: ${
            borderRadius.topLeft
        }px;${"\n"}border-top-right-radius: ${
            borderRadius.topRight
        }px;${"\n"}border-bottom-left-radius: ${
            borderRadius.bottomLeft
        }px;${"\n"}border-bottom-right-radius: ${borderRadius.bottomRight}px;`;

        navigator.clipboard.writeText(cssSyntax);
        setShowToast(true);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <div
                className="border-4 border-gray-500 w-80 h-60 md:w-120 md:h-80 lg:w-140 lg:h-100 flex items-center justify-center"
                style={{
                    borderTopLeftRadius: `${borderRadius.topLeft}px`,
                    borderTopRightRadius: `${borderRadius.topRight}px`,
                    borderBottomLeftRadius: `${borderRadius.bottomLeft}px`,
                    borderBottomRightRadius: `${borderRadius.bottomRight}px`,
                }}
            >
                {showToast && (
                    <Toast
                        message="CSS copied to clipboard!"
                        onClose={handleToastClose}
                    />
                )}
            </div>
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
                        onBlur={handleBlur}
                        min="0"
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
                        onBlur={handleBlur}
                        min="0"
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
                        onBlur={handleBlur}
                        min="0"
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
                        onBlur={handleBlur}
                        min="0"
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
