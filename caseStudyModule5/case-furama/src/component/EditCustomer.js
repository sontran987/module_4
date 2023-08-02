import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import { findByIdTypeCustomer, getTypeCustomer } from "../service/typeCustomerService";
import { findByIdCustomer, updateCustomer } from "../service/customerService";
import { useNavigate, useParams } from "react-router";

export default function CreateCustomer() {
  const param = useParams();
  const navigate = useNavigate();
  const [typeCustomer, settypeCustomer] = useState([]);
  const [customer,setCustomer] = useState([]);
  const getListTypeCustomer = async () => {
    const data = await getTypeCustomer();
    settypeCustomer(data);
  }
  const getCustomer = async(id) =>{
    const data = await findByIdCustomer(id);
    setCustomer(data);
  }
  useEffect(() => {
    getListTypeCustomer();
  }, [])
  useEffect(()=>{
    getCustomer(param.id);
  },[param.id])
  const edit = async (value) => {
    const typeOf = await findByIdTypeCustomer(value.typeCustomer);
    console.log(typeOf);
    const customer = {
      id:value.id,
      name: value.name,
      dateOfBirth: value.dateOfBirth,
      gender: value.gender,
      identity: value.identity,
      phone: value.phone,
      email: value.email,
      address: value.address,
      typeCustomer: typeOf
    };
    // console.log(customer);
    updateCustomer(customer);
    navigate('/customer');
  }
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Edit Customer</h1>
        {customer.id &&
        <Formik initialValues={{ 
          id: customer.id,
          name: customer.name, 
          dateOfBirth: customer.dateOfBirth,
           gender: customer.gender,
           identity: customer.identity,
           phone: customer.phone, 
           email: customer.email,
           typeCustomer: customer.typeCustomer.id,
           address: customer.address }}
          validationSchema={yup.object({
            name: yup.string().required('Required the enter name '),
            dateOfBirth: yup.string().required('Required the enter date'),
            gender: yup.string().required('Required the gender'),
            identity: yup.number().required('Required the enter indentity'),
            phone: yup.number().required('Required the enter phone'),
            email: yup.string().email('Email format must be xxxxx@gmail.com').required('Required the enter email'),
            typeCustomer: yup.number().required('Required the enter type of guest'),
            address: yup.string().required('Required the enter address '),
          })}
          onSubmit={(values) => {
            console.log(values);
            edit(values)
          }}
        >
          <Form >
            <Field type="hidden" name="id" />
            <div className="formbold-input-flex">
              <div>
                <Field type="text" name="name" id="name" placeholder="Join" className="formbold-form-input" />
                <label htmlFor="name" className="formbold-form-label"> Name</label>
                <ErrorMessage name='name' component='div' className='text-color' />
              </div>
              <div>
                <Field type="date" name="dateOfBirth" id="dateOfBirth" className="formbold-form-input" />
                <label htmlFor="dateOfBirth" className="formbold-form-label"> Date </label>
                <ErrorMessage name='dateOfBirth' component='div' className='text-color' />
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
                  <Field type="radio" id="gender" name="gender" value='Nam' />Nam
                </label>
                <label >
                  <Field type="radio" id="gender" name="gender" value='Nu' />Nữ
                </label>
                <label htmlFor="gender" className="formbold-form-label"> Gender</label>
                <ErrorMessage name='gender' component='div' className='text-color' />
              </div>
              <div>
                <Field type="text" name="identity" id="identity" placeholder='0222' className="formbold-form-input" />
                <label htmlFor="identity" className="formbold-form-label"> Identity </label>
                <ErrorMessage name='identity' component='div' className='text-color' />
              </div>
            </div>
            <div className="formbold-mb-3">
              <Field as='select' id="typeCustomer" name="typeCustomer">
                <option>--Choose Type of guest--</option>
                {typeCustomer.map((typeCustomer) => (
                  <option name="typeCustomer" as="option" style={{textAlign: 'center'}} key={typeCustomer.id} value={typeCustomer.id}>{typeCustomer.nameType}</option>
                ))}
              </Field>
              <ErrorMessage name='typeCustomer' component='div' className='text-color' />
            </div>
            <div className="formbold-textarea">
              <Field type="text" as= 'textarea' rows={3} name="address" id="address" placeholder="address" className="formbold-form-input" defaultValue={""} />
              <label htmlFor="address" className="formbold-form-label"> Address</label>
              <ErrorMessage name='address' component='div' className='text-color' />
            </div>
            <button type="submit" className="formbold-btn">
              Send
            </button>
          </Form>
        </Formik>}
      </div>
    </div>
  );
}