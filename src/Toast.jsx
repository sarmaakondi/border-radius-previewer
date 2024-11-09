/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Toast = ({ message, duration = 3000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md flex items-center justify-between">
            <p className="font-light text-md md:text-xl lg:text-2xl">
                {message}
            </p>
        </div>
    );
};

export default Toast;
