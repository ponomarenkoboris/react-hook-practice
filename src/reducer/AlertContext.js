import React, {useReducer, useContext} from 'react';

const AlertContext = React.createContext();
export const useAlert = () => useContext(AlertContext);

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type){
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    // Альтернатива для useState. Принимает редюсер типа (state, action) => newState и возвращает текущее состояние в паре с методом dispatch.
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({ type: SHOW_ALERT })
    const hide = () => dispatch({ type: HIDE_ALERT })

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>
            {children}
        </AlertContext.Provider>
    )
}