import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import Log from './components/Log'
import ProjectList from './components/Project/ProjectList'
import EmployeeList from './components/Employee/EmployeeList'
import ProjectForm from './components/Project/ProjectForm'
import Dashboard from './components/Dashboard'

import './sidebar.css'


function App() {
  return (
    <BrowserRouter>
          <div>
                
            <nav className="navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0 "href="#">Your Company</a>
                <input type="text" className="form-control from-control-primary w-100" placeholder="Search"/>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap"><a className="nav-link" href="#">Log Time</a></li>
                </ul>
            </nav>

            <div>
              <div className="container-fluid">
              <div className="row">
              <div className="col-sm-3 col-md-2 sidebar">
              <ul className="left-sidebar">
                  <li className="active"><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/employees">Employees</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/log">Log Time</Link></li>
              </ul>
            </div>
          
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h1 className="page-header">Dashboard</h1>
...

          </div>
      </div>
</div>
</div>
    

  <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Switch>
                    <Route path = "/dashboard" component = {Dashboard}/>
                    <Route path = "/employees" component = {EmployeeList}/>
                    <Route path = "/projects/new" component = {ProjectForm}/>
                    <Route path = "/projects" component = {ProjectList} />
                    <Route path = "/log" component = {Log}/>
                </Switch>

                </div>
   <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
   <nav aria-label="Page navigation example">
   <ul className="pagination justify-content-start">
    <li className="page-item disabled">
      <a className="page-link" href="" tabIndex="-1">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="/dashboard">1</a></li>
    <li className="page-item"><a className="page-link" href="/employees">2</a></li>
    <li className="page-item"><a className="page-link" href="/projects">3</a></li>
    <li className="page-item"><a className="page-link" href="/log">4</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div> 
    </div>
    </BrowserRouter>
  );
}


export default App;
