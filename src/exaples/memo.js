import React, { useState, useMemo, useEffect } from 'react'

function complexCompute(n) {
    console.log('всегда, когда перерисовывается компонент')
    let i = 0;
    while (i < 1e9) i++
    return n * 2
}

function App() {
    const [number, setNumber] = useState(42);

    const [colored, setColored] = useState(false);
    const styles = useMemo(() => ({ color: colored ? 'darkred' : 'black' }), [colored]);

    // производит вычесления только когда роисходит операция с number
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number]); // зависит только от состояния number

    useEffect(() => {
        console.log('styles changed');
    }, [styles])

    return (
        <>
            <h1 style={styles}>Колличество рендеров: {computed}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => ++prev)}>Добавить</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => --prev)}>Убавить</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
        </>
    );
}

export default App;