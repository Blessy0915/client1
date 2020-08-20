import React from 'react'
import { startAddProject } from '../../actions/Project'
import { connect } from 'react-redux'

 class ProjectForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            name : '',
            totalEstimate :''
        }
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            totalEstimate : this.state.totalEstimate
        }
        this.props.dispatch(startAddProject(formData))
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
                    <label htmlFor = "name">Name</label>
                        <input type = "text" 
                               name = "name"
                               onChange = {this.handleChange} 
                               value = {this.state.name}
                               id = "name"
                               className = "form-control"/><br/>

                    
                    <label htmlFor = "totalEstimate">Total Estimate</label>
                        <input type = "text" 
                               name = "totalEstimate"
                               onChange = {this.handleChange} 
                               id = "totalEstimate"
                               value = {this.state.totalEstimate}
                               className = "form-control"/><br/>
        
                    <input type = "submit" className = "btn btn-primary btn-lg btn-block"/>
                </form>
                </div></div>
            </div>

        )
    }
}

export default connect()(ProjectForm)