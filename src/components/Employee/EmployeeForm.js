import React from 'react'
import { startAddEmp } from '../../actions/Employee'
import { connect } from 'react-redux'

class EmployeeForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            name : '',
        }
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            name : this.state.name
        }
        this.props.dispatch(startAddEmp(formData))
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <div className="form-group">
                    <div className="row">
                    <div className="col-md-6 offset-md-3">
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "name">name</label><br/>
                    <input type = "text" 
                               onChange = {this.handleChange} 
                               value = {this.state.name}
                               name = "name"
                               id = "name"
                               placeholder = "name"
                               className = "form-control"/><br/>

                    <input type = "submit" className="btn btn-primary btn-lg btn-block"/>
                </form>
                </div></div>
            </div>

        )
    }
}

export default connect()(EmployeeForm)