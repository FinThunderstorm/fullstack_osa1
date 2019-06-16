import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )  
}

const Statistic = (props) => {
    return (
        <tbody>
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
        </tbody>
    )
}

const Statistics = props => {
    if(props.allValue > 0){
        return (
            <>
                <h1>statistics</h1>
                <table>
                <Statistic text="good" value={props.goodValue}/>
                <Statistic text="neutral" value={props.neutralValue}/>
                <Statistic text="bad" value={props.badValue}/>
                <Statistic text="all" value={props.allValue}/>
                <Statistic text="average" value={props.averageValue}/>
                <Statistic text="positive" value={props.positiveValue+"%"}/>
                </table>
            </>
            )
    } else {
        return (
            <>
                <h1>statistics</h1>
                <div>No feedback given</div>
            </>
        )
    }
    
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)      
    const all = good + neutral + bad
    const average = (good + (bad*-1))/all
    const positive = good / all * 100

    const setToGood = value => {
        setGood(value)
    }

    const setToNeutral = value => {
        setNeutral(value)
    }

    const setToBad = value => {
        setBad(value)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setToGood(good + 1)} text="good" />
            <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
            <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
            <Statistics goodValue={good} neutralValue={neutral} badValue={bad} allValue={all} averageValue={average} positiveValue={positive}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


