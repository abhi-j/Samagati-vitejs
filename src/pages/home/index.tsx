import Corousal from '../../components/page/home/corousal';
import InfoContainer from '../../components/page/home/infoContainer';
import Globe from '../../components/page/home/globe';
import Hero from '../../components/page/home/hero';
import AboutContainer from '../../components/page/home/aboutContainer';
import GlobeInfo from '../../components/page/home/globeInfo';

import Footer from '../footer';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Hero />
            <AboutContainer />
            <InfoContainer />
            <Corousal />
            <GlobeInfo />
            <Globe />
            <Footer />
        </>
    );
};

export default Home;
