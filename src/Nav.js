import React from 'react';
import DocPlanner from './logo-docplanner.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='nav'>
        <Navbar  color="light" light expand="md">
          <NavbarBrand href="/"><img className="logo-nav" src={DocPlanner}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><a href="#">Aboutus</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="car-link">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="car-link"nav>
                  Departments
                </DropdownToggle>
                <DropdownMenu  right>
                  <DropdownItem>
                    Marketing & PR
                  </DropdownItem>
                  <DropdownItem>
                    Customer Success
                  </DropdownItem>
                  <DropdownItem>
                    IT,Product,Design & UX
                  </DropdownItem>
                  <DropdownItem>
                    Finance & Administration
                  </DropdownItem>
                  <DropdownItem>
                    HR & more
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}