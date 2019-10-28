import Meta from '../Components/Meta/index';
import Page from '../Components/Page/index';
import Hero from '../Components/Hero/index';
import About from '../Components/About/index';
import NewGallery from '../Components/NewGallery/index';
import Contact from '../Components/Contact/index';
const images = [
  {
    alt: 'hello',
    src: '/images/bartender.jpg'
  },
  {
    alt: 'hiya',
    src: '/images/confetti.jpg'
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
