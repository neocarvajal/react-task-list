/* eslint-disable */

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from '../pages/tareas/HomePage';
import Notfoundpage from '../pages/tareas/NotFoundPage';
import Aboutpage from '../pages/tareas/AboutPage';
import Taskspage from '../pages/tareas/TasksPage';
import Loginpage from '../pages/tareas/LoginPage';

export default function RouteApp() {

  return (
    <Router>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to='/' className="nav-link px-2 text-secondary"> Home |</Link></li>
                        <li><Link to='/about' className="nav-link px-2 text-white">| About |</Link></li>
                        <li><Link to='/tasks' className="nav-link px-2 text-white">| Tasks |</Link></li>
                    </ul>

                    <div className="text-end">
                    <Link to='/login'><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                    </div>
                </div>
            </div>
        </header>
        <Switch> 
            <Route exact path='/' component={ HomePage } />
            <Route path='/about' component={ Aboutpage } />
            <Route path='/tasks' component={ Taskspage } />
            <Route path='/login' component={ Loginpage } />
            <Route component={ Notfoundpage } />
        </Switch>
    </Router>
  );
}
