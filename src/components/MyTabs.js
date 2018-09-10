import React from 'react';
// import ReactDOM from "react-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container} from 'reactstrap';
import classnames from 'classnames';
import MyImageCard from './MyImageCard';

export default class MyTabs extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      // activeTab: '1'
    };
  }

  // toggle(tab) {
  //   if (this.state.activeTab !== tab) {
  //     this.setState({
  //       activeTab: tab
  //     });
  //   }
  // }
  render() {
    // let images = [];
    // let videos = [];
    // for (var i = 0; i < this.props.galleryContent.length; i++) {
    //   if (this.props.galleryContent[i].type === "image") {
    //     images.push(this.props.galleryContent[i]);
    //   } else if (this.props.galleryContent[i].type === "video") {
    //     videos.push(this.props.galleryContent[i]);
    //   }
    // }
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === '1' })}
              onClick={this.props.chooseTabHandler.bind(this, '1')}
            >
              Alle Medien
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === '2' })}
              onClick={this.props.chooseTabHandler.bind(this, '2')}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === '3' })}
              onClick={this.props.chooseTabHandler.bind(this, '3')}
            >
              Bilder
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.props.activeTab}>
          <TabPane tabId="1">
            <Row >
              <Col sm="4">
                <MyImageCard openModal={this.props.openModal} galleryContent={this.props.listOfMedia} indexList={this.props.wholeIndexList}></MyImageCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row >
              <Col sm="4">
                <MyImageCard openModal={this.props.openModal} galleryContent={this.props.listOfMedia} indexList={this.props.videoIndexList}></MyImageCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row >
              <Col sm="4">
                <MyImageCard openModal={this.props.openModal} galleryContent={this.props.listOfMedia} indexList={this.props.imageIndexList}></MyImageCard>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}
