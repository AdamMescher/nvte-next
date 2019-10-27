import React, { Component, Fragment } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const gutter = 2;
const Gallery = () => <div {...props}></div>
const Image = () => <div {...props}></div>
class NewGallery extends Component {
    state = {
        selectedIndex: 0,
        lightboxIsOpen: false,
    };
    toggleLightbox = () => {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex,
        }));
    };
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

export default NewGallery;