import { useState } from "react";
import { Container, Row, Col, Nav, Button, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import Offcanvas from "react-bootstrap/Offcanvas";

function CustomNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={require("../../assets/images/logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            BizTrack
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Navbar.Toggle>
          <Offcanvas
            show={isDrawerOpen}
            onHide={handleDrawerToggle}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;

{
  /* <Navbar.Brand>
  <Row>
    <Col xs={6} sm={6} md={6} lg={6} className="text-end">
      <EmailIcon />
      <NotificationsIcon />
    </Col>
  </Row>
</Navbar.Brand>; */
}
