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
    < main >
      <Meta />
      <Page>
        <Hero />
        <About />
        <NewGallery images={images.resources} />
        <Contact />
      </Page>
    </main >
  );

Index.getInitialProps = async function () {
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;
  const name = process.env.CLOUDINARY_CLOUD_NAME;
  const maxResults = 100;
  const url = `https://${key}:${secret}@api.cloudinary.com/v1_1/${name}/resources/image/upload/?max_results=${maxResults}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    images: data
  }
}

export default Index;
