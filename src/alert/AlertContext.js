import React, {useContext} from 'react';

const AlertContext = React.createContext();
const AlertToogleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext)
};

export const useAlertToggle = () => {
    return useContext(AlertToogleContext)
};

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false)
    const toggle = () => setAlert(prev => !prev);

    return (
        <AlertContext.Provider value={alert}>
            <AlertToogleContext.Provider value={toggle}>
                { children }
            </AlertToogleContext.Provider>
        </AlertContext.Provider>
    )
}