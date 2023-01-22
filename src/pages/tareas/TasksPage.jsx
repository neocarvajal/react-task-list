/* eslint-disable */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TaskListComponent from '../../tareas/taskList';

const Taskspage = () => {
    const history = useHistory();
    useEffect(() => {
        var data = JSON.parse(localStorage.getItem("credentials"));
        if(Array.isArray(data) || data === null) {
            console.log("Debe loggearse");
            console.log(data);
            history.push('/login');
        } else {
            console.log(data);
            console.log("Bienvenido");
            history.push('/tasks');
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className="flex-row d-flex justify-content-center">
                <div className="col-md-6">
                    <TaskListComponent/>
                </div>
            </div>
        </div>
    );
}

export default Taskspage;
