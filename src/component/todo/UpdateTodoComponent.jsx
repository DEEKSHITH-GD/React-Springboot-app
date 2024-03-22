import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

const UpdateTodoComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({
        id: 1,
        description: '',
        targetDate: moment(new Date()).format('YYYY-MM-DD')
    });

    const onSubmit = (values) => {
        let username = AuthenticationService.GetLoggedInUser();
        let newTodo = {
            id: todo.id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (id === -1) {
            TodoDataService.createTodo(username, newTodo).then(() => navigate("/todo"))
        } else {
            TodoDataService.updateTodo(username, id, newTodo).then(() => navigate("/todo"))
        }
    };

    const validate = (values) =>{
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        }else if(values.description.length<5){
            errors.description = 'it must contain atleast 5 characters'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter valid target date'
        }

        return errors
    }

    useEffect(() => {
        mountTodo();
    }, []);

    const mountTodo = () => {
        const username = AuthenticationService.GetLoggedInUser();
        if(id === -1){
             return
        }else{
            TodoDataService.retrieveTodo(username, id).then((response) => {
                console.log(response);
                setTodo({
                    id: response.data.id,
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                });
            });
        }
        
    };

    return (
        <>
            <h1>Todo</h1>
            <div className='container'>
                <Formik initialValues={todo} enableReinitialize={true} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={false} validate={validate}>
                    <Form>
                        <ErrorMessage name='description' component="div" className='alert alert-warning' />
                        <ErrorMessage name='targetDate' component="div" className='alert alert-warning' />
                        <div className='form-group'>
                            <label>Description</label>
                            <Field className='form-control' type='text' name='description' />
                        </div>
                        <div className='form-group'>
                            <label>Target Date</label>
                            <Field className='form-control' type='date' name='targetDate' />
                        </div>
                        <button className='btn btn-success' type='submit'>Save</button>
                    </Form>
                </Formik>
            </div>
            <div>Todo component for id - {id}</div>
        </>
    );
};

export default UpdateTodoComponent;
