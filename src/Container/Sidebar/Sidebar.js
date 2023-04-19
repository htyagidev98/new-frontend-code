import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import profileImage from '../assets/images/ByeWind.png'
import { FaAngleDown, FaAngleRight, FaPlusCircle } from 'react-icons/fa';
import { FcFolder, FcReadingEbook } from 'react-icons/fc'
import { AiOutlineCheck } from 'react-icons/ai'
import coolImg from '../assets/images/cool.png'
import familyImg from '../assets/images/family.png'
import bag from '../assets/images/mortarboard.png'
import devloper from '../assets/images/web-development.png'
import './sidebar.css';
import CategoryModal from '../Components/Categories/CategoryModal';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getFormData,getSidebarData } from '../Redux/Slices/ContactSlice';
const Sidebar = () => {
    const [show, setShow] = useState(true);
    const [categoryModal, setCategoryModal] = useState(false);
    const {sidebarData}= useSelector((state)=> state.contact);
    
    const dispatch= useDispatch();

    const closeModal = async () => {
        setCategoryModal(false);
        await fetchCategoryData();
    };


    const fetchCategoryData = async () => {
        const res = await axios.get("/category/category/list");
        const data = res.data;
        dispatch(getSidebarData(data.responseData.categories));
          

    }

  const listHandler= async(data)=>{
    
      const res= await axios.get(`http://localhost:5100/contact/contact/list?category=${data.category}`)
      const mainData= res.data.responseData.contactList;
      
      dispatch(getFormData(mainData));
    }

    useEffect(() => {
        fetchCategoryData();
    }, [])


  

    return (
        <div className='Sidebar_Wrapper '>
            <div className='profile_Info'>
                <span className='profile_img me-2 ms-2'>
                    {show ? <FaAngleDown className='text-white cursor' onClick={() => setShow(!show)} /> :
                        <FaAngleRight className='text-white cursor' onClick={() => setShow(!show)} />
                    }
                </span>
                <span className='profile_member text-white'>Contact</span>
                <span className='text-white fw-bold  ms-2 float_right' onClick={() => setCategoryModal(true)}> <FaPlusCircle className='pointer' /> </span>
            </div>
            {categoryModal && <CategoryModal show={categoryModal} hide={closeModal} />}
            {show && <ul className='p-0 text-white doverflow'>
               {
                sidebarData.map((curElm)=>{
                    return(
                        <li key={curElm._id} className='nav_list actives' onClick={()=>listHandler(curElm)} ><img src={coolImg} alt="sidebaricon" className='img_fluids' /> <NavLink className='nav-link d-inline'> {curElm.category} </NavLink> <span className='float_right'> </span> </li>
                      )  
                      
                  })
                
               }
            </ul>}
        </div>
    )
}

export default Sidebar

