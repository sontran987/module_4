import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import { findByIdTypeCustomer, getTypeCustomer } from "../service/typeCustomerService";
import { createCustomer } from "../service/customerService";
import {useNavigate } from "react-router";
// import { useParams } from "react-router";

export default function CreateCustomer() {
  // const id = useParams;
  const navigate = useNavigate();
  const [typeOfGuests, setTypeOfGuests] = useState([]);
  const getListTypeCustomer = async () => {
    const data = await getTypeCustomer();
    setTypeOfGuests(data);
  }
  useEffect(() => {
    getListTypeCustomer();
  }, [])
  const create = async (values) => {
    const typeOf = await findByIdTypeCustomer(values.typeOfGuest);
    console.log(typeOf);
    const customer = {
      name: values.name,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
      identity: values.identity,
      phone: values.phone,
      email: values.email,
      address: values.address,
      typeCustomer: typeOf
    };
    createCustomer(customer);
    navigate('/customer');
  }
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        
        <Formik initialValues={{ 
          name: '', dateOfBirth: '', gender: '', 
          identity: '', phone: '', email: '', 
          typeOfGuest: '' , address: '' }}
          validationSchema={yup.object({
            name: yup.string().required('Required the enter name '),
            dateOfBirth: yup.string().required('Required the enter date'),
            gender: yup.string().required('Required the gender'),
            identity: yup.number().required('Required the enter indentity'),
            phone: yup.number().required('Required the enter phone'),
            email: yup.string().email('Email format must be xxxxx@gmail.com').required('Required the enter email'),
            typeOfGuest: yup.number().required('Required the enter type of guest'),
            address: yup.string().required('Required the enter address '),
          })}
          onSubmit={(values) => {
            create(values)}}
          
        >
          <Form >
            <h1 style={{ textAlign: 'center',marginTop:'20px'}}>Create Customer</h1>
            <div className="formbold-input-flex">
              <div>
                <ErrorMessage name='name' component='div' style={{color:'red'}} />
                <Field type="text" name="name" id="name" placeholder="Jane" className="formbold-form-input" />
                <label htmlFor="name" className="formbold-form-label"> Name</label>
                
              </div>
              <div>
                <ErrorMessage name='dateOfBirth' component='div' style={{color:'red'}} />
                <Field type="date" name="dateOfBirth" id="dateOfBirth" placeholder="Cooper" className="formbold-form-input" />
                <label htmlFor="dateOfBirth" className="formbold-form-label"> Date </label>
               
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <ErrorMessage name='email' component='div' style={{color:'red'}} />
                <Field type="email" name="email" id="email" placeholder="jhon@mail.com" className="formbold-form-input" />
                <label htmlFor="email" className="formbold-form-label"> Mail </label>
               
              </div>
              <div>
                <ErrorMessage name='phone' component='div' style={{color:'red'}} />
                <Field type="text" name="phone" id="phone" placeholder="0(319) 555-115" className="formbold-form-input" />
                <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                
              </div>
            </div>
            <div className="formbold-input-flex">
              <div >
              <ErrorMessage name='gender' component='div' style={{color:'red'}} />
                <label>
                  <Field type="radio" name="gender" value='Nam' />Nam
                  <Field type="radio" name="gender" value='Nu' style={{marginLeft:'15px'}}/>Nữ
                </label>
                <label htmlFor="gender" className="formbold-form-label"> Gender</label>
                
              </div>
              <div>
                <ErrorMessage name='identity' component='div' style={{color:'red'}} />
                <Field type="text" name="identity" id="identity" placeholder={1213124353} className="formbold-form-input" />
                <label htmlFor="identity" className="formbold-form-label"> Identity </label>
                
              </div>
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="typeOfGuest" className="formbold-form-label">
              Type of guest
               </label>
              <Field name="typeOfGuest" as="select">
                <option>--Choose Type of guest--</option>
                {typeOfGuests.map((typeOfGuest) => (
                  <option style={{textAlign: 'center'}} key={typeOfGuest.id} value={typeOfGuest.id}>{typeOfGuest.nameType}</option>
                ))}
              </Field>
               <ErrorMessage name='typeOfGuest' component='div' style={{color:'red'}} />
            </div>
            <div className="formbold-textarea">
              <ErrorMessage name='address' component='div' style={{color:'red'}} />
              <Field type="text" as= 'textarea' rows={3} name="address" id="address" placeholder="address" className="formbold-form-input" defaultValue={""} />
              <label htmlFor="address" className="formbold-form-label"> Address</label>
              
            </div>
            <button type="submit" className="formbold-btn">
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}