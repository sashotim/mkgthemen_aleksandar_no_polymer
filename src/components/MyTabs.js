import React from 'react';
// import ReactDOM from "react-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Container} from 'reactstrap';
import classnames from 'classnames';
import MyImageCard from './MyImageCard';

export default class MyTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <Container>
        <Nav tabs>
          <NavItem className="galleryNav">
            <NavLink
              className={classnames({ active: this.props.activeTab === '1' })}
              onClick={this.props.chooseTabHandler.bind(this, '1')}
            >
              Alle Medien
            </NavLink>
          </NavItem>
          <NavItem className="galleryNav">
            <NavLink
              className={classnames({ active: this.props.activeTab === '2' })}
              onClick={this.props.chooseTabHandler.bind(this, '2')}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem className="galleryNav">
            <NavLink
              className={classnames({ active: this.props.activeTab === '3' })}
              onClick={this.props.chooseTabHandler.bind(this, '3')}
            >
              Bilder
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.props.activeTab} id="galleryCollection">
          <TabPane tabId="1">
            <MyImageCard openModal={this.props.openModal} galleryContent={this.props.listOfMedia} indexList={this.props.wholeIndexList}></MyImageCard>
          </TabPane>
          <TabPane tabId="2" >
            <MyImageCard openModal={this.props.openModal} galleryContent={this.props.listOfMedia} indexList={this.props.videoIndexList}></MyImageCard>
          </TabPane>
          <TabPane tabId="3">
            <MyImageCard openModal={this.props.openModal} galleryContent={this.props.listOfMedia} indexList={this.props.imageIndexList}></MyImageCard>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}
