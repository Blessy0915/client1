import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function ProjectList(props)
{
    return(
        <div>
            <h3>Projects</h3>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th scope = "col">Name</th>
                        <th scope = "col">Total Estimate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.projects.map(proj =>
                            {
                                return(
                                    <tr key = {proj._id}>
                                        <td>{proj.name}</td>
                                        <td>{proj.totalEstimate}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>

            <Link to = "/projects/new">Add new</Link>
        </div>
    )
}

const mapStateToProps = ( state ) =>
{
    return({
        projects : state.projects
    })
}
export default connect(mapStateToProps)(ProjectList)