import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import btoa from 'btoa';
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
      {/* eslint-disable-next-line */}
      <NewGallery images={images.resources.map(image => ({ src: image.secure_url, alt: '' }))} /> 
      <Contact />
    </Page>
  </main>
  );

Index.getInitialProps = async () => {
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;
  const name = process.env.CLOUDINARY_CLOUD_NAME;
  const maxResults = 100;
  const url = `https://api.cloudinary.com/v1_1/${name}/resources/image/upload?max_results=${maxResults}`;
  const authorization = `Basic ${btoa(`${key  }:${  secret}`)}`;
  const data = await fetch(
    url,
    {
      mode: 'no-cors',
      headers: { 'Authorization': authorization }
    }
  )
  .then(res => res.json())
  .catch(err => console.error(err)) // eslint-disable-line

  return {
    images: data
  }
};

Index.propTypes = {
  images: PropTypes.shape({
      public_id: PropTypes.string,
      format: PropTypes.string,
      version: PropTypes.number,
      resource_type: PropTypes.string,
      type: PropTypes.string,
      created_at: PropTypes.string,
      bytes: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      url: PropTypes.string,
      secure_url: PropTypes.string
  }).isRequired
}
export default Index;
