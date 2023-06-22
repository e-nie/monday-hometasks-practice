import React, {useState} from 'react'
import {NewComponent} from "./NewComponent";

export type FilterButtonsType = 'All'| 'Rouble'| 'Dollar'


function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollar', value: 100, number: ' a1234567890'},
        {banknots: 'Dollar', value: 50, number: ' z1234567890'},
        {banknots: 'Rouble', value: 100, number: ' w1234567890'},
        {banknots: 'Dollar', value: 100, number: ' e1234567890'},
        {banknots: 'Dollar', value: 50, number: ' c1234567890'},
        {banknots: 'Rouble', value: 100, number: ' r1234567890'},
        {banknots: 'Dollar', value: 50, number: ' x1234567890'},
        {banknots: 'Rouble', value: 50, number: ' v1234567890'},
    ])

    const [buttonName, setButtonName] = useState<FilterButtonsType>('All')
    let filteredMoney = money

    if (buttonName === 'Rouble') {
        filteredMoney = money.filter(el => el.banknots === 'Rouble')
    }
    if (buttonName === 'Dollar') {
        filteredMoney = money.filter(el => el.banknots === 'Dollar')
    }

    const onClickFilterHandler = (buttonName: FilterButtonsType) => {
        setButtonName(buttonName)
    }


    return (
        <>
            <NewComponent filteredMoney={filteredMoney}
                          onClickFilterHandler={onClickFilterHandler}
            />
            {/*<ul>*/}
            {/*    {filteredMoney.map((el, i) => {*/}
            {/*            return (*/}
            {/*                <li key = {i}>*/}
            {/*                    <span> {el.banknots}</span>*/}
            {/*                    <span> {el.value}</span>*/}
            {/*                    <span> {el.number}</span>*/}
            {/*                </li>)*/}
            {/*        }*/}
            {/*    )}*/}
            {/*</ul>*/}
            {/*<div style = {{marginLeft: 30}}>*/}
            {/*    <button onClick = {() => onClickFilterHandler('All')}>All</button>*/}
            {/*    <button onClick = {() => onClickFilterHandler('Rouble')}>Rouble</button>*/}
            {/*    <button onClick = {() => onClickFilterHandler('Dollar')}>Dollar</button>*/}
            {/*</div>*/}

        </>
    );
}

export default App;

