import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteService, getService } from "../service/serviceService";
import Swal from 'sweetalert2';


function ListService() {
  const [services, setServices] = useState([]);
  const getList = async () => {
    const data = await getService();
    setServices(data);
  }
  useEffect(() => {
    getList();
  }, []);
  const onDelete = (idDelete) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }
    ).then((res) => {
      if (res.isConfirmed) {
        delet(idDelete).then(() => {
          getList().then((data) => {
          }).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Edit success fully!!!!',
              showConfirmButton: false,
              timer: 1500
            })
          })
        });
      } else if (res.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
  const delet = async (id) => {
    await deleteService(id);
  }
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
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden" style={{ borderRadius: '20px' }}>
                  <div className="position-relative">
                    <img className="" height={200} width={'100%'} src={service.img} alt={service.serviceName} />
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
                      <NavLink to={`/service/edit/${service.id}`} className="btn btn-sm btn-primary rounded py-2 px-4" >Edit</NavLink>
                      <button onClick={() => { onDelete(service.id) }} className="btn btn-sm btn-dark rounded py-2 px-4" >Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListService;