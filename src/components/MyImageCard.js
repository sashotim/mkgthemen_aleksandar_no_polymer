import React from 'react';
// import ReactDOM from "react-dom";
import { Card, CardTitle, CardImg, CardImgOverlay, Row, Col } from 'reactstrap';

export default class MyImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryContentObject: null
    };
    this.showOverlayHandler = this.showOverlayHandler.bind(this);
    this.hideOverlayHandler = this.hideOverlayHandler.bind(this);
  }
  showOverlayHandler(e) {
    // console.log(e.target.classList);
    if (e.target.classList[0] === "col-sm-4") {
      e.target.children[0].children[1].style.display = "block";
    }
  }
  hideOverlayHandler(e) {
    if (e.target.classList[0] === "col-sm-4") {
      e.target.children[0].children[1].style.display = "none";
    }
  }
  render() {
  let listOfMedia = [];
  for (var i = 0; i < this.props.galleryContent.length; i++) {
    listOfMedia.push(
      <Col sm="4" key={i} onMouseEnter={this.showOverlayHandler} onMouseLeave={this.hideOverlayHandler}>
        <Card inverse onClick={this.props.openModal} key={i} style={{float: "left"}}>
          <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="" /> {/*{this.props.galleryContent[i].image}*/}
          <CardImgOverlay key={i} id={i}>  {/* id={this.props.galleryContent[i].id} */}
            <CardTitle>{this.props.galleryContent[i].title}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Col>

    )
  }
  return (
     <Row>
      {listOfMedia}
    </Row>
  );
}
}
