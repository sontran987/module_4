// import React, { useEffect } from "react";
import hotelHtmlTemplate from '../img/hotel-html-template.jpg'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { createService } from "../service/serviceService";

export default function CreateService() {
  const create = (value) => {
    const service ={
       img: value.img,
       serviceName: value.serviceName,
       area:value.area,
       price: value.price,
       maxOfPeople: value.maxOfPeople,
       pool: value.pool,
       serviceDescription: value.serviceDescription 
     }
     console.log(value);
     createService(service);
   }
  
  return (
    <div className="formbold-main-wrapper">
      <img src={hotelHtmlTemplate} alt="hotel Html Template" height={400} width={600} style={{ float: 'left' }} />
      <div className="formbold-form-wrapper">
        <Formik initialValues={{ serviceName: '', img: '', area: '', price: '', maxOfPeople: '', serviceDescription: '' }}
          validationSchema={yup.object({
            serviceName: yup.string().required('required'),
            img: yup.string().required('required'),
            area: yup.string().required('required'),
            price: yup.number().required('required'),
            maxOfPeople: yup.number().required('required'),
            serviceDescription: yup.string().required('required')
          })}
        >
          <Form onSubmit={(value)=>{
            // console.log(value);
            create(value);
          }}>
            <div className="formbold-form-title">
              <h2 style={{ textAlign: 'center' }}> Add new now</h2>
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="serviceName" className="formbold-form-label">
                Name Service
              </label>
              <Field type="text" name="serviceName" id="serviceName" className="formbold-form-input" />
              <ErrorMessage component='div' style = {{color:'red'}} name="serviceName" />
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="img" className="formbold-form-label">Image</label>
              <Field type="text" name="img" id="img" className="formbold-form-input" />
              <ErrorMessage component='div' style = {{color:'red'}} name="img" />
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="serviceDescription" className="formbold-form-label">
                Service description
              </label>
              <textarea type="text" name="serviceDescription" id="serviceDescription" className="formbold-form-input" />
              <ErrorMessage component='div' style = {{color:'red'}} name="serviceDescription" />
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="area" className="formbold-form-label">Area</label>
                <Field type="text" name="area" id="area" className="formbold-form-input" />
                <ErrorMessage component='div' style = {{color:'red'}} name="area" />
              </div>
              <div>
                <label htmlFor="pool" className="formbold-form-label">Swimming pool area</label>
                <Field type="text" name="pool" id="pool" className="formbold-form-input" />
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="maxOfPeople" className="formbold-form-label">Quantity </label>
                <Field type="number" name="maxOfPeople" id="maxOfPeople" className="formbold-form-input" />
                <ErrorMessage component='div' style = {{color:'red'}} name="maxOfPeople" />
              </div>
              <div>
                <label htmlFor="price" className="formbold-form-label"> Price </label>
                <Field type="text" name="price" id="price" className="formbold-form-input" />
                <ErrorMessage component='div' style = {{color:'red'}} name="price" />
              </div>
            </div>
            <button type="submit" className="formbold-btn" style={{ alignItems: 'center' }}>Register Now</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}