import Corousal from "../../components/page/home/corousal";
import InfoContainer from "../../components/page/home/infoContainer";
import Globe from "../../components/page/home/globe";
import Footer from "../footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Corousal />
      <InfoContainer />
      <Globe />
      <Footer />
    </>
  );
};

export default Home;
