const empInitalState = []

const employeeReducer = ( state= empInitalState, action ) =>
{
    switch(action.type)
    {
        case 'SET_EMPLOYEES' : {
            return [...action.payload]
        }
        case 'ADD_EMP' : {
            return [...state, action.payload]
        }
        case 'REMOVE_EMP' : {
            return state.filter(emp => emp._id !== action.payload)
        }
        default : {
            return [...state]
        }
    }
}

export default employeeReducer