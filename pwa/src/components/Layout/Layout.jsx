const Layout = ({ children, className = ''}) => {
    return (
        <>
            <div className={`h-full flex justify-center items-center ${className}`}>
                { children }
            </div>
        </>
    )
}

export default Layout;
