import React from "react";
import { NavLink } from "react-router-dom";

const customer = [
  {
    id: 1,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 2,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 3,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 4,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 5,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 6,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 7,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 8,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 9,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 10,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 11,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 12,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 13,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },
  {
    id: 14,
    name: 'Michael Holz',
    dateOfBirth: '21-12-2020',
    gender: 'Nam',
    identity: '123125643852',
    phone: '0127628827',
    email: 'thanhson@gmail.com',
    typeOfGuest: 'Kim cương ',
    address: 'Da Nang, Viet Nam'
  },

];

export default function ListCustomer() {
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
                  <NavLink to={'/customer/create'} style={{ float: 'right', marginTop: '20px' }} >
                    <NavLink style={{ marginBottom: '50px' }} className="glowing-btn"><span class='glowing- txt'>Cre<span class='faulty-letter'>ate </span>Service</span></NavLink>
                  </NavLink>
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
                {customer.map((customers) => (
                  <tr key={customers.id}>
                    <td>{customers.id}</td>
                    <td>{customers.name}</td>
                    <td>{customers.dateOfBirth}</td>
                    <td>{customers.gender}</td>
                    <td>{customers.identity}</td>
                    <td>{customers.phone}</td>
                    <td>{customers.email}</td>
                    <td>{customers.typeOfGuest}</td>
                    <td>{customers.address}</td>
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