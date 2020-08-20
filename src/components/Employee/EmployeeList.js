import React from 'react'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import { startDeleteEmp } from '../../actions/Employee' 


function EmployeeList(props)
{
    const handleRemove = (id) =>
    {
        props.dispatch(startDeleteEmp(id))
    }
    return(
            <div className="col-md-6 offset-md-3" align="center">
                <h3>Employees</h3>
                <table className = "table table-striped">
                    <thead >
                        <tr >
                            <th scope="col" align="center">Name</th>
                            <th scope="col" align="center">Remove</th>
                        </tr>
                    </thead>
                    <tbody scope="col" align="center">
                        {
                            props.employees.map(emp =>
                                {
                                    return(
                                        <tr key = {emp._id}>
                                        <td>{emp.name}</td>
                                        <td><button onClick = {()=>{handleRemove(emp._id)}} className="btn btn-dark">Remove</button></td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
               
                <EmployeeForm/>
            </div>
        )
}

const mapStateToProps = ( state ) =>
{
    return({
        employees : state.employees
    })
}
export default connect(mapStateToProps)(EmployeeList)