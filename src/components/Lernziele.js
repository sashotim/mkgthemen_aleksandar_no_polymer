import React from 'react';
import { Container, Table, Row, Col } from 'reactstrap';
// import MyTabs from './MyTabs';

import DysgnathieLernziele from './dysgnathie/DysgnathieLernziele.js';
import EntzuendungenAbszesseLernziele from './entzuendungen_abszesse/Entzuendungen_abszesseLernziele.js';
import GesichtshauttumorenLernziele from './gesichtshauttumoren/GesichtshauttumorenLernziele.js';
import ImplantologieUndEpithetikLernziele from './implantologie_und_epithetik/Implantologie_und_epithetikLernziele.js';
import KomplikationenLernziele from './komplikationen/KomplikationenLernziele.js';
import KraniosynostosenLernziele from './kraniosynostosen/KraniosynostosenLernziele.js';
import LkgLernziele from './lkg/LkgLernziele';
import LokaleLappenplastikenLernziele from './lokale_lappenplastiken/Lokale_lappenplastikenLernziele';
import MikrochirurgieLernziele from './mikrochirurgie/MikrochirurgieLernziele';
import MronjUndOrnLernziele from './mronj_und_orn/Mronj_und_ornLernziele';
import NasennebenhoehlenLernziele from './nasennebenhoehlen/NasennebenhoehlenLernziele';
import OdontogeneTumorenLernziele from './odontogene_tumoren/Odontogene_tumorenLernziele';
import PraeprothetischeChirurgieAugmentationLernziele from './praeprothetische_chirurgie_augmentation/Praeprothetische_chirurgie_augmentationLernziele';
import SpeicheldruesenLernziele from './speicheldruesen/SpeicheldruesenLernziele';
import SpezifischeInfektionenLernziele from './spezifische_infektionen/Spezifische_infektionenLernziele';
import TraumaLernziele from './trauma/TraumaLernziele';
import TumorenLernziele from './tumoren/TumorenLernziele';
import ZystenLernziele from './zysten/ZystenLernziele';


function Lernziele(props) {
  const lernzieleContent = [
    <DysgnathieLernziele></DysgnathieLernziele>,
    <EntzuendungenAbszesseLernziele></EntzuendungenAbszesseLernziele>,
    <GesichtshauttumorenLernziele></GesichtshauttumorenLernziele>,
    <ImplantologieUndEpithetikLernziele></ImplantologieUndEpithetikLernziele>,
    <KomplikationenLernziele></KomplikationenLernziele>,
    <KraniosynostosenLernziele></KraniosynostosenLernziele>,
    <LkgLernziele></LkgLernziele>,
    <LokaleLappenplastikenLernziele></LokaleLappenplastikenLernziele>,
    <MikrochirurgieLernziele></MikrochirurgieLernziele>,
    <MronjUndOrnLernziele></MronjUndOrnLernziele>,
    <NasennebenhoehlenLernziele></NasennebenhoehlenLernziele>,
    <OdontogeneTumorenLernziele></OdontogeneTumorenLernziele>,
    <PraeprothetischeChirurgieAugmentationLernziele></PraeprothetischeChirurgieAugmentationLernziele>,
    <SpeicheldruesenLernziele></SpeicheldruesenLernziele>,
    <SpezifischeInfektionenLernziele></SpezifischeInfektionenLernziele>,
    <TraumaLernziele></TraumaLernziele>,
    <TumorenLernziele></TumorenLernziele>,
    <ZystenLernziele></ZystenLernziele>
];
  return (
    <Container>
      <Row>
        <Col>
          <Table>
            {lernzieleContent[props.chosenSubjectIndex]}
          </Table>
        </Col>
      </Row>
    </Container>);
}

export default Lernziele;
