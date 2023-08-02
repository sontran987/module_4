import { ErrorMessage, Field, Form, Formik } from "formik";
import { addNhac } from "../service/nhacService";
import * as yup from 'yup';

export default function ThemMoi() {
    
    const createNhac = (value) => {
        const nhac = {
            tenBaiHat: value.tenBaiHat,
            caSi: value.caSi,
            nhacSi: value.nhacSi,
            thoiGianPhat: value.thoiGianPhat,
            soLuotYeuThich: 0,
            trangThai: {
                ma: 1,
                ten: "Lưu trữ"
            }
        }
        addNhac(nhac);
    };


    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <Formik initialValues={{
                    tenBaiHat: '',
                    caSi: '',
                    nhacSi: '',
                    thoiGianPhat: ''
                }} 
                validationSchema={yup.object({
                    tenBaiHat: yup.string().required(' tên bài hát không để trống'),
                    caSi: yup.string().required('ca sĩ không để trống').max(30, 'tối đa 30 ký tự'),
                    nhacSi: yup.string().required('nhạc sĩ không để trống').max(30, 'tối đa 30 ký tự'),
                    thoiGianPhat: yup.string().required('thời gian phát không để trống').matches('^[0-9]{2}(:)[0-9]{2}$', 'định dạng phải là hh:mm')
                })}
                // validationSchema={yup.object({
                //     tenBaiHat: yup.string().required('required'),
                //     caSi: yup.string().required('required').max(30, 'tối đa 30 ký tự'),
                //     nhacSi: yup.string.required('required').max(30, 'tối đa 30 ký tự'),
                //     thoiGianPhat: yup.string().required('required').matches('^[0-9]{2}(:)[0-9]{2}$', 'định dạng phải là hh:mm')
                // })}
                        onSubmit={(values) => {
                    createNhac(values);
                }}>
                    <Form>
                        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Đăng Kí Bài Hát</h1>
                        <div className="formbold-input-flex">
                            <div>
                                <ErrorMessage name='tenBaiHat' component={'div'} style={{color:'red'}} />
                                <Field type="text" name="tenBaiHat" id="tenBaiHat"
                                    className="formbold-form-input" />
                                <label htmlFor="tenBaiHat" className="formbold-form-label"> Tên Bài Hát</label>

                            </div>
                            <div>
                                <ErrorMessage name='caSi' component={'div'} style={{color:'red'}} />
                                <Field type="text" name="caSi" id="caSi"
                                    className="formbold-form-input" />
                                <label htmlFor="caSi" className="formbold-form-label"> Ca Sĩ </label>

                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                            <ErrorMessage name='nhacSi' component={'div'} style={{color:'red'}}  />
                                <Field type="text" name="nhacSi" id="nhacSi"
                                    className="formbold-form-input" />
                                <label htmlFor="nhacSi" className="formbold-form-label"> Nhạc Sĩ </label>

                            </div>
                            <div>
                            <ErrorMessage name='thoiGianPhat' component={'div'} style={{color:'red'}} />

                                <Field type="text" name="thoiGianPhat" id="thoiGianPhat" placeholder="00:00"
                                    className="formbold-form-input" />
                                <label htmlFor="thoiGianPhat" className="formbold-form-label"> Thời Gian Phát </label>

                            </div>
                        </div>

                        <button type="submit" className="formbold-btn">
                            Đăng Ký
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}