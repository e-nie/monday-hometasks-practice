import './App.css';
import {useState} from "react";


function App() {

    // let a = 1
    let [a, setA] = useState(1)
    const onClickHandler = () => {
       setA(++a)

    }
    const resetOnClickHandler = () => {
        setA(0)
    }
    return (
        <div className = "App">
            <h1>{a}</h1>
            <button onClick = {onClickHandler}>number</button>
            <button onClick = {resetOnClickHandler}>0</button>
        </div>
    );
}

export default App;

