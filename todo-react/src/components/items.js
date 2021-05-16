import React, {useContext} from 'react'
import {listContext} from '../App'

export default function Items(item){
    const [list, setList] = useContext(listContext)
    const updateHandle = (event) => {
        const rest = list.filter(v => v.title !== item.title)
        setList([
            ...rest,
            {
                title: item.title,
                done: event.target.checked,
                id: item.id
            }
        ]);
    }
    return(<li>
        <input type="checkbox" checked={item.done} onChange={updateHandle}/> -
        <span>{item.index}</span> -
        <strong>{item.title}</strong>
    </li>)
}