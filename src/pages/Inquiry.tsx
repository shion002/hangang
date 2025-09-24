import Footer from "../components/Footer";
import InquirySection from "../components/InquirySection";
import PageHeader from "../components/PageHeader";
import faqImg from "./../assets/direction-banner.webp";

const Inquiry = () => {
  return (
    <>
      <PageHeader pageBanner={faqImg} pageTitle="문의" />
      <InquirySection />
      <Footer />
    </>
  );
};

export default Inquiry;
