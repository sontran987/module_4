import React from "react";
import thienHa from '../img/thienHa1.jpg'
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup'

export default function CreateContract() {
    const onCreate = (value) =>{
                        
    }
    return (
        <div style={{ background: `url(${thienHa })`, backgroundSize: 'cover' }} >
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper" style={{ opacity: '0.8', borderRadius: '15px', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '35px', textAlign: 'center',color:'black' }}>Contract Furama</h1>
                    <Formik initialValues={{id:'',checkIn:'',checkOut:'',advanceDepositAmount:'',totalPaymentAmount:''}}
                    validationSchema={yup.object({
                        id:yup.string().required('Required Id'),
                        checkIn: yup.string().required('Required check in'),
                        checkOut: yup.string().required('Required check out'),
                        advanceDepositAmount: yup.string().required('Required advance deposit amount'),
                        totalPaymentAmount: yup.string().required('Required total payment amount'),
                        
                    })}
                    onSubmit={(values)=>{
                        onCreate(values)
                    }}
                    
                    >
                    <form >
                        <div className="formbold-mb-5">
                            <label htmlFor="id" className="formbold-form-label"> Id Contract </label>
                            <input type="text" name="id" id="id" placeholder="Id Contract" className="formbold-form-input" />
                            <ErrorMessage component='div' style={{ color: 'red' }} name="id" />
                        </div>
                        <div className="flex flex-wrap formbold--mx-3">
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5 w-full">
                                    <label htmlFor="checkIn" className="formbold-form-label"> Check in</label>
                                    <input type="date" name="Check in" id="checkIn" className="formbold-form-input" />
                                    <ErrorMessage component='div' style={{ color: 'red' }} name="checkIn" />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <label htmlFor="checkOut" className="formbold-form-label"> Check out</label>
                                    <input type="date" name="checkOut" id="checkOut" className="formbold-form-input" />
                                    <ErrorMessage component='div' style={{ color: 'red' }} name="checkOut" />
                                </div>
                            </div>
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="advanceDepositAmount" className="formbold-form-label"> Advance deposit amount</label>
                            <input type="text" name="advanceDepositAmount" id="advanceDepositAmount" placeholder="Advance deposit amount" className="formbold-form-input" />
                            <ErrorMessage component='div' style={{ color: 'red' }} name="advanceDepositAmount" />
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="totalPaymentAmount" className="formbold-form-label">Total payment amount</label>
                            <input type="text" name="totalPaymentAmount" id="totalPaymentAmount" placeholder="Total payment amount" className="formbold-form-input" />
                            <ErrorMessage component='div' style={{ color: 'red' }} name="totalPaymentAmount" />
                        </div>
                        <div>
                            <button className="formbold-btn">Book Appointment</button>
                        </div>
                    </form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}