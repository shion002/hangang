import "./ProductSection.css";
import product1 from "./../assets/second-section-image1.webp";
import product2 from "./../assets/second-section-image2.webp";
import product3 from "./../assets/second-section-image3.webp";
import product4 from "./../assets/second-section-image4.webp";
import { motion } from "framer-motion";
import useMobile from "../hooks/useMobile";

const ProductSection = () => {
  const isMobile = useMobile();
  const products = [
    {
      key: "Various Structural Components",
      content: "I-형강, C-형강을 통한 강도유지, 플랜지를 통한 구조물 연결 제품",
      img: product1,
    },
    {
      key: "Truss Structure and Mechanical Parts",
      content:
        "트러스, 플랜지로 효율적인 하중분산과 내부 베어링으로 서스펜션과 각도조절",
      img: product2,
    },
    {
      key: "Power Transmission",
      content: "한강구조공업 만의 동력 전달 체결 부품을 통해 보장된 내구성",
      img: product3,
    },
    {
      key: "Large-Scale Structural",
      content:
        "부싱과 트러스 형강을 통해 대형 구조재의 보조 구조물의 내구성, 회전운동에 대한 마찰을 줄여줍니다.",
      img: product4,
    },
  ];

  return (
    <section className="ProductSection">
      <div className="product-wrap">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="product-title-content"
        >
          <h1 className="product-title-content-h3">
            Beams, Channels, Flange, Truss, Bushing의 기초 기반으로 대형
            구조재나 커스텀에도 유리하게 제작됩니다.
          </h1>
        </motion.article>
        <div className="product-line"></div>
        <article className="product-main-box">
          {products.map((product) => (
            <div className="product-main-imgcontent-box">
              <motion.div
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : -50,
                  y: isMobile ? 50 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="product-img-content"
              >
                <h3>{product.key}</h3>
                <p>{product.content}</p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : 50,
                  y: isMobile ? 50 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="product-img-box"
              >
                <img src={product.img} />
              </motion.div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default ProductSection;
