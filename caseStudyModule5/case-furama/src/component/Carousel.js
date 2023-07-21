import React from "react";
import carousel1 from '../img/carousel1.jpg'
import carousel2 from '../img/carousel2.jpg'


function Carousel() {

  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Carousel slide 1" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury
                    Living</h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious
                    Hotel</h1>
                  <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                  <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Carousel slide 2" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Bài đăng</h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious
                    Hotel</h1>
                  <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                  <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Booking Start */}
      <div className="container-fluid booking wow fadeIn" data-wow-delay="0.001s">
        <div className="container">
          <div className="bg-light shadow" style={{ padding: '25px', borderRadius: '15px' }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="date" id="date2" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Adult</option>
                      <option value={1}>Adult 1</option>
                      <option value={2}>Adult 2</option>
                      <option value={3}>Adult 3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Child</option>
                      <option value={1}>Child 1</option>
                      <option value={2}>Child 2</option>
                      <option value={3}>Child 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}
    </>
  );
}

export default Carousel;