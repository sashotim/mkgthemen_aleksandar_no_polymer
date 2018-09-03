import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import MyTabs from './MyTabs';

import DysgnathieLernziele from './dysgnathie/DysgnathieLernziele.js';
import Entzuendungen_abszesseLernziele from './entzuendungen_abszesse/Entzuendungen_abszesseLernziele.js';
import GesichtshauttumorenLernziele from './gesichtshauttumoren/GesichtshauttumorenLernziele.js';
import Implantologie_und_epithetikLernziele from './implantologie_und_epithetik/Implantologie_und_epithetikLernziele.js';
import KomplikationenLernziele from './komplikationen/KomplikationenLernziele.js';
import KraniosynostosenLernziele from './kraniosynostosen/KraniosynostosenLernziele.js';
import LkgLernziele from './lkg/LkgLernziele';
import Lokale_lappenplastikenLernziele from './lokale_lappenplastiken/Lokale_lappenplastikenLernziele';
import MikrochirurgieLernziele from './mikrochirurgie/MikrochirurgieLernziele';
import Mronj_und_ornLernziele from './mronj_und_orn/Mronj_und_ornLernziele';
import NasennebenhoehlenLernziele from './nasennebenhoehlen/NasennebenhoehlenLernziele';
import Odontogene_tumorenLernziele from './odontogene_tumoren/Odontogene_tumorenLernziele';
import Praeprothetische_chirurgie_augmentationLernziele from './praeprothetische_chirurgie_augmentation/Praeprothetische_chirurgie_augmentationLernziele';
import SpeicheldruesenLernziele from './speicheldruesen/SpeicheldruesenLernziele';
import Spezifische_infektionenLernziele from './spezifische_infektionen/Spezifische_infektionenLernziele';
import TraumaLernziele from './trauma/TraumaLernziele';
import TumorenLernziele from './tumoren/TumorenLernziele';
import ZystenLernziele from './zysten/ZystenLernziele';


function Lernziele(props) {
  const lernzieleContent = [
    <DysgnathieLernziele></DysgnathieLernziele>,
    <Entzuendungen_abszesseLernziele></Entzuendungen_abszesseLernziele>,
    <GesichtshauttumorenLernziele></GesichtshauttumorenLernziele>,
    <Implantologie_und_epithetikLernziele></Implantologie_und_epithetikLernziele>,
    <KomplikationenLernziele></KomplikationenLernziele>,
    <KraniosynostosenLernziele></KraniosynostosenLernziele>,
    <LkgLernziele></LkgLernziele>,
    <Lokale_lappenplastikenLernziele></Lokale_lappenplastikenLernziele>,
    <MikrochirurgieLernziele></MikrochirurgieLernziele>,
    <Mronj_und_ornLernziele></Mronj_und_ornLernziele>,
    <NasennebenhoehlenLernziele></NasennebenhoehlenLernziele>,
    <Odontogene_tumorenLernziele></Odontogene_tumorenLernziele>,
    <Praeprothetische_chirurgie_augmentationLernziele></Praeprothetische_chirurgie_augmentationLernziele>,
    <SpeicheldruesenLernziele></SpeicheldruesenLernziele>,
    <Spezifische_infektionenLernziele></Spezifische_infektionenLernziele>,
    <TraumaLernziele></TraumaLernziele>,
    <TumorenLernziele></TumorenLernziele>,
    <ZystenLernziele></ZystenLernziele>
];
  return (
    <Container>
      <Table>
        {lernzieleContent[props.chosenSubjectIndex]}
      </Table>
    </Container>);
}

export default Lernziele;
