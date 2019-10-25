import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import images from '../../lib/indexGalleryImages';
import StyledLightboxGallery from './styled';
class LightboxGallery extends Component {
  state = { selectedIndex: 0, lightboxIsOpen: false };
  toggleLightbox = selectedIndex => this.setState(state => ({ lightboxIsOpen: !state.lightboxIsOpen, selectedIndex }));
  render() {
    const { images, isLoading } = this.props;
    const { selectedIndex, lightboxIsOpen } = this.state;

    return (
      <Fragment>
        {!isLoading ? (
          <Gallery>
            {images.map(({ author, caption, source }, j) => (
              <Image onClick={() => this.toggleLightbox(j)} key={source.thumbnail}>
                <img
                  alt={caption}
                  src={source.thumbnail}
                  css={{
                    cursor: 'pointer',
                    position: 'absolute',
                    maxWidth: '100%',
                  }}
                />
              </Image>
            ))}
          </Gallery>
        ) : null}

        <ModalGateway>
          {lightboxIsOpen && !isLoading ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel
                components={{ FooterCaption }}
                currentIndex={selectedIndex}
                formatters={{ getAltText }}
                frameProps={{ autoSize: 'height' }}
                views={images}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    );
  }
}

const gutter = 2;

const Gallery = () => (
  <div {...props} />
);

const Image = () => (
  <div {...props} />
);

export default LightboxGallery;
