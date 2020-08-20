import axios from '../config/axios'

export const setProjects = ( projects ) =>
{
    return({
        type : 'SET_PROJECTS',
        payload : projects
    })
}
export const startSetProjects = () =>
{
    return (dispatch) =>
    {
        axios.get('/projects')
        .then((response)=>
        {
            const projects = response.data
            dispatch(setProjects(projects))
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}


export const addProject = (project) =>
{
    return({
        type : 'ADD_PROJECT',
        payload : project
    })
}
export const startAddProject = (formData) =>
{
        return (dispatch) =>
        {
            axios.post('/projects', formData)
            .then((response)=>
            {
                if(response.data.hasOwnProperty('errors'))
                {
                    alert(response.data.message)
                }
                else
                {
                    const project = response.data
                    dispatch(addProject(project))
                }
               
            })
            .catch((err)=>
            {
                alert(err)
            })
        }
}