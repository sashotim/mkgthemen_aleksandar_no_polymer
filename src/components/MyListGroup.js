import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';



export default class MyListGroup extends React.Component {
  render() {
    var rows = [];
    for (var i = 0; i < this.props.chapters.length; i++) {
      rows.push(<ListGroupItem tag="a" href={"#" + this.props.chapters[i].id} action key={i}>{this.props.chapters[i].title}</ListGroupItem>);
    }
    return (
      <div>
        <ListGroup>
          <h4>Kapiteln :</h4>
          {rows}
        </ListGroup>
        <p />
      </div>
    );
  }
}
