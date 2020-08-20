const logInitialState = []
const logReducer = ( state= logInitialState, action ) =>
{
    switch(action.type)
    {
        case 'SET_LOGS' : {
            return [...action.payload]
        }
        case 'ADD_LOG' : {
            return [...state, action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default logReducer