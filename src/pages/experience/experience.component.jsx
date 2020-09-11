import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/techM.webp";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <br />
                    <strong>Role:</strong> Network Engineer
                    <br />
                    <strong>Description:</strong> <strong>Working with different tools </strong> which process on databases with several informations and process the output in form of JSON and further into configuration data mode <strong>Client Support</strong> providing every possible help to customer, so that deliveries are on time .
                   
                    <br />
                    <strong>Duration:</strong> April 26 2018 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;