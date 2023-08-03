import { useEffect, useState } from "react";
import { deleteMusic, getList, searchMusic, updateNhac } from "../service/nhacService";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import ReactPaginate from 'react-paginate';

export default function DanhSachNhac() {
    const [page,setPage] = useState(0);
    const [total,setTotal] = useState(0);
    const limit = 1;
    const [nhacs, setNhac] = useState([]);
    const handlePageClick = () =>{
        if (page>0 &&  pagination) {
            setPage((prev) =>prev-1);}
            
    }
    const getNhac = async () => {
        const data = await getList(page,limit);
        setNhac(data.content);
        console.log(data.totalPages);
        setTotal(data.totalPages)
    };
    useEffect(() => {
        getNhac();
    },[page]);
    const deleteMusicId = (id) => {
        deleteMusic(id);
        getNhac();
    }
    const updateMusicId = async (id) => {
        await updateNhac(id);
        getNhac();
    }

    const search = async (value) => {
        const data = await searchMusic(value.nameMusic);
        setNhac(data);
    }
    return (
        <>
            <section>
                <Link to={'/create'}>Đăng kí bài hát</Link>
                <h1>Danh Sach</h1>
                <div style={{ float: "right" }}>
                    <Formik initialValues={{
                        nameMusic:''
                    }} onSubmit={(values) => { search(values) }}>
                        <Form >
                            <Field type="text" name="nameMusic" />
                            <button type="submit" className="btn btn-success">Search</button>
                        </Form>
                    </Formik>
                </div>
                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Bài Hát</th>
                                <th>Ca Sĩ</th>
                                <th>Thời Gian Phát</th>
                                <th>Số Lượt Yêu Thích</th>
                                <th>Trạng Thái</th>
                                <th colSpan={2}>Chức Năng</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0">
                        <tbody>
                            {nhacs.map((nhac, index) => {
                                return (
                                    // console.log(nhac.ma);
                                    <tr key={nhac.id}>
                                        <td>{index + 1}</td>
                                        <td>{nhac.nameMusic}</td>
                                        <td>{nhac.singer}</td>
                                        <td>{nhac.playTime}</td>
                                        <td>{nhac.numberOfFavorites}</td>
                                        <td>{nhac.status.nameStatus}</td>
                                        <td>
                                            <p onClick={() => { updateMusicId(`${nhac.id}`) }} className="btn btn-primary ">Công khai</p>
                                        </td>
                                        <td> <p onClick={() => { deleteMusicId(`${nhac.id}`) }} className="btn btn-success">Delete</p></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </section>
            
            <p onClick={()=>{if (page>0) {
             setPage((prev) =>prev-1); console.log(page);
            }}} className="btn btn-primary">previous</p>
            <p className="btn ">{page}</p>
            <p className="btn btn-primary" action>{page+1}</p>
            <p className="btn ">{page+2}</p>
            <p onClick={()=>{if (page<total-1) {
                setPage((prev) => prev+1)
            }}} className="btn btn-primary">next</p>
            
        </>
    );
}