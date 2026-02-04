import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Divider
} from "@mui/material";

function Home() {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa" }}>

      {/* ===== HERO SECTION ===== */}
      <Row className="align-items-center px-5" style={{ minHeight: "90vh" }}>
        <Col md={8} className="mx-auto text-center">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Hi, I'm <span style={{ color: "#0d6efd" }}>Smile Katoch</span>
          </Typography>

          <Typography variant="h5" color="text.secondary" gutterBottom>
            Web Developer | Research Enthusiast
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            I specialize in building responsive and user-friendly web
            applications using React, JavaScript, Bootstrap, and Material UI.
            I also work on academic research and technical projects that bridge
            theory with practical implementation.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Button variant="primary" className="me-3">
              Contact Me
            </Button>
            <Button variant="outline-primary">
              View Work
            </Button>
          </Box>
        </Col>
      </Row>

      {/* ===== PROJECTS SECTION ===== */}
      <Container className="mb-5">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Projects
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Row className="g-4">
          <Col md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold">
                  Sonar Distance Measurement System (Arduino)
                </Typography>
                <Typography variant="body2">
                  Developed a sonar-based distance measurement system using
                  Arduino and ultrasonic sensors to measure object distance
                  accurately in real time, demonstrating embedded system
                  concepts and sensor integration.
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold">
                  File Encryption System
                </Typography>
                <Typography variant="body2">
                  Designed a file encryption system to secure sensitive data
                  using cryptographic techniques, ensuring confidentiality
                  through controlled encryption and decryption processes.
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ===== RESEARCH SECTION ===== */}
      <Container className="mb-5">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Research Work
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Row className="g-4">
          <Col md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold">
                  Credit Card Fraud Detection
                </Typography>
                <Typography variant="body2">
                  A research study focused on detecting fraudulent credit card
                  transactions using data analysis and machine learning
                  techniques to improve detection accuracy.
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold">
                  Integrating Statistical Techniques in Machine Learning Algorithms
                </Typography>
                <Typography variant="body2">
                  This research explores the role of statistical techniques in
                  enhancing the performance, reliability, and interpretability
                  of machine learning algorithms in practical applications.
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ===== CONTACT SECTION ===== */}
      <Container className="mb-5">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Card elevation={3}>
          <CardContent>
            <Typography>
              📧 Email: cuchd-23BAI70051@cuchd.in
            </Typography>
            <Typography>
              📞 Mobile: 7986335743
            </Typography>
            <Typography>
              💻 GitHub: github.com/smilekatoch2210katoch
            </Typography>
          </CardContent>
        </Card>
      </Container>

    </Container>
  );
}

export default Home;
