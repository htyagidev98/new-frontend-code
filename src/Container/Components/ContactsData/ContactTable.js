import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import tableImage from "../../assets/images/ByeWind.png";
import bank from "../../assets/images/bank.png";
import todolist from "../../assets/images/todolist.png";
import { HiPlusSm } from "react-icons/hi";
import { AiOutlineDownCircle } from "react-icons/ai";
import axios from "axios";
import {
  BsBagX,
  BsFileEarmarkBarGraph,
  BsFillTelephoneFill,
} from "react-icons/bs";
import "./contacttable.css";
import CreateContactModal from './AddContact/CreateContactModal'
import { useSelector, useDispatch } from "react-redux";
import { getFormData } from "../../Redux/Slices/ContactSlice";
const ContactTable = () => {
  const[createContactModal, setCreateContactModal]= useState(false)
  
  const dispatch= useDispatch(); 
  const {formData, sidebarData, categoryName} = useSelector((state)=> state.contact);
  
  let categoryData=  sidebarData[0]?.category;
  const [flag,setFlag]=useState(true);


 const data= formData.map((curElm)=>{
    return curElm.length    
  })

  
   
  //  const catData= sidebarData[0]?.category
   const closeModal=()=>{
    setCreateContactModal(false);
   }

   const test=async()=>{
    let cat=sidebarData[0]?.category;
    const res= await axios.get(`http://localhost:5100/contact/contact/list?category=${cat}`)
    const mainData= res.data.responseData.contactList;
    
    dispatch(getFormData(mainData));
   }

   useEffect(()=>{
    if(categoryName == categoryData){
      setFlag(true);
    }else{
      setFlag(false);
    }
    test();
   
   },[sidebarData,categoryName])
   
   

  return (
    <div>
      <section className="contact_table_wrapper">
        <div className="sidebar_wrapper">
          <Sidebar />
        </div>
        <main className="mainContent">
          <div className="table_data">
            <div className="header_spacing">
              <div className="d-flex justify-content-between align-items-center">
                <div className="table_header d-flex align-items-center">
                  <span>
                    <img src={bank} alt="bank_ing" className="handw" />{" "}
                  </span>
                 {flag? <span className="crypto_text text-capitalize">{categoryData}</span>:
                  <span className="crypto_text text-capitalize">{categoryName?.category}  </span>}
                </div>

                <div className="table_header me-3 d-flex justify-content-between align-items-center">
                  <span className="me-3 mt-8">Share </span>
                  <span>... </span>
                </div>
              </div>
              <div className="filter_section">
                <div className="left_data">
                  <div className="first_span_button_style">
                    {" "}
                    <span>
                      {" "}
                      <img
                        src={todolist}
                        alt="span_img"
                        className="img_fluids text-white me-2"
                      />{" "}
                    </span>{" "}
                    <span className="fw-bold me-2 f-13">List</span>{" "}
                    <span className="span_child_button">{data} PEOPLE</span>{" "}
                  </div>
                </div>
                <div className="right_data">
                  <span>Filter by</span>
                  <span className="btn_enail">Email all</span>
                  <span className="btn_contact" onClick={()=>setCreateContactModal(true)}>
                    <HiPlusSm /> Contact{" "}
                  </span>
                </div>
              </div>
            </div>
          { createContactModal&& <CreateContactModal  show={createContactModal} hide={closeModal} image={tableImage} /> }
            <div className="mt-4 overflow">
              <table className="table table-bordered">
                <thead className="thead_style">
                  <tr>
                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="span_checkbox"> </span>
                        <span> PEOPLE </span>
                      </div>{" "}
                    </th>

                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="span_checkbox"> </span>
                        <span> EMAIL </span>
                      </div>{" "}
                    </th>

                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="span_checkbox"> </span>
                        <span> LOCATION </span>
                      </div>{" "}
                    </th>
                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="me-1">
                          {" "}
                          <AiOutlineDownCircle />{" "}
                        </span>
                        <span> STATUS LAST 3 MONTHS </span>
                      </div>{" "}
                    </th>

                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="me-1">
                          {" "}
                          <BsBagX />{" "}
                        </span>
                        <span> JOB </span>
                      </div>{" "}
                    </th>
                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="me-1">
                          {" "}
                          <BsFileEarmarkBarGraph />{" "}
                        </span>
                        <span> COMPANY </span>
                      </div>{" "}
                    </th>
                    <th>
                      <div className="d-flex align-items-center">
                        {" "}
                        <span className="me-1">
                          {" "}
                          <BsFillTelephoneFill />{" "}
                        </span>
                        <span> PHONE </span>
                      </div>{" "}
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {formData.map((parent,) => {
                     return parent.map((curElm, index)=>{
                        
                        return (
                          <tr key={index}>
                          
                            <td>
                              <span>
                                <img src={tableImage} alt="img" className="img_fluids" />{" "}
                              </span>
                              {curElm.people}
                            </td>
                            <td>{curElm.email} </td>
                            <td>{curElm.location} </td>
                            <td>DummyStatus </td>
                            <td>{curElm.job} </td>
                            <td>{curElm.company} </td>
                            <td>{curElm.phone} </td>
                            
                          </tr>
                        );
                     
                      })
                  })}
                </tbody>
                
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ContactTable;