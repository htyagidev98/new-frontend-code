import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData,  } from '../../Redux/Slices/ContactSlice';
import axios from 'axios';

const CategoryModal = ({ show, hide }) => {
  const [inputData, setInputData] = useState({
    category: "",
    image:null,
  })
 
  const dispatch = useDispatch()
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInputData({
      ...inputData,
      image: file,

    })
  };

  const handleSubmit = async (e) => {
    const {image, category}= inputData;
    e.preventDefault();
     
    const formData = new FormData();
    formData.append('image', image);
    try {
      const res = await axios.post('/category/category/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          category,
        }
      });
       
      console.log('this is res image',res.data.responseData.imagepath);

      if (res.status === 422) {
        toast.error("Category Exist!");
      } else if (res.status === 400) {
        toast.error("Category Not Add");
      } else if (res.status === 500) {
        toast.error("Internal Server Error")
      } else {
        toast.success("Add Successfully:)");
        setTimeout(() => {
          hide();
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" name='category' onChange={handleInput} value={inputData.category} required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" placeholder="Enter File" name='image' onChange={handleImageChange}  required />

          </Form.Group>

            <Button variant="primary" type="submit" >
              Add-Category
            </Button>

           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default CategoryModal
