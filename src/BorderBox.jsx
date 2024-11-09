import { useState } from "react";

function BorderBox() {
    const [borderRadius, setBorderRadius] = useState({
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
    });

    return (
        <div className="flex items-center justify-center mt-4">
            <div className="border-4 border-gray-500 w-80 h-60 md:w-120 md:h-80 lg:w-140 lg:h-100"></div>
        </div>
    );
}

export default BorderBox;
