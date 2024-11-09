import "./App.css";

function App() {
    return (
        <div className="flex items-center justify-center px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
            <span className="text-4xl font-mono p-6 border-l-4 border-t-4 rounded-l-2xl border-purple-400">
                Border
            </span>
            <span className="text-4xl font-mono">Radius</span>
            <span className="text-4xl font-mono p-6 border-r-4 border-b-4 rounded-r-2xl border-yellow-400">
                Previewer
            </span>
        </div>
    );
}

export default App;
