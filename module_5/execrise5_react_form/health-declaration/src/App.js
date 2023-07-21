import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import './App.css'

function App() {
  return (
    <>
      <div className='medical'>
        <div>
        <h1>Tờ khai y tế</h1>
      <Formik initialValues={{ hoTen: '', hoChieu: '', namSinh: '', gioiTinh: '', quocTich: '', congTy: '', boPhan: '', coTheBaoHiem: '', tinh: '', huyen: '', xa: '', toDanPho: '', dienThoai: '', email: '' }}
        validationSchema={yup.object({
          hoTen: yup.string().required(),
          hoChieu: yup.string().required(),
          namSinh: yup.number().min(1900).required(),
          // gioiTinh: yup.string().required(),
          quocTich: yup.string().required(),
          tinh: yup.string().required(),
          huyen: yup.string().required(),
          xa: yup.string().required(),
          toDanPho:yup.string().required(),
          dienThoai: yup.string().required(),
          email: yup.string().required().matches('\\^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$','Invalid email address'),

        })}
      >
        <Form>
          <label className='form-label' htmlFor='name'>Họ Tên</label><br />
          <Field id='name' name='name' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='hoTen' component='div' className='text-color' />
          <label className='form-label' htmlFor='passport'>Hộ Chiếu/CMND</label><br />
          <Field id='passport' name='passport' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='hoChieu' component='div' className='text-color' />
          <label className='form-label' htmlFor='date'>Năm Sinh</label><br />
          <Field id='date' name='date' type='number' className='form-input-text' /><br/>
          <ErrorMessage name='namSinh' component='div' className='text-color' />
          <label className='form-label' htmlFor='gender'>Giới Tính  </label>
          <label className='form-label'>
            <Field id='gender' name='gender' type='radio' value='nam' /> Nam
          </label>
          <label className='form-label'>
            <Field id='gender' name='gender' type='radio' value='nữ' />Nữ
          </label><br/>
          <ErrorMessage name='gender' component='div' className='text-color' />
          <label className='form-label' htmlFor='nationatily'>Quốc Tịch</label><br />
          <Field id='nationatily' name='nationatily' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='quocTich' component='div' className='text-color' />
          <label className='form-label' htmlFor='company'>Công Ty Làm Việc</label><br />
          <Field id='company' name='company' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='company' component='div' className='text-color' />
          <label className='form-label' htmlFor='part'>Bộ Phận Làm Việc</label><br />
          <Field id='part' name='part' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='part' component='div' className='text-color' />
          <label className='form-label' htmlFor='medicalCard'>Có thẻ bảo hiểm y tế </label>
          <Field id='medicalCard' name='medicalCard' type='checkbox' />
          <ErrorMessage name='medicalCard' component='div' className='text-color' />
          <h4>Có địa chỉ liên lạc tại Việt Nam</h4>
          <label className='form-label' htmlFor='city'>Tỉnh thành</label><br />
          <Field id='city' name='city' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='tinh' component='div' className='text-color' />
          <label className='form-label' htmlFor='district'>Quận /huyện</label><br />
          <Field id='district' name='district' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='huyen' component='div' className='text-color' />
          <label className='form-label' htmlFor='Ward'>Phường /xã</label><br />
          <Field id='Ward' name='Ward' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='xa' component='div' className='text-color' />
          <label className='form-label' htmlFor='residentialGroup'>Số nhà, phố, tổ dân phố /thôn /đội</label><br />
          <Field id='residentialGroup' name='residentialGroup' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='toDanPho' component='div' className='text-color' />
          <label className='form-label' htmlFor='phone'>Điện thoại</label><br />
          <Field id='phone' name='phone' type='text' className='form-input-text' /><br/>
          <ErrorMessage name='dienThoai' component='div' className='text-color' />
          <label className='form-label' htmlFor='email'>Email</label><br />
          <Field id='email' name='email' type='email' className='form-input-text' /><br/>
          <ErrorMessage name='email' component='div' className='text-color' />
          <label>Trong vòng 14 ngày qua, Anh/ Chị có đến quốc gia/ vùng lãnh thổ nào
             (Có thể đi qua nhiều quốc gia)</label><br/>
          <textarea type='text' className='form-input-text' /><br/>
          <label htmlFor='dauHieu'>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</label><br/>
          <Field type='checkbox' id='dauHieu' value='sot' name='dauHieu'/>Sốt<br/>
          <Field type='checkbox' id='dauHieu' value='ho' name='dauHieu'/>Ho<br/>
          <Field type='checkbox' id='dauHieu' value='khoTho' name='dauHieu'/>Khó Thở<br/>
          <Field type='checkbox' id='dauHieu' value='viemPhoi' name='dauHieu'/>Viêm Phổi<br/>
          <Field type='checkbox' id='dauHieu' value='dauHong' name='dauHieu'/>Đau Họng<br/>
          <Field type='checkbox' id='dauHieu' value='metMoi' name='dauHieu'/>Mệt Mỏi<br/>
          <label htmlFor='trieuChung'>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với ?</label><br/>
          <Field type='checkbox'  value='nghiNgo' name='trieuChung'/>Người bệnh hoặc nghi ngờ mắc bệnh COVID-19<br/>
          <Field type='checkbox'  value='ngoaiVe' name='trieuChung'/>Người từ nước có bệnh COVID-19<br/>
          <Field type='checkbox'  value='bieuHien' name='trieuChung'/>Người co biển hiện (sốt, ho, khó thở, viêm phổi)<br/>
          <button type='submit'>Submit</button>
          
        </Form>
      </Formik>
        </div>
      </div>
    </>
  );
}

export default App;
