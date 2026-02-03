import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Services() {
  return (
    <Container style={{ padding: "4rem 2rem" }}>
      <h2 className="text-center mb-5">My Work</h2>

      <Row>
        {/* Projects */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm"
            style={{ borderLeft: "6px solid #0d6efd", backgroundColor: "#f8fbff" }}
          >
            <Card.Body>
              <Card.Title>
                🔧 Projects <Badge bg="primary" className="ms-2">Technical</Badge>
              </Card.Title>

              <h6 className="mt-3">Sonar System using Arduino</h6>
              <p>
                Developed a sonar-based distance detection system using Arduino
                and ultrasonic sensors for real-time object detection.
              </p>

              <h6>File Encryption System</h6>
              <p>
                Designed a file encryption system using cryptographic techniques
                to ensure secure data storage and transmission.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Research */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm"
            style={{ borderLeft: "6px solid #198754", backgroundColor: "#f8fff9" }}
          >
            <Card.Body>
              <Card.Title>
                📄 Research Work <Badge bg="success" className="ms-2">Academic</Badge>
              </Card.Title>

              <h6 className="mt-3">Credit Card Fraud Detection</h6>
              <p>
                Research on detecting fraudulent transactions using machine
                learning and statistical performance measures.
              </p>

              <h6>Integrating Statistical Techniques in Machine Learning</h6>
              <p>
                Study on combining statistical methods with ML algorithms to
                improve prediction accuracy and interpretability.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
