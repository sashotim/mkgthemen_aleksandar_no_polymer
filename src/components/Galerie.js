import React from 'react';
// import Dysgnathie from './dysgnathie/Dysgnathie';
import { Container} from 'reactstrap';
import MyTabs from './MyTabs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import DysgnathieGallery from './dysgnathie/DysgnathieGallery';
// import Entzuendungen_abszesseGallery from './entzuendungen_abszesse/Entzuendungen_abszesseGallery';
// import GesichtshauttumorenGallery from './gesichtshauttumoren/GesichtshauttumorenGallery';
// import Implantologie_und_epithetikGallery from './implantologie_und_epithetik/Implantologie_und_epithetikGallery';
// import KomplikationenGallery from './komplikationen/KomplikationenGallery';
// import KraniosynostosenGallery from './kraniosynostosen/KraniosynostosenGallery';
// import LkgGallery from './lkg/LkgGallery';
// import Lokale_lappenplastikenGallery from './lokale_lappenplastiken/Lokale_lappenplastikenGallery';
// import MikrochirurgieGallery from './mikrochirurgie/MikrochirurgieGallery';
// import Mronj_und_ornGallery from './mronj_und_orn/Mronj_und_ornGallery';
// import NasennebenhoehlenGallery from './nasennebenhoehlen/NasennebenhoehlenGallery';
// import Odontogene_tumorenGallery from './odontogene_tumoren/Odontogene_tumorenGallery';
// import Praeprothetische_chirurgie_augmentationGallery from './praeprothetische_chirurgie_augmentation/Praeprothetische_chirurgie_augmentationGallery';
// import SpeicheldruesenGallery from './speicheldruesen/SpeicheldruesenGallery';
// import Spezifische_infektionenGallery from './spezifische_infektionen/Spezifische_infektionenGallery';
// import TraumaGallery from './trauma/TraumaGallery';
// import TumorenGallery from './tumoren/TumorenGallery';
// import ZystenGallery from './zysten/ZystenGallery';

export default class Galerie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      openedObject: null
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(e) {
    this.setState({modalIsOpen: true,
                    openedObject: e.target});
    console.log(String(DysgnathieGallery.childNodes));
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loadGalleryConentHandler = () => {

  }

  render() {
    const galleryContent = [
      <DysgnathieGallery></DysgnathieGallery>,
      // <Entzuendungen_abszesseGallery></Entzuendungen_abszesseGallery>,
      // <GesichtshauttumorenGallery></GesichtshauttumorenGallery>,
      // <Implantologie_und_epithetikGallery></Implantologie_und_epithetikGallery>,
      // <KomplikationenGallery></KomplikationenGallery>,
      // <KraniosynostosenGallery></KraniosynostosenGallery>,
      // <LkgGallery></LkgGallery>,
      // <Lokale_lappenplastikenGallery></Lokale_lappenplastikenGallery>,
      // <MikrochirurgieGallery></MikrochirurgieGallery>,
      // <Mronj_und_ornGallery></Mronj_und_ornGallery>,
      // <NasennebenhoehlenGallery></NasennebenhoehlenGallery>,
      // <Odontogene_tumorenGallery></Odontogene_tumorenGallery>,
      // <Praeprothetische_chirurgie_augmentationGallery></Praeprothetische_chirurgie_augmentationGallery>,
      // <SpeicheldruesenGallery></SpeicheldruesenGallery>,
      // <Spezifische_infektionenGallery></Spezifische_infektionenGallery>,
      // <TraumaGallery></TraumaGallery>,
      // <TumorenGallery></TumorenGallery>,
      // <ZystenGallery></ZystenGallery>
  ];

    return (
      <Container>
        <MyTabs openModal={this.openModal} galleryContent={galleryContent[0]}></MyTabs>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
        >
          <div id="overlayContent">

          {/* <div id="header">
            [[selectedMediaObj.title]]<iron-icon
              on-tap="handleClose"
              icon="icons:close"
            />
          </div>
          <div id="imageContent">
            <img src$="[[selectedMediaObj.content]]" alt="[[selectedMediaObj.title]]" />
          </div>
          <div id="videoContent">
            {/* TODO videos have to be linked */}
          {/* </div>
          <div id="description">[[selectedMediaObj.description]]</div>
          <div id="footer">
            <div id="left">
              <paper-button raised className="mediaBtns" on-tap="prevMedia">
                Zurück
              </paper-button>
            </div>
            <div id="position">[[selectedMediaIndex]]/[[media.length]]</div>
            <div id="right">
              <paper-button raised className="mediaBtns" on-tap="nextMedia">
                Weiter
              </paper-button>
            </div>
          </div>
          <div style={{ display: "none" }} className="cancelAvmzVideo" /> */}
        </div>;


        </Modal>
      </Container>
    );
  }
}
