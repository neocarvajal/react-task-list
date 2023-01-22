import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const LoginPage = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
            password: Yup.string()
                    .required('Password is required')
        }
    );

    const history = useHistory();

    return (
        <div className="container-fluid">
            <div className="flex-row d-flex justify-content-center">
                <div className="col-md-6">
                    <h4>Login</h4>
                    <Formik
                        initialValues = { initialCredentials }
                        validationSchema = { loginSchema }
                        onSubmit={async(values) => {
                            await new Promise((r) => setTimeout(r, 1000));
                            Swal.fire({
                                icon: 'success',
                                title: 'Welcome',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            await localStorage.setItem('credentials', JSON.stringify(values));
                            history.push('/tasks');
                        }}
                    >
                        {({ values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur }) => (
                                <Form>
                                    <div className="form-floating">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <Field id="email" type="email" name="email" className="form-control" placeholder="example@email.com" />
                                    </div>

                                    <div className="form-floating">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <Field
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            type="password"
                                            className="form-control"
                                        />
                                    </div>
                                    <button type="submit" className="w-100 btn btn-lg btn-primary">Login</button>
                                    {isSubmitting ? (<p style={{color:"white"}}>Login your credentials...</p>): null}
                                </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
