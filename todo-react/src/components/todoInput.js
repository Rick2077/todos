import React, {useState, useContext} from 'react'
import {listContext} from '../App'

const TodoInput = () => {
    const [list, setList] = useContext(listContext)
    const [val, setVal] = useState('')
    const tips = 'What needs to be done?'

    const handleChange = (event) => {
        setVal(event.target.value)
    }

    const handleKeyDown = (event) =>{
        if(event.code === 'Enter'){
            setList([...list, {title: event.target.value, done: false, id: new Date().getTime()}])
            setVal("")
        }
    }
    return (<>
        <input placeholder={tips} className="App-input" value={val} type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
    </>)
}


export default TodoInput