import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Meta from '../Components/Meta/index';
import Page from '../Components/Page/index';
import Hero from '../Components/Hero/index';
import About from '../Components/About/index';
import NewGallery from '../Components/NewGallery/index';
import Contact from '../Components/Contact/index';

const Index = ({
  images
}) => (
  <main>
    <Meta />
    <Page>
      <Hero />
      <About />
      <NewGallery images={images.resources.map(image => ({ src: image.secure_url, alt: '' }))} />
      <Contact />
    </Page>
  </main>
  );

const getImages = async () => {
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;
  const name = process.env.CLOUDINARY_CLOUD_NAME;
  const maxResults = 100;
  const url = `https://${key}:${secret}@api.cloudinary.com/v1_1/${name}/resources/image/upload/?max_results=${maxResults}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    images: data
  }
}

Index.getInitialProps = getImages();

Index.propTypes = {
  images: PropTypes.arrayOf.isRequired
}

export default Index;
