import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import images from '../../lib/indexGalleryImages';
import StyledLightboxGallery from './styled';
class LightboxGallery extends React.Component {
  state = { modalIsOpen: false }
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={[
              {
                source: '../static/assets/images/small-image/1 - confetti.jpg'
              }]} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default LightboxGallery;
