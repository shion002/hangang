import Footer from "../components/Footer";
import HistorySection from "../components/HIstorySection";
import PageHeader from "../components/PageHeader";
import introBanner from "./../assets/intro-banner.webp";

const History = () => {
  return (
    <>
      <PageHeader pageBanner={introBanner} pageTitle="연혁" />
      <HistorySection />
      <Footer />
    </>
  );
};

export default History;
