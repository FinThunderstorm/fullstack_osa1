import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return(
        <>
            <p>{props.part} {props.exercises}</p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            {props.parts.map(part => {
                return <Part part={part.name} exercises={part.exercises}/>
            })}
        </>
    )
}

const Total = (props) => {
    let yhteensa = 0
    props.parts.forEach(part => {
        yhteensa = yhteensa + part.exercises
    })
    return (
        <>
            <p>yhteensä {yhteensa} tehtävää</p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts:[
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));