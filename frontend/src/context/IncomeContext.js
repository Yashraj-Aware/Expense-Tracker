import { createContext , useReducer } from "react";

export const IncomesContext = createContext()

// state --> previous state value before changing
export const incomesReducer = (state , action) => {
    switch(action.type) {
        case 'SET_INCOMES' :
            return { incomes: action.payload }

        case 'CREATE_INCOMES' :
            return { incomes: [action.payload , ...state.incomes ]}

        case 'DELETE_INCOMES':
            return { incomes: state.incomes.filter((income) => income._id !== action.payload._id)}
            
        default :
            return state
    }
}

export const IncomesContextProvider = ({ children }) => {

    const[state , dispatch] = useReducer(incomesReducer, {
        incomes: null
    })

    return (
        <IncomesContext.Provider value = {{...state , dispatch}}>
            { children }
        </IncomesContext.Provider>
    )
}