import Meta from '../Components/Meta/index';
import Page from '../Components/Page/index';
import Hero from '../Components/Hero/index';
import About from '../Components/About/index';
import Gallery from '../Components/Gallery/index';
import Contact from '../Components/Contact/index';
import content from '../content/home.md';

let {
  html,
  attributes: { title, cats }
} = content;

const Index = () => (
  <main>
    <Meta />
    <Page>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </Page>
  </main>
);

export default Index;
