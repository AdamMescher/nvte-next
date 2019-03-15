import Meta from '../components/Meta/index';
import Page from '../components/Page/index';
import Hero from '../components/Hero/index';
import About from '../components/About/index';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';

const Index = () => (
    <main>
        <Meta />
        <Page>
            <Hero />
            <About />
            <Testimonials />
            <Gallery />
            <Contact />
        </Page>
    </main>
);

export default Index;
