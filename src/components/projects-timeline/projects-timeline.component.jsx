import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_Mongo from "../../assets/img/skills/mongodb.svg"

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Kaprekar constant*/}
          <ImageEvent  className="text-center" text="Kaprekar's constant" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Card.Title style={{color: '#fff', height: '176px', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCW7y_qzjN-JUNY1PtfRUrJyT2ePooow-vlg&usqp=CAU)'}} ></Card.Title>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Kaprekar constant, or 6174, is a constant that arises when we take a 4-digit integer, form the largest and smallest numbers from its digits, and then subtract these two numbers. Continuing with this process of forming and subtracting, we will always arrive at the number 6174.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://infallible-goldstine-5b3b81.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Tic tac toe */}
          <ImageEvent className="text-center" text="Tic Tac Toe ">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Tic-Tac-Toe game using javascript and some of concepts from AI. <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
              Tic-Tac-Toe game using javascript and some of concepts from AI.
                          <br />
                          
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://affectionate-wing-65d162.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: BroadcastApp */}

          <ImageEvent className="text-center" text="Broadcast" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to search through robots fetched in real-time with users.
                        <hr />
                        A small-scale replica of Facebook as BroadcastApp.
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT}alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Express" rounded className="image-style1 m-1"></Image> Bootstrap
                            </span>
                          </li>
                        </ul> 
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shubha0008.github.io/broadcast/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/shubha0008/broadcast" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Money Manager App */}

          <ImageEvent className="text-center" text="Money-Manager-App" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Money-Manager-APP
                        <hr />
                        Get the expenditure and savings on daily and monthly basis . This is MERN Stack App .
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT}alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Express" rounded className="image-style1 m-1"></Image> Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_Mongo} alt="Express" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul> 
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shubha0008.github.io/money-manager-frontend" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/shubha0008/money-manager-frontend" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>




          {/* Project: Event manager app */}

          <ImageEvent className="text-center" text="Event-Manager-App" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Event-Manager-App
                        <hr />
                        Create a room for your meeting with features of chatting and Video-call. 
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT}alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Express" rounded className="image-style1 m-1"></Image> Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_Mongo} alt="Express" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul> 
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shubha0008.github.io/eventMgmt_frontend" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/shubha0008/eventMgmt_frontend" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>



          {/* Project: Book-Your-Show app */}

          <ImageEvent className="text-center" text="Book-Your-Show" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Book-Your-Show
                        <hr />
                        Book the upcoming shows in the nearest theatres .
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT}alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Express" rounded className="image-style1 m-1"></Image> Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_Mongo} alt="Express" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul> 
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://shubha0008.github.io/book_show_frontend" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/shubha0008/book_show_frontend" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;