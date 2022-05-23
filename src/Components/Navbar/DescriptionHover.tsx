import { useState } from "react";

interface IProps {
    children: React.ReactNode;
    text: string;
    classes?: string[]
}

const DescriptionHover = ({ children, classes, text }: IProps) => {
    const subClasses = classes?.length ? classes : [];
    
    const [visible, setVisible] = useState(false);

    const display = () => {
        setVisible(true)
    }

    const hide = () => {
        setVisible(false)
    }

    return (
        <div onMouseEnter={display} onMouseLeave={hide} className={`${subClasses.join(' ')} relative z-30`}>
            {children}
            {
                visible && <div className="absolute -bottom-12 text-sm left-2/4 -translate-x-2/4 py-1 px-3 bg-slate-500 text-white whitespace-nowrap z-30">{text}</div>
            }
        </div>  
    )
}

export default DescriptionHover