import Meta from '../Components/Meta/index';
import Page from '../Components/Page/index';
import Hero from '../Components/Hero/index';
import About from '../Components/About/index';
import Gallery from '../Components/Gallery/index';

const Index = () => (
    <main>
        <Meta />
        <Page>
            <Hero />
            <About />
            <Gallery />
        </Page>
    </main>
);

export default Index;
