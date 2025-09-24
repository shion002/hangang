import DirectionSection from "../components/DirectionSection";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import faqImg from "./../assets/direction-banner.webp";

const Direction = () => {
  return (
    <>
      <PageHeader pageBanner={faqImg} pageTitle="오시는길" />
      <DirectionSection />
      <Footer />
    </>
  );
};

export default Direction;
