import axios from '../config/axios'

export const setLogs = ( logs ) =>
{
    return({
        type : 'SET_LOGS',
        payload : logs
    })
}
export const startSetLogs = () =>
{
    return (dispatch) =>
    {
        axios.get('/logs')
        .then((response)=>
        {
            const logs = response.data
            dispatch(setLogs(logs))
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}


export const addLog = (log) =>
{
    return({
        type : 'ADD_LOG',
        payload : log
    })
}
export const startAddLog = ( formData ) =>
{
    return (dispatch) =>
    {
        axios.post('/logs', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
            else
            {
                const log = response.data
                dispatch(addLog(log))
            }
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}