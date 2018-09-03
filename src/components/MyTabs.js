import React from 'react';
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
                <MyImageCard></MyImageCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row >
              <Col sm="4">
                <MyImageCard></MyImageCard>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row >
              <Col sm="4">
                <MyImageCard></MyImageCard>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}