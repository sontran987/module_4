import React from "react";
import hotelHtmlTemplate from '../img/hotel-html-template.jpg'

export default function CreateService(){
    return(
        <div className="formbold-main-wrapper">
        <img src={hotelHtmlTemplate} height={400} width={600} style={{float: 'left'}} />
        <div className="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-form-title">
              <h2 style={{textAlign: 'center'}}> Add new now</h2>
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="name" className="formbold-form-label">
                Name Room
              </label>
              <input type="text" name="name" id="name" className="formbold-form-input" />
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label">
                Image
              </label>
              <input type="file" name="image" id="address" className="formbold-form-input" />
            </div>
            <div className="formbold-mb-3">
              <label htmlFor="address2" className="formbold-form-label">
                Introduce
              </label>
              <textarea type="text" name="address2" id="address2" className="formbold-form-input" defaultValue={""} />
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="state" className="formbold-form-label">Quantily </label>
                <input type="number" name="quantily" id="state" className="formbold-form-input" />
              </div>
              <div>
                <label htmlFor="country" className="formbold-form-label"> Price </label>
                <input type="text" name="country" id="country" className="formbold-form-input" />
              </div>
            </div>
            <button className="formbold-btn" style={{alignItems: 'center'}}>Register Now</button>
          </form>
        </div>
      </div>
    );
}