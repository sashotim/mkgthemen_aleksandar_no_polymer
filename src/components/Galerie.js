import React from 'react';
// import Dysgnathie from './dysgnathie/Dysgnathie';
import { Container, Button } from 'reactstrap';
import MyTabs from './MyTabs';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { IoIosArrowBack } from "react-icons/io";

import DysgnathieGallery from './dysgnathie/DysgnathieGallery';
import Entzuendungen_abszesseGallery from './entzuendungen_abszesse/Entzuendungen_abszesseGallery';
import GesichtshauttumorenGallery from './gesichtshauttumoren/GesichtshauttumorenGallery';
import Implantologie_und_epithetikGallery from './implantologie_und_epithetik/Implantologie_und_epithetikGallery';
import KomplikationenGallery from './komplikationen/KomplikationenGallery';
import KraniosynostosenGallery from './kraniosynostosen/KraniosynostosenGallery';
import LkgGallery from './lkg/LkgGallery';
import Lokale_lappenplastikenGallery from './lokale_lappenplastiken/Lokale_lappenplastikenGallery';
import MikrochirurgieGallery from './mikrochirurgie/MikrochirurgieGallery';
import Mronj_und_ornGallery from './mronj_und_orn/Mronj_und_ornGallery';
import NasennebenhoehlenGallery from './nasennebenhoehlen/NasennebenhoehlenGallery';
import Odontogene_tumorenGallery from './odontogene_tumoren/Odontogene_tumorenGallery';
import Praeprothetische_chirurgie_augmentationGallery from './praeprothetische_chirurgie_augmentation/Praeprothetische_chirurgie_augmentationGallery';
import SpeicheldruesenGallery from './speicheldruesen/SpeicheldruesenGallery';
import Spezifische_infektionenGallery from './spezifische_infektionen/Spezifische_infektionenGallery';
import TraumaGallery from './trauma/TraumaGallery';
import TumorenGallery from './tumoren/TumorenGallery';
import ZystenGallery from './zysten/ZystenGallery';

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default class Galerie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      openedObject: DysgnathieGallery.media[0],
      nextObject: DysgnathieGallery.media[mod(-1, DysgnathieGallery.media.length)],
      previousObject: DysgnathieGallery.media[1],
      openedObjectIndex: 0,
      galleryContent: [
        DysgnathieGallery,
        Entzuendungen_abszesseGallery,
        GesichtshauttumorenGallery,
        Implantologie_und_epithetikGallery,
        KomplikationenGallery,
        KraniosynostosenGallery,
        LkgGallery,
        Lokale_lappenplastikenGallery,
        MikrochirurgieGallery,
        Mronj_und_ornGallery,
        NasennebenhoehlenGallery,
        Odontogene_tumorenGallery,
        Praeprothetische_chirurgie_augmentationGallery,
        SpeicheldruesenGallery,
        Spezifische_infektionenGallery,
        TraumaGallery,
        TumorenGallery,
        ZystenGallery
    ]
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.previousObjectHandler = this.previousObjectHandler.bind(this);
    this.nextObjectHandler = this.nextObjectHandler.bind(this);
  }
  openModal(e) {
    this.setState({modalIsOpen: true,
                    openedObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[e.target.id],
                    nextObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[e.target.id+1],
                    previousObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[parseInt(e.target.id, 10)-1],
                    openedObjectIndex: parseInt(e.target.id, 10)});
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  previousObjectHandler() {
    this.setState({openedObject: this.state.previousObject,
                    openedObjectIndex: mod((parseInt(this.state.openedObjectIndex, 10) - 1), this.state.galleryContent[this.props.chosenSubjectIndex].media.length),
                    nextObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[parseInt(this.state.openedObjectIndex, 10)-1],
                    previousObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[parseInt(this.state.openedObjectIndex, 10)+1],
                  });
  }
  nextObjectHandler() {
    this.setState({openedObject: this.state.nextObject,
                    openedObjectIndex: mod((parseInt(this.state.openedObjectIndex, 10) + 1), this.state.galleryContent[this.props.chosenSubjectIndex].media.length),
                    nextObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[parseInt(this.state.openedObjectIndex, 10)-1],
                    previousObject: this.state.galleryContent[this.props.chosenSubjectIndex].media[parseInt(this.state.openedObjectIndex, 10)+1],
                  });
  }


  render() {
    return (
      <Container>
        <MyTabs openModal={this.openModal} galleryContent={this.state.galleryContent[this.props.chosenSubjectIndex]}></MyTabs>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
        >
          <div id="overlayContent">

          <div id="header">
            {this.state.openedObject.title}
            <IoIosArrowBack onClick={this.closeModal} />
          </div>
          {this.state.openedObject.type === "image" &&
          <div id="imageContent">
            <img src={this.state.openedObject.image} alt="" />
          </div>
          }
          {this.state.openedObject.type === "video" &&
          <div id="videoContent">
            {/* TODO videos have to be linked */}
          </div>
          }

           <div id="description">{this.state.openedObject.description}</div>
           <div id="footer">
             <div className="left">
               <Button color="primary" className="mediaBtns" onClick={this.previousObjectHandler}>Zurück</Button>
             </div>
            <div id="position">{this.state.openedObjectIndex+1}/{this.state.galleryContent.length}</div>
          <div className="right">
              <Button color="primary" className="mediaBtns" onClick={this.nextObjectHandler}>Weiter</Button>
            </div>
          </div>
        </div>


        </Modal>
      </Container>
    );
  }
}
