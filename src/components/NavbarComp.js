import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { IoNotificationsOutline } from 'react-icons/io5';

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearch = () => {
    //search logic here
    console.log('Search for:', this.state.searchText);
  };

  render() {
    return (
      <div>
        <Navbar expand="sm" className="bg-dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#" id="shaale-nav">
              Shaale
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <NavDropdown title="Explore" id="exploreDropdown">
                  <span id='dropdown-heading' className='m-2 primary'>Arts</span>
                    <NavDropdown title="Music" id="musicDropdown">
                      <NavDropdown href="#subAction1" title="Classical Music" id='classicalmusic'>
                        <NavDropdown.Item>North Indian</NavDropdown.Item>
                        <NavDropdown.Item>South Indian</NavDropdown.Item>
                      </NavDropdown>
                      {/* <NavDropdown href="#subAction2">Folk Music</NavDropdown.Item> */}
                      <NavDropdown href="#subAction2" title="Folk Music" id='folkmusic'>
                        <NavDropdown.Item>Gujarati</NavDropdown.Item>
                        <NavDropdown.Item>Karanataka</NavDropdown.Item>
                      </NavDropdown>

                      {/* <NavDropdown href="#subAction2">Others</NavDropdown.Item> */}
                      <NavDropdown href="#subAction3" title="Others" id='others'>
                        <NavDropdown.Item>Bhajan</NavDropdown.Item>
                        <NavDropdown.Item>Devotional</NavDropdown.Item>
                        <NavDropdown.Item>Ghamaka</NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown>

                    <NavDropdown title="Dance" id="danceDropdown">
                        <NavDropdown title="Classical Dance" href='#subaction1' id='classicaldance'>
                            <NavDropdown.Item>Bharatanatyam</NavDropdown.Item>
                            <NavDropdown.Item>Kathak</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Regional Dance" href='#subaction2' id='regionaldance'>
                            <NavDropdown.Item>Karnataka</NavDropdown.Item>
                            <NavDropdown.Item>Kerala</NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                  </NavDropdown>
                
              </Nav>
                <Form className="d-flex">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={this.state.searchText}
                      onChange={(e) => this.setState({ searchText: e.target.value })}
                    />
                    <button onClick={this.handleSearch}>Search</button>
                  </div>
                </Form>
            </Navbar.Collapse>
        </Container>
          <IoNotificationsOutline />
          //i have to work here on the icons. the bell icon isnt working work on that
        </Navbar>
      </div>
    );
  }
}
