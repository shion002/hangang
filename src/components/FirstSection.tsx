import "./FirstSection.css";
import firstImg1 from "./../assets/first-section-image1.webp";
import firstImg2 from "./../assets/first-section-image2.webp";
import firstImg3 from "./../assets/first-section-image3.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FirstSection = () => {
  const nav = useNavigate();

  return (
    <section className="FirstSection">
      <div className="firstsection-wrap">
        <article className="firstsection-article">
          <div className="firstsection-image">
            <ul className="firstsection-image-ul">
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="firstsection-image-li"
              >
                <img src={firstImg1} />
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="firstsection-image-li"
              >
                <img src={firstImg2} />
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="firstsection-image-li"
              >
                <img src={firstImg3} />
              </motion.li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="firstsection-info"
          >
            <h1 className="firstsection-title">회사소개</h1>
            <div className="firstsection-title-line"></div>
            <p className="firstsection-info-p">
              한강구조공업은 0000년 이래 기술력 고도화, 끝없는 도전을 통해 세계
              최고의 경쟁력을 갖춰 나아가는 기업입니다.
            </p>
            <p className="firstsection-info-p">
              Since 0000, the Han River Structural Industry has advanced
              technology and has been challenged in an endless way It is a
              company that is advancing with the best competitiveness.
            </p>
            <button
              className="firstsection-info-button"
              onClick={() => {
                nav("/intro");
                window.scrollTo(0, 0);
              }}
            >
              더보기
            </button>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default FirstSection;
