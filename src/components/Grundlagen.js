import React from 'react';
import MyListGroup from './MyListGroup';
import { Container, Row, Col } from 'reactstrap';

import Dysgnathie from './dysgnathie/Dysgnathie';
import EntzuendungenAbszesse from './entzuendungen_abszesse/Entzuendungen_abszesse';
import Gesichtshauttumoren from './gesichtshauttumoren/Gesichtshauttumoren';
import ImplantologieUndEpithetik from './implantologie_und_epithetik/Implantologie_und_epithetik';
import Komplikationen from './komplikationen/Komplikationen';
import Kraniosynostosen from './kraniosynostosen/Kraniosynostosen';
import Lkg from './lkg/Lkg';
import LokaleLappenplastiken from './lokale_lappenplastiken/Lokale_lappenplastiken';
import Mikrochirurgie from './mikrochirurgie/Mikrochirurgie';
import MronjUndOrn from './mronj_und_orn/Mronj_und_orn';
import Nasennebenhoehlen from './nasennebenhoehlen/Nasennebenhoehlen';
import OdontogeneTumoren from './odontogene_tumoren/Odontogene_tumoren';
import PraeprothetischeChirurgieAugmentation from './praeprothetische_chirurgie_augmentation/Praeprothetische_chirurgie_augmentation';
import Speicheldruesen from './speicheldruesen/Speicheldruesen';
import SpezifischeInfektionen from './spezifische_infektionen/Spezifische_infektionen';
import Trauma from './trauma/Trauma';
import Tumoren from './tumoren/Tumoren';
import Zysten from './zysten/Zysten';

function Grundlagen(props) {
  const subjectsContent = [
    <Dysgnathie></Dysgnathie>,
    <EntzuendungenAbszesse></EntzuendungenAbszesse>,
    <Gesichtshauttumoren></Gesichtshauttumoren>,
    <ImplantologieUndEpithetik></ImplantologieUndEpithetik>,
    <Komplikationen></Komplikationen>,
    <Kraniosynostosen></Kraniosynostosen>,
    <Lkg></Lkg>,
    <LokaleLappenplastiken></LokaleLappenplastiken>,
    <Mikrochirurgie></Mikrochirurgie>,
    <MronjUndOrn></MronjUndOrn>,
    <Nasennebenhoehlen></Nasennebenhoehlen>,
    <OdontogeneTumoren></OdontogeneTumoren>,
    <PraeprothetischeChirurgieAugmentation></PraeprothetischeChirurgieAugmentation>,
    <Speicheldruesen></Speicheldruesen>,
    <SpezifischeInfektionen></SpezifischeInfektionen>,
    <Trauma></Trauma>,
    <Tumoren></Tumoren>,
    <Zysten></Zysten>
];
  return (
    <Container>
    <Row >
      <Col sm="4" lg="2">
        <MyListGroup chapters={props.subjects[props.chosenSubjectIndex].chapters} scrollToChapterHandler={props.scrollToChapterHandler}></MyListGroup>
      </Col>
      <Col sm="8" lg="10">
        {subjectsContent[props.chosenSubjectIndex]}
      </Col>
    </Row>
  </Container>);
}

export default Grundlagen;
