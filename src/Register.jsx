import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <Formik  initialValues={{first:'',last:'',email:'',psw:'',conpsw:''}}
    validationSchema={Yup.object({

        first:Yup.string().matches(/(?=.[A-Za-z])/,'Must be String')
        .min(3,'Minumum 3 Character ')
        .max(20, 'Less than 20 character')
        .required('First Name is mandatory'),

        last:Yup.string().matches(/(?=.[A-Za-z])/,'Must be String')
        .min(3,'Minumum 3 Character ')

        .max(20, 'Must be less than 20 character')
        .required('Last Name is mandatory'),

        email:Yup.string()
        .email('Must be in email format')
        .required("Email is mandatory"),
        
        psw:Yup.string()
        .matches(/(?=.[A-Za-z])(?=.*[0-9])(?=.*[@#!$%-_?!])(A-Za-z0-9@#$-_?!){8,30}$/, 'contain 8 character which include uppercase,lowercase,numeric value ans specail character'),

        conpsw:Yup.string()
       .oneOf([Yup.ref('psw'),null],'Must match the password')
        .required('Conform password is mandatory') 


    }) }>
    <div className="container my-4 bgurl ">
        <div className="row d-flex justify-content-center shadow-lg">
            <div className="col-md-5 shadow-lg">
                <form >
                    <h2 className="text-center">
                        Register Form
                    </h2>
                    <div className="mb-2">
                        <label htmlFor="first">First Name</label>
                        <Field type="text" className="form-control" name="first" id="first" />
                        <ErrorMessage name='first'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
          
                    </div>
                    <div className="mb-2">
                        <label htmlFor="last">Last Name</label>
                        <Field type="text" className="form-control" name="last" id="last" />
                        <ErrorMessage name='last'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>          
                    </div>
                    {/* <div className="mb-2">
                        <label htmlFor="addr">Address</label>
                        <Field type="text" className="form-control" name="addr" id="addr" />
                        <ErrorMessage name='addr'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>          
                    </div> */}
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <Field type="email" className="form-control" name="email" id="email" />
                        <ErrorMessage name='email'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>          
                    </div>
                    {/* <div className="mb-2">
                        <label htmlFor="con">Contact Number</label>
                        <Field type="text" className="form-control" name="con" id="con" />
                        <ErrorMessage name='first'></ErrorMessage>
          
                    </div> */}
                    {/* <div className="mb-2">
                        <label htmlFor="uname">User Name</label>
                        <Field type="text" className="form-control" name="uname" id="uname" />
                        <ErrorMessage name='first'></ErrorMessage>
          
                    </div> */}
                    <div className="mb-2">
                        <label htmlFor="psw">Create Password</label>
                        <Field type="password" className="form-control" name="psw" id="psw" />
                        <ErrorMessage name='psw'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>          
                    </div>
                    <div className="mb-2">
                        <label htmlFor="conpsw">Confirm Password</label>
                        <Field type="password" className="form-control" name="conpsw" id="conpsw" />
                        <ErrorMessage name='conpsw'>
                            {msg=><div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>          
                    </div>
                    <div className="mb-4 mt-4 text-center">
                      <button className="btn btn-success">Sign Up</button>
          
                    </div>
                </form>


            </div>
        </div>
    </div>
    </Formik>
  )
}

export default Register