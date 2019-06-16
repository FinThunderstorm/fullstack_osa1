import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = props => {
    const all = props.goodValue + props.neutralValue + props.badValue
    const average = (props.goodValue+(props.badValue*-1))/all
    const positive = props.goodValue/all*100

    if(all > 0){
        return (
            <>
                <h1>statistics</h1>
                <div>good: {props.goodValue}</div>
                <div>neutral: {props.neutralValue}</div>
                <div>bad: {props.badValue}</div>
                <div>all: {all}</div> 
                <div>average: {average}</div>
                <div>positive: {positive}%</div>
        
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
            <Statistics goodValue={good} neutralValue={neutral} badValue={bad}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


