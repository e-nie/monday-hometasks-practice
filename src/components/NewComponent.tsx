import React from 'react'
type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map(s => <li key = {s.id}>

                    <span>{s.name} - </span>
                    <span> age:{s.age} </span>
                </li>
            )}
        </ul>
    );
};


type CarsType = {
    topCars: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string
    model: string
    year: number

}

export const TopCars = (props: CarsType) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((el, i) => {
                return (
                    <tr key = {i}>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                        <td>{el.year}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
