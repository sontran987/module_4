import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import './App.css'

function App() {
  return (
    <>
      <h1>Contact Form</h1>
      <Formik initialValues={{ name: '', email: '', phone: '', message: '' }}
        validationSchema={yup.object({
          name: yup.string().required('Required'),
          email: yup.string().required('Required').email(),
          phone: yup.string().required('Required').max(10, "khong duoc qua 10 so"),

        })}
      >

        <Form>
          <table>
            <tr>
              <th><label htmlFor='name'>Name:  </label></th>
              <Field id='name' type='text' name='name' />
            </tr>
            <ErrorMessage name='name' component='div' className='text-color' />
            <tr>
              <th><label htmlFor='email'>Email:  </label></th>
              <Field id='email' type='email' name='email' />
            </tr>
            <ErrorMessage name='email' component='div' className='text-color' />
            <tr>
              <th><label htmlFor='phone'>Phone:  </label></th>
              <Field id='phone' type='text' name='phone' />
            </tr>
            <ErrorMessage name='phone' component='div' className='text-color' />
            <tr>
              <th><label htmlFor='message'>Message:  </label></th>
              <textarea id='message' name='message'></textarea>
            </tr>
            <ErrorMessage name='message' component='div' className='text-color' />
            <tr>
              <td><button type='submit'>Submit</button></td>
            </tr>
          </table>
        </Form>

      </Formik>

    </>
  );
}

export default App;
