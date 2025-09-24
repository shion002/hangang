import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import VqlSection from "../components/VqlSection";
import skillImg from "./../assets/skill-banner.webp";

const Vql = () => {
  return (
    <>
      <PageHeader pageBanner={skillImg} pageTitle="기술" />
      <VqlSection />
      <Footer />
    </>
  );
};

export default Vql;
