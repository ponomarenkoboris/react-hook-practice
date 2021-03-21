import React, { useState } from 'react'

function computedInitialCounter() {
    console.log('some coluculations')
    return Math.trunc(Math.random() * 20)
}

function App() {
    // useState работает асинхронно
    const [counter, setCounter] = useState(() => computedInitialCounter()); // принимает начальное значение и функцию, позваляющую изменять стэйт

    const [state, setState] = useState({
        title: 'Счётчик',
        date: Date.now()
    });

    function increment() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter((previousCounter) => {
            return previousCounter + 1
        })
        // setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        // изменение отдельного свойства объекта
        setState((prev) => {
            return {
                ...prev,
                title: 'новое название'
            }
        })
    }

    return (
        <div>
            <h1>Счётчик {counter}</h1>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>
            <button onClick={updateTitle} className="btn btn-default">Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;