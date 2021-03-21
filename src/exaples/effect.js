import React, { useState, useEffect } from 'react'


function App() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    // вызывается каждый раз, когда происходит рэндер компонента
    // useEffect(() => {
    //     console.log('render..')
    // })

    // быдут вызываться только тогода, когда измениться type
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(data => setData(data))

        return () => {
            console.log('clean type')
        }
    }, [type]) // вторым параметром передаётся то, от чего будет зависеть useEffect

    const handlerMouse = event => {
        setPos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', handlerMouse);

        // удаление слушателя
        return () => {
            window.removeEventListener('mousemove', handlerMouse);
        }
    }, [])

    return (
        <div>
            <h1>Ресурс: {type}</h1>
            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todos')}>Todo</button>
            <button onClick={() => setType('posts')}>Посты</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
