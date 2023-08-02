import { useEffect, useState } from "react";
import { getList } from "../service/nhacService";
import { Link } from "react-router-dom";

export default function DanhSachNhac () {
    const [nhacs, setNhac] = useState([]);
    const [tenBaihat,setTenBaiHat] = useState([]);
    const getNhac = async () => {
        
        const data = await getList();
        setNhac(data);
    };
    useEffect(() => {
         getNhac();
    }, []);
    const thongTin = (tenBaiHat,caSi) =>{
    }
    return (
        <>
            <section>
                <Link to={'/create'}>Đăng kí bài hát</Link>
                <h1>Danh Sach</h1>
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
                                <th>Chức Năng</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0">
                        <tbody>
                            {nhacs.map((nhac, index) => {
                                return(
                                // console.log(nhac.ma);
                                <tr key={nhac.id}>
                                    <td>{index}</td>
                                    <td onClick={thongTin(`${nhac.tenBaiHat}, ${nhac.caSi}`)}>{nhac.tenBaiHat}</td>
                                    <td>{nhac.caSi}</td>
                                    <td>{nhac.thoiGianPhat}</td>
                                    <td>{nhac.soLuotYeuThich}</td>
                                    <td>{nhac.trangThai.ten}</td>
                                    <td>
                                        <button>Công khai</button>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}