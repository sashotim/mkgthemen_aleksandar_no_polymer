import React from 'react';
// import ReactDOM from "react-dom";
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

export default class MyImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryContentObject: null
    };

    // this.loadGalleryContent = this.loadGalleryContent.bind(this);
  }
  // loadGalleryContent() {
  //   this.setState({galleryContentObject: this.props.galleryContent.refs});
  //   console.log(this.props.galleryContent.refs);
  // }
  render() {
  //   console.log(this.props.galleryContent);
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
  // console.log(this.props.galleryContent);
  return (
     <div>
      {listOfMedia}
    </div>
  );
}
}
