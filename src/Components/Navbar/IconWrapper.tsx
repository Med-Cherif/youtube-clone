

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`text-2xl cursor-pointer`}>
            {children}
        </div>
    )
}

export default IconWrapper