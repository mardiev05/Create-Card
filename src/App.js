import Input from "./Components/Input"
import LeftSide from "./Components/LestSide";
import FrontOfCard from "./Components/FrontOfCard";
import BackOfCard from "./Components/BackOfCard"
import './App.css';

function App() {
    return (
        <div className="App">
            <LeftSide />
            <Input />
            <FrontOfCard />
            <BackOfCard />
        </div>
    );
}

export default App;
