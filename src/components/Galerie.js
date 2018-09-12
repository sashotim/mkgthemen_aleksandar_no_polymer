import React from 'react';
// import Dysgnathie from './dysgnathie/Dysgnathie';
import { Container, Button } from 'reactstrap';
import MyTabs from './MyTabs';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from "react-icons/io";
import MyVideoPlayer from "./MyVideoPlayer";
import ArrowKeysReact from 'arrow-keys-react';
// import ReactSwipe from 'react-swipe';

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

import DysgnathieVideos from './dysgnathie/video.json';
import EntzuendungenAbszesseVideos from './entzuendungen_abszesse/video.json';
import GesichtshauttumorenVideos from './gesichtshauttumoren/video.json';
import ImplantologieUndEpithetikVideos from './implantologie_und_epithetik/video.json';
import KomplikationenVideos from './komplikationen/video.json';
import KraniosynostosenVideos from './kraniosynostosen/video.json';
import LkgVideos from './lkg/video.json';
import LokaleLappenplastikenVideos from './lokale_lappenplastiken/video.json';
import MikrochirurgieVideos from './mikrochirurgie/video.json';
import MronjUndOrnVideos from './mronj_und_orn/video.json';
import NasennebenhoehlenVideos from './nasennebenhoehlen/video.json';
import OdontogeneTumorenVideos from './odontogene_tumoren/video.json';
import PraeprothetischeChirurgieAugmentationVideos from './praeprothetische_chirurgie_augmentation/video.json';
import SpeicheldruesenVideos from './speicheldruesen/video.json';
import SpezifischeInfektionenVideos from './spezifische_infektionen/video.json';
import TraumaVideos from './trauma/video.json';
import TumorenVideos from './tumoren/video.json';
import ZystenVideos from './zysten/video.json';

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
    ],
      videoContent: [
        DysgnathieVideos,
        EntzuendungenAbszesseVideos,
        GesichtshauttumorenVideos,
        ImplantologieUndEpithetikVideos,
        KomplikationenVideos,
        KraniosynostosenVideos,
        LkgVideos,
        LokaleLappenplastikenVideos,
        MikrochirurgieVideos,
        MronjUndOrnVideos,
        NasennebenhoehlenVideos,
        OdontogeneTumorenVideos,
        PraeprothetischeChirurgieAugmentationVideos,
        SpeicheldruesenVideos,
        SpezifischeInfektionenVideos,
        TraumaVideos,
        TumorenVideos,
        ZystenVideos,
        TumorenGallery
    ],
      listOfMedia: DysgnathieGallery.media,
      activeTab: '1',
      sourceOfLoadedVideo: "",
      posterOfLoadedVideo: ""
    };

    ArrowKeysReact.config({
      left: () => {
        this.previousObjectHandler();
      },
      right: () => {
        this.nextObjectHandler();
      }
    });
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.previousObjectHandler = this.previousObjectHandler.bind(this);
    this.nextObjectHandler = this.nextObjectHandler.bind(this);
    this.chooseTabHandler = this.chooseTabHandler.bind(this);
  }
  openModal(e) {
    // while (this.state.openedObject == undefined) {
      this.setState({
          openedObject: this.state.listOfMedia[parseInt(e.target.id, 10)],
          nextObject: this.state.listOfMedia[parseInt(e.target.id, 10)+1],
          previousObject: this.state.listOfMedia[parseInt(e.target.id, 10)-1],
          openedObjectIndex: parseInt(e.target.id, 10)}, () =>{
            if (this.state.openedObject) {
              this.setState({modalIsOpen: true});
            }
            console.log(this.state.openedObject.videoId);
            if (this.state.openedObject.type === "video") {
              let poster = this.state.videoContent[this.props.chosenSubjectIndex].videos[
                parseInt(this.state.openedObject.videoId)
              ].poster
              let source =
                "https://" +
                this.state.videoContent[this.props.chosenSubjectIndex].videos[
                  parseInt(this.state.openedObject.videoId)
                ].host +
                ":" +
                this.state.videoContent[this.props.chosenSubjectIndex].videos[
                  parseInt(this.state.openedObject.videoId)
                ].port +
                "/" +
                this.state.videoContent[this.props.chosenSubjectIndex].videos[
                  parseInt(this.state.openedObject.videoId)
                ].path +
                "/mp4:" +
                this.state.videoContent[this.props.chosenSubjectIndex].videos[
                  parseInt(this.state.openedObject.videoId)
                ].file +
                "/playlist.m3u8";
                console.log(source);
                this.setState({sourceOfLoadedVideo: source,
                                posterOfLoadedVideo: poster});
            }
          });

  }
  closeModal() {
    this.setState({modalIsOpen: false,
                  openedObject: DysgnathieGallery.media[0],
                  nextObject: DysgnathieGallery.media[mod(-1, DysgnathieGallery.media.length)],
                  previousObject: DysgnathieGallery.media[1]});
  }

  previousObjectHandler() {
    this.setState({openedObjectIndex: mod((parseInt(this.state.openedObjectIndex, 10) - 1), this.state.listOfMedia.length)}, ()=>{
        this.setState({
          openedObject: this.state.listOfMedia[this.state.openedObjectIndex],
          nextObject: this.state.listOfMedia[mod((parseInt(this.state.openedObjectIndex, 10) + 1), this.state.listOfMedia.length)],
          previousObject: this.state.listOfMedia[mod((parseInt(this.state.openedObjectIndex, 10) - 1), this.state.listOfMedia.length)]
        })
    });
  }

  nextObjectHandler() {
    this.setState({openedObjectIndex: mod((parseInt(this.state.openedObjectIndex, 10) + 1), this.state.listOfMedia.length)}, ()=>{
        this.setState({
          openedObject: this.state.listOfMedia[this.state.openedObjectIndex],
          nextObject: this.state.listOfMedia[mod((parseInt(this.state.openedObjectIndex, 10) + 1), this.state.listOfMedia.length)],
          previousObject: this.state.listOfMedia[mod((parseInt(this.state.openedObjectIndex, 10) - 1), this.state.listOfMedia.length)]
        })
    });
  }

  chooseTabHandler(tab, e) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    let images = [];
    let videos = [];
        for (var i = 0; i < this.state.galleryContent[this.props.chosenSubjectIndex].media.length; i++) {
          if (this.state.galleryContent[this.props.chosenSubjectIndex].media[i].type === "image") {
            images.push(this.state.galleryContent[this.props.chosenSubjectIndex].media[i]);
          } else if (this.state.galleryContent[this.props.chosenSubjectIndex].media[i].type === "video") {
            videos.push(this.state.galleryContent[this.props.chosenSubjectIndex].media[i]);
          }
        }
        switch (tab) {
          case '1':
            this.setState({listOfMedia: this.state.galleryContent[this.props.chosenSubjectIndex].media})
            break;
          case '2':
            this.setState({listOfMedia: videos})
            break;
          case '3':
            this.setState({listOfMedia: images})
            break;
          default:
            this.setState({listOfMedia: this.state.galleryContent[this.props.chosenSubjectIndex].media})
          }
  }

  render() {
    let videoJsOptions = {
      autoplay: false,
      controls: true,
      fluid: false,
      width: 500,
      poster: this.state.posterOfLoadedVideo,
      sources: [{
        src: this.state.sourceOfLoadedVideo,
        // type: 'video/mp4'
      }]
    }
    // console.log(DysgnathieVideos);
    console.log(this.state.items);
    return (
      <Container {...ArrowKeysReact.events}>
        <MyTabs openModal={this.openModal}
          galleryContent={this.state.listOfMedia}
          activeTab={this.state.activeTab}
          chooseTabHandler={this.chooseTabHandler}
          listOfMedia={this.state.listOfMedia}
          ></MyTabs>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          id="overlayContent"
        >
          <div id="overlayContent">

          <div id="header">
            {this.state.openedObject.title}
            <IoIosCloseCircleOutline onClick={this.closeModal} />
          </div>
          {this.state.openedObject.type === "image" &&
          <div id="imageContent">
            <img src={this.state.openedObject.image} alt="" />
          </div>
          }
          {this.state.openedObject.type === "video" &&
          <div id="videoContent">
            {/* TODO videos have to be linked */}
            <MyVideoPlayer {...videoJsOptions}></MyVideoPlayer>
          </div>
          }

           <div id="description">{this.state.openedObject.description}</div>
           <div id="footer">
             <div className="left">
               <Button color="primary" className="mediaBtns" onClick={this.previousObjectHandler}>Zurück</Button>
             </div>
            <div id="position">{this.state.openedObjectIndex+1}/{this.state.listOfMedia.length}</div>
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
