import { useEffect, useState } from "react";

interface IProps {
    children: React.ReactNode;
    position: 'left' | 'right';
    handleClick: () => void;
}
// bg-gray-200
const Arrow = ({ children, position, handleClick }: IProps) => {
    const [isFocus, setIsFocus] = useState(false)

    const focus = () => setIsFocus(true);
    const leave = () => setIsFocus(false);

    const mouseup = () => {
        if (!isFocus) return;
        
        leave()
    }

    useEffect(() => {
        window.addEventListener('mouseup', mouseup)
        return () => window.removeEventListener('mouseup', mouseup)
    }, [isFocus])

    return (
        <div
            onClick={handleClick}
            onTouchStart={focus}
            onTouchEnd={leave}
            onMouseDown={focus}
            onMouseUp={leave}
            className={`w-9 h-9 rounded-full border flex justify-center items-center text-xl cursor-pointer absolute top-2/4 -translate-y-2/4 ${position === 'left' ? 'left-3' : 'right-3'} ${isFocus ? 'bg-gray-200' : ''}`}
        >
            {children}
        </div>
    )
}

export default Arrow