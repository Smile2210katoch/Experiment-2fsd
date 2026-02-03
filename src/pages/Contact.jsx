import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Contact() {
  return (
    <Container style={{ padding: "4rem 2rem" }}>
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <p>
                <strong>Mobile:</strong>{" "}
                <a href="tel:+917986335743">7986335743</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:cuchd-23BAI70051@cuchd.in">
                  cuchd-23BAI70051@cuchd.in
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/smilekatoch2210katoch"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/smilekatoch2210katoch
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

