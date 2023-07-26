import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from 'yup';

export default function CreateCustomer() {
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Create Customer</h1>
        <Formik initialValues={{ name: '', date: '', gender: '', indentity: '', phone: '', email: '', typeOfGuest: '', address: '' }}
          validationSchema={yup.object({
            name: yup.string().required('Required the enter name '),
            date: yup.string().required('Required the enter date'),
            gender: yup.string().required('Required the gender'),
            indentity: yup.number().required('Required the enter indentity'),
            phone: yup.number().required('Required the enter phone'),
            email: yup.string().email('Email format must be xxxxx@gmail.com').required('Required the enter email'),
            typeOfGuest: yup.string().required('Required the enter type of guest'),
            address: yup.string().required('Required the enter address '),
          })}
        >
          <Form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-input-flex">
              <div>
                <Field type="text" name="firstname" id="firstname" placeholder="Jane" className="formbold-form-input" />
                <label htmlFor="firstname" className="formbold-form-label"> Name</label>
                <ErrorMessage name='name' component='div' className='text-color' />
              </div>
              <div>
                <Field type="date" name="date" id="lastname" placeholder="Cooper" className="formbold-form-input" />
                <label htmlFor="lastname" className="formbold-form-label"> Date </label>
                <ErrorMessage name='date' component='div' className='text-color' />
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <Field type="email" name="email" id="email" placeholder="jhon@mail.com" className="formbold-form-input" />
                <label htmlFor="email" className="formbold-form-label"> Mail </label>
                <ErrorMessage name='email' component='div' className='text-color' />
              </div>
              <div>
                <Field type="text" name="phone" id="phone" placeholder="0(319) 555-115" className="formbold-form-input" />
                <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                <ErrorMessage name='phone' component='div' className='text-color' />
              </div>
            </div>
            <div className="formbold-input-flex">
              <div >
                <label>
                  <Field  type="radio" name="gender" value='nam' defaultValue="Nam" />Nam
                </label>
                <label >
                  <Field type="radio" name="gender" value='nu' defaultValue="Nu" />Nữ
                </label>
                <label htmlFor="gender" className="formbold-form-label"> Gender</label>
                <ErrorMessage name='gender' component='div' className='text-color' />
              </div>
              <div>
                <Field type="text" name="identity" id="identity" placeholder={1213124353} className="formbold-form-input" />
                <label htmlFor="identity" className="formbold-form-label"> Identity </label>
                <ErrorMessage name='indentity' component='div' className='text-color' />
              </div>
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="address2" className="formbold-form-label">
                Type of guest
              </label>
              <Field type="text" name="typeOfGuest" id="address2" className="formbold-form-input" />
              <ErrorMessage name='typeOfGuest' component='div' className='text-color' />
            </div>
            <div className="formbold-textarea">
              <textarea rows={3} name="addRess" id="address" placeholder="addRess" className="formbold-form-input" defaultValue={""} />
              <label htmlFor="address" className="formbold-form-label"> Address</label>
              <ErrorMessage name='address' component='div' className='text-color' />
            </div>
            <button className="formbold-btn">
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}