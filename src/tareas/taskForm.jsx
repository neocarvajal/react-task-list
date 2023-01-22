/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from './levels.enum';
import Task from './task.class';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Taskform = ({add, length}) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    };

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .required('name is required'),
            
            description: Yup.string()
                .required('description is required'),

            level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level: Normal / Urgent / Blocking')
                .required('Role is required'),
        }
    );

    return (
        <Formik
            initialValues = { initialValues }
            validationSchema = { taskSchema }
            onSubmit={async (values, {resetForm}) => {
                await new Promise((r) => setTimeout(r, 1000));
                const newTask = new Task(
                    values.name,
                    values.description,
                    false,
                    values.level
                );
                add(newTask);
                resetForm({values: ''})
            }}
        >
        {({ 
            values,
            isSubmitting
             }) => (
                <Form className='d-flex justify-content-center align-items-center mb-4'>
                    <div className='form-outline flex-fill'>
                        <Field className='form-control form-control-lg' id="name" type="text" name="name" placeholder="Task Name" />
                        <Field className='form-control form-control-lg' id="description" type="text" name="description" placeholder="Task Description" />
                        <Field className='form-control form-control-lg' as="select" name="level" defaultValue={LEVELS.NORMAL}>
                            <option value={LEVELS.NORMAL}>
                                Normal
                            </option>
                            <option value={LEVELS.URGENT}>
                                Urgent
                            </option>
                            <option value={LEVELS.BLOCKING}>
                                Blocking
                            </option>
                        </Field>
                        <button className='form-control form-control-lg btn btn-success' type="submit">
                            {length > 0 ? 'Add New Task' : 'Create your First Task'}
                        </button>
                    </div>
                </Form>
                )
            }
        </Formik>
    );
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
