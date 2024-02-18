import React, { Component } from 'react';
import { Formik } from 'formik';
import { Input, Button } from 'antd';


const inputBottomMargin = {marginBottom: '10px'};

class AddStudentFrom extends Component {
    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            style={inputBottomMargin}
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            placeholder='First name. E.g John'
                        />
                        {errors.firstName && touched.firstName && errors.firstName}
                        
                        <Input
                            style={inputBottomMargin}
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder='First name. E.g John'
                        />
                        {errors.lastName && touched.lastName && errors.lastName}
                        
                        <Input
                            style={inputBottomMargin}
                            name="email"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Last name. E.g Wick'
                        />
                        {errors.email && touched.email && errors.email}
                        
                        <Input
                            style={inputBottomMargin}
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.gender}
                            placeholder='Email. E.g example@gmail.com'
                        />
                        {errors.gender && touched.gender && errors.gender}
                        
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        );
    }
}

export default AddStudentFrom;
