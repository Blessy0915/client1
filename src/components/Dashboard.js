import React from 'react'
import { connect } from 'react-redux'


class Dashboard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            emp : '',
            proj : '',
            logs : [],
            projTimeLog : 0
        }
    }
    
    handleChange = (e) =>
    {
        console.log(e.target.name, e.target.value)

        let eachProjTimeLog = 0, a = 0
        const x = this.props.logs.filter(log => log.project._id === e.target.value)
        x.forEach(log =>
            {
                 eachProjTimeLog += parseInt(log.time.slice(0,2))
            })

        let eachProjEstTime = 0
        const y = this.props.projects.filter(proj => proj._id === e.target.value)
        y.forEach(proj =>{
            eachProjEstTime += Number(proj.estimateTime)
        })
        console.log(eachProjEstTime)
    }
    render()
    {
        return(
            <div>
                <h3>Dashboard</h3>
                <div align = "right">
                <label>Projects  </label>
                <select onChange = {this.handleChange} name = "proj">
                    <option value = "projAll">all</option>
                    {
                        this.props.projects.map(proj =>
                            {
                                return(
                                    <option key = {proj._id} value = {proj._id}> {proj.name}</option>
                                )
                            })
                    }
                </select>
                <label>Employees </label>
                <select onChange = {this.handleChange} name = "emp">
                <option value = "all">all</option>
                {
                    this.props.employees.map(emp =>
                        {
                            return(
                                <option key = {emp._id} value = {emp._id}>{emp.name}</option>
                            )
                        })
                }
            </select>
            </div>
            <h3>Project Status</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Employee</th>
                        <th>Date</th>
                        <th>Logged Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.logs.map(log =>
                            {
                                return(
                                    <tr key = {log._id}>
                                        <td>{log.project.name}</td>
                                        <td>{log.employee.name}</td>
                                        <td>{log.date}</td>
                                        <td>{log.time}</td>
                                    </tr>
                                )
                            })   
                    }
                </tbody>
            </table>
            
        </div>
    )
}}

const mapStateToProps = ( state ) =>
{
    return({
        projects : state.projects,
        employees : state.employees,
        logs : state.logs
    })
}
export default connect(mapStateToProps)(Dashboard)