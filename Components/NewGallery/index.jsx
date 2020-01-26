import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import uuidv4 from 'uuid/v4';
import Gallery from '../Gallery/index';
import Image from '../Image/index';
import StyledNewGallery from './styled';

class NewGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      lightboxIsOpen: false,
    };
    this.toggleLightbox = (selectedIndex) => {
      this.setState(state => ({
        lightboxIsOpen: !state.lightboxIsOpen,
        selectedIndex
      }));
    }
  }

  ;
  render() {
    const { images, isLoading } = this.props;
    const { selectedIndex, lightboxIsOpen } = this.state;

    return (
      <StyledNewGallery id="gallery">
        <h2>gallery</h2>
        <>
          {!isLoading ? (
            <Gallery>
              {images.map(({ alt, src }, j) => (
                <Image onClick={() => this.toggleLightbox(j)} key={`${uuidv4()}`}>
                  <img
                    alt={alt}
                    src={src}
                  />
                </Image>
              ))}
            </Gallery>
          ) : null}
          <ModalGateway>
            {lightboxIsOpen && !isLoading ? (
              <Modal onClose={this.toggleLightbox}>
                <Carousel
                  currentIndex={selectedIndex}
                  frameProps={{ autoSize: 'height' }}
                  views={images}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      </StyledNewGallery>
    );
  }
}

NewGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default NewGallery;