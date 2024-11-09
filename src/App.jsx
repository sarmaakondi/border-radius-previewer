import appLogo from "./assets/icon.svg";
import "./App.css";

function App() {
    return (
        <div>
            <img src={appLogo} alt="app logo" style={{ maxWidth: "60px" }} />
            <h1>Border Radius Previewer</h1>
        </div>
    );
}

export default App;
