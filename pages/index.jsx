import Meta from '../Components/Meta/index';
import Page from '../Components/Page/index';
import Hero from '../Components/Hero/index';
import About from '../Components/About/index';
import NewGallery from '../Components/NewGallery/index';
import Contact from '../Components/Contact/index';
const images = [
  {
    caption: 'hello',
    source: '/images/bartender.jpg'
  }
];

const Index = () => (
  <main>
    <Meta />
    <Page>
      <Hero />
      <About />
      <NewGallery images={images} />
      <Contact />
    </Page>
  </main>
);

export default Index;
