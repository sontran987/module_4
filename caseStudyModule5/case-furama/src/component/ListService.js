import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import room1 from '../img/room-1.jpg'
import room2 from '../img/room-2.jpg'
import room3 from '../img/room-3.jpg'
import { getService } from "../service/serviceService";


function ListService() {
  const [services, setServices] = useState([]);
  const getList = async () => {
    const data = await getService();
    setServices(data);
  }
  useEffect(()=>{
    getList();
  },[])
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
          </div>
          <NavLink to={'/service/create'} >
            <button style={{ marginBottom: '50px' }} className="glowing-btn"><span class='glowing-txt'>Cre<span class='faulty-letter'>ate </span>Service</span></button>
          </NavLink>
          <div className="row g-4">
            {services.map((service)=>(
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src={room1} alt="thanhson" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{service.price}/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{service.serviceName}</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />{service.maxOfPeople}
                       Max</small>
                    <small className="border-end me-3 pe-3"><i class="fa-solid fa-water-ladder" /> {service.pool}
                       Pool</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">{service.serviceDescription}</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            ))}
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src={room1} alt="thanhson" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Room 1</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src={room2} alt="thanhson" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src={room3} alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-1.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Junior Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-2.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Executive Suite</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                <div className="position-relative">
                  <img className="img-fluid" src="img/room-3.jpg" alt="" />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Super Deluxe</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3
                      Bed</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2
                      Bath</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                    sed diam stet diam sed stet lorem.</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to={'/service/edit'} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                    <button className="btn btn-sm btn-dark rounded py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*modal delete room*/}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Notification</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              You want to delete?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
    //   {/* Room End */}
  );
}
export default ListService;