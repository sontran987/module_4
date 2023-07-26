import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCustomer } from "../service/customerService";

export default function ListCustomer() {
  const [customers, setCustomer] = useState([]);
  const getList = async () => {
    const data = await getCustomer();
    setCustomer(data);
  }
  useEffect(()=>{
    getList();
  },[])
  return (
    <body>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row" >
                <div className="col-sm-6" style={{ float: 'left', marginTop: '20px', display: 'inline' }}>
                  <h2>Customer <b>Management</b></h2>
                </div>
                <div class="col-sm-6" >
                  
                    <NavLink to={'/customer/create'} style={{ marginBottom: '50px', float: 'right', marginTop: '20px'}} className="glowing-btn"><span class='glowing- txt'>Cre<span class='faulty-letter'>ate </span>Service</span></NavLink>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>Gender</th>
                  <th>Identity</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Type of guest</th>
                  <th>Address</th>
                  <th>Mission</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.dateOfBirth}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.identity}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.typeOfGuest}</td>
                    <td>{customer.address}</td>
                    <td>
                      <NavLink to={'/customer/edit'} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                      <NavLink style={{ border: 'none' }} title="Delete" data-toggle="tooltip" className="delete" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></NavLink>
                    </td>
                  </tr>
                ))
                }
                {/* <tr>
                  <td>1</td>
                  <td><NavLink to={''}> Michael Holz</NavLink></td>
                  <td>04/10/2013</td>
                  <td>Nam</td>
                  <td>81098390280</td>
                  <td>0592349873</td>
                  <td>thanhson@gmail.com</td>
                  <td>Kim cương</td>
                  <td>Đà nẵng, Việt Nam</td>
                  <td>
                    <NavLink to={'/customer/edit'} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                    <NavLink style={{ border: 'none' }} title="Delete" data-toggle="tooltip" className="delete" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></NavLink>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><NavLink to={''}> Paula Wilson</NavLink></td>
                  <td>05/08/2014</td>
                  <td>Nữ</td>
                  <td>81098390280</td>
                  <td>0592349873</td>
                  <td>thanhson@gmail.com</td>
                  <td>Kim cương</td>
                  <td>Đà nẵng, Việt Nam</td>
                  <td>
                    <NavLink to={'/customer/edit'} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                    <NavLink style={{ border: 'none' }} title="Delete" data-toggle="tooltip" className="delete " data-bs-toggle="modal" data-bs-target="#exampleModal"><span><i class="fa-solid fa-trash"></i> </span></NavLink>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><NavLink to={''}> Antonio Moreno</NavLink></td>
                  <td>11/05/2015</td>
                  <td>Nữ</td>
                  <td>0592349873</td>
                  <td>81098390280</td>
                  <td>thanhson@gmail.com</td>
                  <td>Kim cương</td>
                  <td>Đà nẵng, Việt Nam</td>
                  <td>
                    <NavLink to={'/customer/edit'} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                    <NavLink style={{ border: 'none' }} title="Delete" data-toggle="tooltip" className="delete " data-bs-toggle="modal" data-bs-target="#exampleModal"><span><i class="fa-solid fa-trash"></i> </span></NavLink>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><NavLink to={''}> Mary Saveley</NavLink></td>
                  <td>06/09/2016</td>
                  <td>Nữ</td>
                  <td>0592349873</td>
                  <td>81098390280</td>
                  <td>thanhson@gmail.com</td>
                  <td>Kim cương</td>
                  <td>Đà nẵng, Việt Nam</td>
                  <td>
                    <NavLink to={'/customer/edit'} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                    <NavLink style={{ border: 'none' }} title="Delete" data-toggle="tooltip" className="delete " data-bs-toggle="modal" data-bs-target="#exampleModal"><span><i class="fa-solid fa-trash"></i> </span></NavLink>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><NavLink to={''}> Martin Sommer</NavLink></td>
                  <td>12/08/2017</td>
                  <td>Nữ</td>
                  <td>0592349873</td>
                  <td>81098390280</td>
                  <td>thanhson@gmail.com</td>
                  <td>Kim cương</td>
                  <td>Đà nẵng, Việt Nam</td>
                  <td>
                    <NavLink to={'/customer/edit'} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                    <NavLink style={{ border: 'none' }} title="Delete" data-toggle="tooltip" className="delete " data-bs-toggle="modal" data-bs-target="#exampleModal"><span><i class="fa-solid fa-trash"></i> </span></NavLink>
                  </td>
                </tr> */}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item disabled"><NavLink to={'/'} className="page-link">Previous</NavLink></li>
                <li className="page-item"><NavLink to={'/'} className="page-link">1</NavLink></li>
                <li className="page-item"><NavLink to={'/'} className="page-link">2</NavLink></li>
                <li className="page-item active"><NavLink to={'/'} className="page-link">3</NavLink></li>
                <li className="page-item"><NavLink to={'/'} className="page-link">4</NavLink></li>
                <li className="page-item"><NavLink to={'/'} className="page-link">5</NavLink></li>
                <li className="page-item"><NavLink to={'/'} className="page-link">Next</NavLink></li>
              </ul>
            </div>
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
    </body>

  );
}