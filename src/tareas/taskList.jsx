/* eslint-disable */

import React, { useState, useEffect } from 'react';
import TaskComponent from './task';
import './styles/task.scss';
import Taskform from './taskForm';

const TaskListComponent = () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
           
        }
    }, [tasks])

    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('New Task Added:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                                <TaskComponent 
                                    key={index} 
                                    task={task}
                                    complete={completeTask}
                                    remove={deleteTask}
                                >
                                </TaskComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if (tasks.length > 0){
        tasksTable = <Table></Table>
    } else{
        tasksTable = (
            <div>
                <h3> There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <div className='row'>
                            <h5 className='d-inline'>
                                Your Tasks:
                            </h5>
                        </div>
                    </div>
                    
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <Taskform add={addTask} length={tasks.length} />
        </div>
    );
};


export default TaskListComponent;
