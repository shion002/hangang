import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProductSection from "../components/ProductSection";
import productImg from "./../assets/product-banner.webp";

const Product = () => {
  return (
    <>
      <PageHeader pageBanner={productImg} pageTitle="제품" />
      <ProductSection />
      <Footer />
    </>
  );
};

export default Product;
