import Meta from '../components/Meta/index';
import Page from '../components/Page/index';
import Hero from '../components/Hero/index';
import About from '../components/About/index';
import Gallery from '../components/Gallery/index';
import Contact from '../components/Contact/index';

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
