import React from 'react';
// import ReactDOM from "react-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container} from 'reactstrap';
import classnames from 'classnames';
import MyImageCard from './MyImageCard';

export default class MyTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    let images = [];
    let videos = [];
    for (var i = 0; i < this.props.galleryContent.media.length; i++) {
      if (this.props.galleryContent.media[i].type === "image") {
        images.push(this.props.galleryContent.media[i]);
      } else if (this.props.galleryContent.media[i].type === "video") {
        videos.push(this.props.galleryContent.media[i]);
      }
    }
    // console.log(images);
    // console.log(videos);
    // console.log(this.props.galleryContent.media);
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Alle Medien
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Bilder
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row >
              <Col sm="4">
                <MyImageCard openModal={this.props.openModal} galleryContent={this.props.galleryContent.media}></MyImageCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row >
              <Col sm="4">
                <MyImageCard onClick={this.props.openModal} galleryContent={videos}></MyImageCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row >
              <Col sm="4">
                <MyImageCard onClick={this.props.openModal} galleryContent={images}></MyImageCard>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}
