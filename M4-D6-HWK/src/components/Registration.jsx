import React, { Component } from 'react';
import { Row, Col, Container,Form } from 'react-bootstrap'
class Registration extends Component {
    render() {
        return (
            
                  <>
                <Container>
                    <Row className="mt-3 justify-content-center">
                        <Col xs={12} md={6} className="text-center">
                            <h2>Book Reservation</h2>
                            <Form >
                                <Form.Label> Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your name"
                                    // value={this.state.reservation.name}
                                    // onChange={(e) => {
                                    //     this.HandleInput('name', e.target.value)
                                    // }
                                    // }

                                />
                                <Form.Label>Surname</Form.Label>
                                <Form.Control type="name" placeholder="Enter your surname"
                                
                                    // value={this.state.reservation.phoneNumber}
                                    // onChange={(e) => {
                                    //     this.HandleInput('phoneNumber', e.target.value)
                                    // }
                                    // } 
                                    />
                                      <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />

                                <Form.Label>Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />

                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="paswsword" placeholder="confirm your password" />
                                
                                <Form.Label class="form-check-label"></Form.Label>
                                 <Form.Control className="form-check-input" type="checkbox" text="Remember me" />
                                   </Form>

                        </Col>
                    </Row>
                </Container>
            </>
        
        );
    }
}

export default Registration;