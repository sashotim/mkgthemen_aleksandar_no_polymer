import React from 'react';
import ReactDOM from "react-dom";
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
  for (var i = 0; i < this.props.galleryContent.media.length; i++) {
    listOfMedia.push(
      <Card inverse onClick={this.props.openModal} key={i}>
        <CardImg width="100%" src={this.props.galleryContent.media[i].image} alt="" key={i} id={this.props.galleryContent.media[i].id} />
        <CardImgOverlay>
          <CardTitle>{this.props.galleryContent.media[i].title}</CardTitle>
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
