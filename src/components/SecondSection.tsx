import "./SecondSection.css";
import secImg1 from "./../assets/second-section-image1.webp";
import secImg2 from "./../assets/second-section-image2.webp";
import secImg3 from "./../assets/second-section-image3.webp";
import secImg4 from "./../assets/second-section-image4.webp";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <section className="SecondSection">
      <article className="secondsection-wrap">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="secondsection-title"
        >
          제품소개
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="secondsection-title-line"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="secondsection-intro"
        >
          <p className="secondsection-content">
            한강구조공업만의 기술로
            <br />
            새로운 변화의 시대를 이끌어갑니다
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="secondsection-img-wrap"
        >
          <li>
            <div className="secondsection-img">
              <img src={secImg1} />
            </div>
          </li>
          <li>
            <div className="secondsection-img">
              <img src={secImg2} />
            </div>
          </li>
          <li>
            <div className="secondsection-img">
              <img src={secImg3} />
            </div>
          </li>
          <li>
            <div className="secondsection-img">
              <img src={secImg4} />
            </div>
          </li>
        </motion.ul>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="secondsection-intro-button"
        >
          더보기
        </motion.button>
      </article>
    </section>
  );
};

export default SecondSection;
