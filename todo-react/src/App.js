import './App.css';
import React, {useState} from 'react'
import useLocalStorage from "./localStorage";
import TodoInput from './components/todoInput'
import List from './components/list'

export const listContext = React.createContext()
export const Header = () => <div className="App-header">todos</div>

function App() {
    const [list, setList] = useLocalStorage('list',[])
    const [show, setShow] = useState('all')
    return (
        <div className="App">
            <Header/>
            <div className="App-container">
                <listContext.Provider value={[list, setList, show, setShow]}>
                    <TodoInput/>
                    <List/>
                </listContext.Provider>
            </div>
        </div>
    );
}
export default App;
