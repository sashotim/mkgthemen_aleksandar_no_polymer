import React from 'react';
// import ReactDOM from "react-dom";
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

export default class MyImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryContentObject: null
    };

  }
  render() {
  let listOfMedia = [];
  for (var i = 0; i < this.props.galleryContent.length; i++) {
    listOfMedia.push(
      <Card inverse onClick={this.props.openModal} key={i}>
        <CardImg width="100%" src={this.props.galleryContent[i].image} alt="" />
      <CardImgOverlay key={i} id={i}>  {/* id={this.props.galleryContent[i].id} */}
          <CardTitle>{this.props.galleryContent[i].title} </CardTitle>
        </CardImgOverlay>
      </Card>
    )
  }
  return (
     <div>
      {listOfMedia}
    </div>
  );
}
}
