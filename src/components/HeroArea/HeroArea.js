import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form} from 'react-bootstrap';
import './HeroAres.css';

const HeroArea = () => {
    return (
        <div className="cs-primary-bg hero-area">
            <div className="container">
            <div className="row align-items-center hero-area-row">
                <div className="col-md-6">
                    <h1 className="text-white">E-lang for everyone</h1>
                    <p className="text-white">We are the best solution for english course online. We provide lot's of course for make english sense easy and make a expert which is important for professional life. We also help to do good in interview.</p>
                    <button className="btn cs-btn-warning">Learn More</button>
                </div>
                <div className="col-md-6">
                <Form className="bg-white py-4 px-5 rounded">

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter you name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEducation">
                        <Form.Label>Education level</Form.Label>
                        <Form.Control type="text" placeholder="Enter you education level" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button type="submit" className="btn cs-btn-warning w-100">
                        Send Message
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeroArea;