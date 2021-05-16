import React, {useContext} from 'react'
import Item from './items'
import {listContext} from '../App'

const Menu = () => {
    const status = [{
        name: 'all'
    },{
        name: 'active'
    },{
        name:'completed'
    }]
    const [list, , show, setShow] = useContext(listContext)
    const showHandle = (event) => {
        const href = event.target.href;
        const type = href.slice(href.lastIndexOf('/#/'), href.length).replace('/#/','')
        setShow(type+'')
    }
    return (<div className="App-menu">
        <span>{list.length} items left</span>
        <div>
            {
                status.map(v=>{
                    return(<a href={`#/${v.name}`}
                           key={v.name}
                           className={v.name === show ? 'active' : ''}
                           onClick={showHandle}
                        >{v.name}</a>)
                })
            }
        </div>
        {
           list.filter(v => v.done === false).length === 0 && <a>clear</a>
        }
    </div>)
}

export default function List() {
    const [list, , show] = useContext(listContext)
    if(list.length < 1) {
        return ''
    }
    return (<>
            <ul className='App-list'>{
                list && list.sort((a, b) => a.id - b.id).map((item, index) => {
                    if(show === 'all') return <Item key={item.id} index={index} {...item} />
                    if(show === 'active' && item.done !== true) return <Item key={item.id} index={index} {...item} />
                    if(show === 'completed' && item.done === true) return <Item key={item.id} index={index} {...item} />
                    return ''
                })
            }</ul>
            <Menu/>
        </>
    )
}