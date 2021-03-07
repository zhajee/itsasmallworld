/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>

          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Interests
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                      <div class="tp-checkbox-wrap">
                        <input
                            class="tp-checkbox-input"
                            name="example-basic"
                            id="example-basic-a"
                            type="checkbox"
                            checked
                        />
                        <label class="tp-label" for="example-basic-a">tech</label>
                        </div>
                        <div class="tp-checkbox-wrap">
                            <input class="tp-checkbox-input" name="example-basic" id="example-basic-b" type="checkbox" />
                            <label class="tp-checkbox-input" for="example-basic-b"> education</label>
                        </div>
                        <div class="tp-checkbox-wrap">
                            <input class="tp-checkbox-input" name="example-basic" id="example-basic-c" type="checkbox" />
                            <label class="tp-label" for="example-basic-c">media</label>
                        </div>
                      </Col>
                      <Col lg="6">
                      <div class="tp-checkbox-wrap">
                        <input
                            class="tp-checkbox-input"
                            name="example-basic"
                            id="example-basic-a"
                            type="checkbox"
                            checked
                        />
                        <label class="tp-label" for="example-basic-a">sustainability</label>
                        </div>
                        <div class="tp-checkbox-wrap">
                            <input class="tp-checkbox-input" name="example-basic" id="example-basic-b" type="checkbox" />
                            <label class="tp-checkbox-input" for="example-basic-b"> healthcare</label>
                        </div>
                        <div class="tp-checkbox-wrap">
                            <input class="tp-checkbox-input" name="example-basic" id="example-basic-c" type="checkbox" />
                            <label class="tp-label" for="example-basic-c">activism</label>
                        </div>

                      </Col>
                    </Row>

                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Bio</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="Pitch yourself here."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
