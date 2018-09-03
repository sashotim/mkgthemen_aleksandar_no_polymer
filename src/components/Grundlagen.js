import React from 'react';
import MyListGroup from './MyListGroup';
import { Container, Row, Col } from 'reactstrap';

import Dysgnathie from './dysgnathie/Dysgnathie';
import Entzuendungen_abszesse from './entzuendungen_abszesse/Entzuendungen_abszesse';
import Gesichtshauttumoren from './gesichtshauttumoren/Gesichtshauttumoren';
import Implantologie_und_epithetik from './implantologie_und_epithetik/Implantologie_und_epithetik';
import Komplikationen from './komplikationen/Komplikationen';
import Kraniosynostosen from './kraniosynostosen/Kraniosynostosen';
import Lkg from './lkg/Lkg';
import Lokale_lappenplastiken from './lokale_lappenplastiken/Lokale_lappenplastiken';
import Mikrochirurgie from './mikrochirurgie/Mikrochirurgie';
import Mronj_und_orn from './mronj_und_orn/Mronj_und_orn';
import Nasennebenhoehlen from './nasennebenhoehlen/Nasennebenhoehlen';
import Odontogene_tumoren from './odontogene_tumoren/Odontogene_tumoren';
import Praeprothetische_chirurgie_augmentation from './praeprothetische_chirurgie_augmentation/Praeprothetische_chirurgie_augmentation';
import Speicheldruesen from './speicheldruesen/Speicheldruesen';
import Spezifische_infektionen from './spezifische_infektionen/Spezifische_infektionen';
import Trauma from './trauma/Trauma';
import Tumoren from './tumoren/Tumoren';
import Zysten from './zysten/Zysten';

function Grundlagen(props) {
  const subjectsContent = [
    <Dysgnathie></Dysgnathie>,
    <Entzuendungen_abszesse></Entzuendungen_abszesse>,
    <Gesichtshauttumoren></Gesichtshauttumoren>,
    <Implantologie_und_epithetik></Implantologie_und_epithetik>,
    <Komplikationen></Komplikationen>,
    <Kraniosynostosen></Kraniosynostosen>,
    <Lkg></Lkg>,
    <Lokale_lappenplastiken></Lokale_lappenplastiken>,
    <Mikrochirurgie></Mikrochirurgie>,
    <Mronj_und_orn></Mronj_und_orn>,
    <Nasennebenhoehlen></Nasennebenhoehlen>,
    <Odontogene_tumoren></Odontogene_tumoren>,
    <Praeprothetische_chirurgie_augmentation></Praeprothetische_chirurgie_augmentation>,
    <Speicheldruesen></Speicheldruesen>,
    <Spezifische_infektionen></Spezifische_infektionen>,
    <Trauma></Trauma>,
    <Tumoren></Tumoren>,
    <Zysten></Zysten>
];
  return (
    <Container>
    <Row >
      <Col sm="4">
        <MyListGroup chapters={props.subjects[props.chosenSubjectIndex].chapters}></MyListGroup>
      </Col>
      <Col sm="8">
        {subjectsContent[props.chosenSubjectIndex]}
      </Col>
    </Row>
  </Container>);
}

export default Grundlagen;
