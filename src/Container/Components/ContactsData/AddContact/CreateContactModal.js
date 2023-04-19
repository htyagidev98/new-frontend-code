import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { getFormData } from "../../../Redux/Slices/ContactSlice";
const CreateContactModal = ({ show, hide, image }) => {
  const [inputData, setInputData] = useState({
    people: "",
    location: "",
    job: "",
    company: "",
    email: "",
    phone: "",
    category:""
  })
  const {formData, sidebarData} = useSelector((state)=> state.contact);

  const dispatch = useDispatch()
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    const { people,
      location,
      job,
      company,
      email,
      phone,
      category,

    } = inputData;
    e.preventDefault();
        console.log('localdata', inputData)
    const res = await fetch("/contact/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        people,
        location,
        job,
        company,
        email,
        phone,
         category
      }),
    });
    const data = await res.json();
    console.log('yes', data)

    if (res.status === 422) {
      toast.error("Invalid Number!");
    } else if (res.status === 400) {
      toast.error("Contact Exist!");
    } else if (res.status === 500) {
      toast.error("Internal Server Error")
    } else {
      toast.success("Add Successfully:)");
      setTimeout(() => {
        hide()
      }, 1000);
    }
  }
  return (
    <div>
      <Modal show={show} size="lg">
        <Modal.Header className="text-light" onHide={hide} closeButton>
          <Modal.Title>
            <div className="">
              <figure className="text-center">
                <img
                  src={image}
                  alt="profileimg"
                  className=" modal_profile_img"
                />

                <figcaption>Gabriele Morace</figcaption>
              </figure>
              <span className="standard_font">#standford</span>
              <span className="ms-3 standard_font">#standford</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPeople">
                    <Form.Label>People</Form.Label>
                    <Form.Control type="text" placeholder="People" name="people" onChange={handleInput} value={inputData.people} required />

                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" name="location" onChange={handleInput} value={inputData.location} required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicJob">
                    <Form.Label>Job</Form.Label>
                    <Form.Control type="text" placeholder="job" name="job" onChange={handleInput} value={inputData.job} required />

                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" name="company" onChange={handleInput} value={inputData.company} required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" onChange={handleInput} value={inputData.email} required />

                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" name="phone" onChange={handleInput} value={inputData.phone} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                <Form.Select aria-label="Default select example" className='mb-3' name="category" onChange={handleInput}>
                  <option>Select-Category</option>
                  {sidebarData.map((curElm, index)=> <option value={curElm.category}>{curElm.category}</option>)}
                </Form.Select>

                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Container>


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
};

export default CreateContactModal;
