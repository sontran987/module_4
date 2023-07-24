import React from "react";

export default function EditCustomer() {
  return (
    <div className="formbold-form-wrapper">
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Edit Customer</h1>
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="formbold-input-flex">
          <div>
            <input type="text" name="firstname" id="firstname" placeholder="Jane" className="formbold-form-input" />
            <label htmlFor="firstname" className="formbold-form-label"> Name</label>
          </div>
          <div>
            <input type="date" name="lastname" id="lastname" placeholder="Cooper" className="formbold-form-input" />
            <label htmlFor="lastname" className="formbold-form-label"> Date </label>
          </div>
        </div>
        <div className="formbold-input-flex">
          <div>
            <input type="email" name="email" id="email" placeholder="jhon@mail.com" className="formbold-form-input" />
            <label htmlFor="email" className="formbold-form-label"> Mail </label>
          </div>
          <div>
            <input type="text" name="phone" id="phone" placeholder="(319) 555-0115" className="formbold-form-input" />
            <label htmlFor="phone" className="formbold-form-label"> Phone </label>
          </div>
        </div>
        <div className="formbold-input-flex">
          <div>
            <label style={{ display: 'inline-block' }}>
              <input type="radio" name="gender" defaultValue="Nam" />Nam</label>
            <label>
              <input type="radio" name="gender" defaultValue="Nam" />Nữ</label>
            <label className="formbold-form-label"> Gender</label>
          </div>
          <div>
            <input type="text" name="identity" id="identity" placeholder={1213124353} className="formbold-form-input" />
            <label htmlFor="identity" className="formbold-form-label"> Identity </label>
          </div>
        </div>
        <div className="formbold-mb-3">
          <label htmlFor="address2" className="formbold-form-label">
            Street Address Line 2
          </label>
          <input type="text" name="address2" id="address2" className="formbold-form-input" />
        </div>
        <div className="formbold-textarea">
          <textarea rows={3} name="addRess" id="message" placeholder="addRess" className="formbold-form-input" defaultValue={""} />
          <label htmlFor="message" className="formbold-form-label"> Address</label>
        </div>
        <button className="formbold-btn">
          Send Message
        </button>
      </form>
    </div>
    );
}