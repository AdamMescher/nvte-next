import Meta from '../Components/Meta/index';
import Page from '../Components/Page/index';
import Hero from '../Components/Hero/index';
import About from '../Components/About/index';

const Index = () => (
    <main>
        <Meta />
        <Page>
            <Hero />
            <About />
        </Page>
    </main>
);

export default Index;
