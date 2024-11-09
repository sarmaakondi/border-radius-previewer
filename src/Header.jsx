function Header() {
    return (
        <div className="flex items-center justify-center p-4 md:px-6 lg:p8 mb-16">
            <span className="text-2xl md:text-3xl lg:text-4xl font-mono p-2 md:p-4 lg:p-6 border-l-4 border-t-4 rounded-l-2xl border-purple-400">
                Border
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-mono">
                Radius
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-mono p-2 md:p-4 lg:p-6 border-r-4 border-b-4 rounded-r-2xl border-yellow-400">
                Previewer
            </span>
        </div>
    );
}

export default Header;
