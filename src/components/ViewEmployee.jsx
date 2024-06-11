import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewEmployee = () => {
    const [data,changeData] = useState([])
    const fetchData = ()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
                console.log(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Emp.Id</th>
                                    <th scope="col">EmpName</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{value.empId}</th>
                                            <td>{value.empName}</td>
                                            <td>{value.designation}</td>
                                            <td>{value.Salary}</td>
                                        </tr>
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewEmployee