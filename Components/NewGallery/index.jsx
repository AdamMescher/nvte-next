import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
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
        this.toggleLightbox = () => {
            this.setState(state => ({
                lightboxIsOpen: !state.lightboxIsOpen,
            }));
        }
    };
    render() {
        const { images, isLoading } = this.props;
        const { selectedIndex, lightboxIsOpen } = this.state;

        return (
            <StyledNewGallery id="gallery">
                <h2>gallery</h2>
                <Fragment>
                    {!isLoading ? (
                        <Gallery>
                            {images.map(({ alt, src }, j) => (
                                <Image onClick={() => this.toggleLightbox(j)} key={j}>
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
                </Fragment>
            </StyledNewGallery>
        );
    }
}

export default NewGallery;