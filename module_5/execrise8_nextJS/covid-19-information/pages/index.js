// import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from 'react'
import { getInformation } from './service/informationService'


import axios from "axios"

export async function getStaticProps(){
    const res = await axios.get('http://localhost:8080/information');
    const data=res.data;
    return{
      props:{
      data
      }
    } 
}


export default function Home({data}) {
  // const [covid19, setCovid19] = useState([]);
  // const getList = async () => {
  //   const data = await getInformation();
  //   setCovid19(data);
  // }
  // useEffect(() => {
  //   getList();
  // },[])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Viet Nam COVID-19 Information </h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {data.map((covid,index) => {
            console.log(covid.id);
            return(
            <tr key={covid.id}>
              <td>{covid.date}</td>
              <td>{covid.confirmed}</td>
              <td>{covid.active}</td>
              <td>{covid.recovered}</td>
              <td>{covid.deaths}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}
