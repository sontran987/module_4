import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteCustomer, getCustomer } from "../service/customerService";
import ReactPaginate from 'react-paginate';
import Swal from "sweetalert2";

export default function ListCustomer() {
  const [customers, setCustomer] = useState([]);
  // const [totalElement, setTotalElement] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);


  const getList = async () => {
    const res = await getCustomer();
    setCustomer(res.data);
      // setTotalElement(res.total);
    // setTotalPage(res.total_page);
  }
  useEffect(() => {
    getList();
  }, []);
  const handlePageClick = () => {

  }

const checkDelete = async(id) =>{
  console.log(id);
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
      deleteByIdCustomer(id).then(() => {
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
const deleteByIdCustomer = async(id) =>{
  await deleteCustomer(id);
}
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

                  <NavLink to={'/customer/create'} style={{ marginBottom: '50px', float: 'right', marginTop: '20px' }} className="glowing-btn"><span class='glowing- txt'>Cre<span class='faulty-letter'>ate </span>Service</span></NavLink>
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
                    <td>{customer.typeCustomer.nameType}</td>
                    <td>{customer.address}</td>
                    <td>
                      <NavLink to={`/customer/edit/${customer.id}`} className="settings" title="Edit profile" data-toggle="tooltip"><i className="material-icons"></i></NavLink>
                      <NavLink style={{ border: 'none' }} onClick={()=>{checkDelete(customer.id)}} title="Delete" data-toggle="tooltip" className="delete" ><i class="fa-solid fa-trash"></i></NavLink>
                    </td>
                  </tr>
                ))
                }

              </tbody>
            </table>
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={4}
              pageCount={20}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
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