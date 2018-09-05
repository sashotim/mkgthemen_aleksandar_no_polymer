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
  return (
    <div>
      <Card inverse onClick={this.props.openModal}>
        <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}
}
