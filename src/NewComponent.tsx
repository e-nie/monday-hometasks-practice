import React from 'react'
import {FilterButtonsType} from "./App";

type FilteredMoneyType = {
    filteredMoney: AllMoney[]
    onClickFilterHandler: (buttonName: FilterButtonsType) => void
}

type AllMoney = {
    banknots: string
    value: number
    number: string
}

// type OnHandlerProps= {
//     onClick: (event:React.MouseEvent<HTMLButtonElement>)=> void
// }

export const NewComponent = (props: FilteredMoneyType) => {
    return (
        <>
            <ul>
                {props.filteredMoney.map((el, i) => {
                        return (
                            <li key = {i}>
                                <span> {el.banknots}</span>
                                <span> {el.value}</span>
                                <span> {el.number}</span>
                            </li>)
                    }
                )}
            </ul>
            <div style = {{marginLeft: 30}}>
                <button onClick = {() => props.onClickFilterHandler('All')}>All</button>
                <button onClick = {() => props.onClickFilterHandler('Rouble')}>Rouble</button>
                <button onClick = {() => props.onClickFilterHandler('Dollar')}>Dollar</button>
            </div>
        </>
    );
};





