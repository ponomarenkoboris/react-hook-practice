import React, { useState, useCallback } from 'react'
import ItemsList from "./ItemsList";

function App() {
    const [count, setCount] = useState(1);
    const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    // Передайте встроенный колбэк и массив зависимостей.
    // Хук useCallback вернёт мемоизированную версию колбэка,
    // который изменяется только, если изменяются значения одной из зависимостей.
    // Это полезно при передаче колбэков оптимизированным дочерним компонентам, которые полагаются на равенство ссылок для предотвращения ненужных рендеров
    const generateItemsFromApi = useCallback(() => {
        return new Array(count).fill('').map((_, idx) => `Элемент ${idx + 1}`)
    }, [count])

    return (
        <>
            <h1 style={styles}>Колличество элементов: {count}</h1>
            <button className="btn btn-success" onClick={() => setCount(prev => ++prev)}>Добавить</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemsList getItems={generateItemsFromApi} />
        </>
    );
}

export default App;