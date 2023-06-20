import React, {MouseEvent} from 'react'
import './App.css';
import Button from './components/Button'

function App() {
    const button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    const button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const stupidMe = () => {
        console.log('I am a stupid button ((');
    }
    return (
        <div className = "App">
            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            <Button name = {'MyYouTubeChannel-1'} callBack = {() => button1Foo('I am Vasya', 21, 'Cologne')} />
            <Button name = {'MyYouTubeChannel-2'} callBack = {() => button2Foo('I am Ivan', 45)} />
            <Button name = {'stupid button'} callBack = {stupidMe} />

        </div>
    );
}

export default App;

