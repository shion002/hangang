import Footer from "../components/Footer";
import HssSection from "../components/HssSection";
import PageHeader from "../components/PageHeader";
import skillImg from "./../assets/skill-banner.webp";

const Hss = () => {
  return (
    <>
      <PageHeader pageBanner={skillImg} pageTitle="기술" />
      <HssSection />
      <Footer />
    </>
  );
};

export default Hss;
