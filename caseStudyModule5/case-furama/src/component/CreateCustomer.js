import { Form, Formik, Field } from "formik";
import React from "react";
import * as yup from 'yup';

export default function CreateCustomer(){
    return(
        <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Create Customer</h1>
          <Formik initialValues={{}}
          validationSchema={yup.object({
            
          })}
          
          >
            
          <Form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-input-flex">
              <div>
                <Field type="text" name="firstname" id="firstname" placeholder="Jane" className="formbold-form-input" />
                <label htmlFor="firstname" className="formbold-form-label"> Name</label>
                {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
              </div>
              <div>
                <Field type="date" name="lastname" id="lastname" placeholder="Cooper" className="formbold-form-input" />
                <label htmlFor="lastname" className="formbold-form-label"> Date </label>
                {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <Field type="email" name="email" id="email" placeholder="jhon@mail.com" className="formbold-form-input" />
                <label htmlFor="email" className="formbold-form-label"> Mail </label>
                {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
              </div>
              <div>
                <Field type="text" name="phone" id="phone" placeholder="(319) 555-0115" className="formbold-form-input" />
                <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label>
                  <Field type="radio" name="gender" defaultValue="Nam" />Nam</label>
                <label>
                  <Field type="radio" name="gender" defaultValue="Nam" />Nữ</label>
                <label className="formbold-form-label"> Gender</label>
                {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
              </div>
              <div>
                <Field type="text" name="identity" id="identity" placeholder={1213124353} className="formbold-form-input" />
                <label htmlFor="identity" className="formbold-form-label"> Identity </label>
                {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
              </div>
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="address2" className="formbold-form-label">
                Street Address Line 2
              </label>
              <Field type="text" name="address2" id="address2" className="formbold-form-input" />
              {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
            </div>
            <div className="formbold-textarea">
              <textarea rows={3} name="addRess" id="message" placeholder="addRess" className="formbold-form-input" defaultValue={""} />
              <label htmlFor="message" className="formbold-form-label"> Address</label>
              {/* <ErrorMessage name='name' component='div' className='text-color' /> */}
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