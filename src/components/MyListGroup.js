import React from 'react';
import { ListGroup, ListGroupItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'



export default class MyListGroup extends React.Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     dropdownOpen: false
   };
 }
 toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    var rows = [];
    for (var i = 0; i < this.props.chapters.length; i++) {
      rows.push(<ListGroupItem
        tag="div"
        action
        key={i}
        className="chapter-item"
        ><AnchorLink href={"#" + this.props.chapters[i].id} offset='100' className="chapter-item">{this.props.chapters[i].title}</AnchorLink></ListGroupItem>);
    }
    var rowsDropdown = [];
    for (var i = 0; i < this.props.chapters.length; i++) {
      rowsDropdown.push(<DropdownItem tag="div"
      key={i}
      className="chapter-item"
      ><AnchorLink href={"#" + this.props.chapters[i].id} offset='100' className="chapter-item">{this.props.chapters[i].title}</AnchorLink></DropdownItem>);
    }
    return (
      <div>
        <ListGroup className="panel">
          <h4>Kapiteln :</h4>
          {rows}
        </ListGroup>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="up">
        <DropdownToggle caret  className="chapterDropdownTrigger">
          Kapiteln
        </DropdownToggle>
        <DropdownMenu>
          {rowsDropdown}
        </DropdownMenu>
      </ButtonDropdown>
        <p />
      </div>
    );
  }
}
