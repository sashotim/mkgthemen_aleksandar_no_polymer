import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
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

export default class MyNavbar extends React.Component {
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
    let chosenSubject = this.props.chosenSubject;
    let dropdownItems = [];
    dropdownItems.push(<DropdownItem active key={0} id='0' onClick={this.props.changeSubjectIndex}>{this.props.subjects[0].title}</DropdownItem>);
    for (var i = 1; i < this.props.subjects.length; i++) {
      dropdownItems.push(<DropdownItem key={i} id={i} onClick={this.props.changeSubjectIndex}>{this.props.subjects[i].title}</DropdownItem>);
    }
    return (
      <div>
        <Navbar color="light" light expand="md" fixed={`top`} className="sticky-nav">
          <NavbarBrand href="/"><IoIosArrowBack/></NavbarBrand>
        <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="subjectDropdown">
                {chosenSubject.title}
              </DropdownToggle>
              <DropdownMenu>
                {dropdownItems}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={ "navItem " + (this.props.chosenPage==='Grundlagen' && 'active')} onClick={this.toggle}>
                <NavLink href="#" onClick={this.props.changePage}>Grundlagen</NavLink>
              </NavItem>
              <NavItem className={ "navItem " + (this.props.chosenPage==='Galerie' && 'active')} onClick={this.toggle}>
                <NavLink href="#" onClick={this.props.changePage}>Galerie</NavLink>
              </NavItem>
              <NavItem className={ "navItem " + (this.props.chosenPage==='Quiz' && 'active')} onClick={this.toggle}>
                <NavLink href="#" onClick={this.props.changePage}>Quiz</NavLink>
              </NavItem>
              <NavItem className={ "navItem " + (this.props.chosenPage==='Lernziele' && 'active')} onClick={this.toggle}>
                <NavLink href="#" onClick={this.props.changePage}>Lernziele</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
