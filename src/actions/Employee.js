import axios from '../config/axios'

export const setEmployees = ( employees ) =>
{
    return({
        type : 'SET_EMPLOYEES',
        payload : employees
    })
}
export const startSetEmployees = ( ) =>
{
    return (dispatch) =>
    {
        axios.get('/employees')
        .then((response)=>
        {
            const employees = response.data
            dispatch(setEmployees(employees))
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}


export const addEmp = (emp) =>
{
    return({
        type : 'ADD_EMP',
        payload : emp
    })
}
export const startAddEmp = (formData) =>
{
    return (dispatch) =>
    {
        axios.post('/employees', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
            else
            {
                const emp = response.data
                dispatch(addEmp(emp))
            }
           
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}
export const deleteEmp = (id) =>
{
    return({
        type : 'REMOVE_EMP',
        payload : id
    })
}

export const startDeleteEmp = (id) =>
{
    return (dispatch) =>
    {
        axios.delete(`employees/${id}`)
        .then((response)=>
        {
            const emp = response.data
            dispatch(deleteEmp(emp._id))
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}