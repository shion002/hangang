import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import PageHeader from "../components/PageHeader";
import introBanner from "./../assets/intro-banner.webp";

const Intro = () => {
  return (
    <>
      <PageHeader pageBanner={introBanner} pageTitle="회사소개" />
      <IntroSection />
      <Footer />
    </>
  );
};

export default Intro;
