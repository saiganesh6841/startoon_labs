
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { fetchDashboardDetails, searchByName } from '../redux/action';
import { Link } from 'react-router-dom';

const NavbarHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  let token = localStorage.getItem("token")

  const handleSearch = () => {
    dispatch(fetchDashboardDetails(token, searchQuery)); // Dispatch the search action with the search query
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
        <Container fluid style={{ color: 'blue', backgroundColor: "#6b09ed", padding: "20px" }}>
          <Link to="/dashboard" style={{ color: "white", fontSize: "23px", padding: "5px", backgroundColor: "grey", textDecoration: "none",marginRight:"10px",borderRadius:"10px"}}>   HOME </Link>
          <Link to="/graph" style={{ color: "white", fontSize: "23px", padding: "5px", backgroundColor: "grey", textDecoration: "none",borderRadius:"10px"}}>GRAPH</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', width: "100%" }}
              navbarScroll
            >
            </Nav>

            <Form className="d-flex" style={{ width: "100%" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 w-100 w-md-75"
                aria-label="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Button className="btn btn-dark" onClick={handleSearch}>Search</Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarHeader