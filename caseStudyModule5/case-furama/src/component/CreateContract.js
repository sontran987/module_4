import React from "react";
import thienHa from '../img/thienHa1.jpg'

export default function CreateContract() {
    return (
        <div style={{ background: `url(${thienHa })`, backgroundSize: 'cover' }} >
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper" style={{ opacity: '0.8', borderRadius: '15px', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '35px', textAlign: 'center',color:'black' }}>Contract Furama</h1>
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="formbold-mb-5">
                            <label htmlFor="contract" className="formbold-form-label"> Id Contract </label>
                            <input type="text" name="contract" id="contract" placeholder="Id Contract" className="formbold-form-input" />
                        </div>
                        <div className="flex flex-wrap formbold--mx-3">
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5 w-full">
                                    <label htmlFor="checkIn" className="formbold-form-label"> Check in</label>
                                    <input type="date" name="Check in" id="checkIn" className="formbold-form-input" />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <label htmlFor="checkOut" className="formbold-form-label"> Check out</label>
                                    <input type="date" name="checkOut" id="checkOut" className="formbold-form-input" />
                                </div>
                            </div>
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="amount" className="formbold-form-label"> Advance deposit amount</label>
                            <input type="text" name="amount" id="amount" placeholder="Advance deposit amount" className="formbold-form-input" />
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="total" className="formbold-form-label">Total payment amount</label>
                            <input type="text" name="total" id="total" placeholder="Total payment amount" className="formbold-form-input" />
                        </div>
                        <div>
                            <button className="formbold-btn">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}