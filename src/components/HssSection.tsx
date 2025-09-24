import "./SkillSection.css";
import hssImg from "./../assets/hss_img.webp";
import { motion } from "framer-motion";

const HssSection = () => {
  return (
    <section className="HssSection">
      <div className="skill-wrap">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skill-title-first"
        >
          HSS
        </motion.h1>
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skill-outline"
        >
          <div className="skill-outline-content">
            <p>
              <span style={{ color: "#bf1212" }}>정밀 금형 기술 </span>
              <span style={{ color: "#bf1212" }}>맞춤형 Primer 개발을 </span>
              융합한 스마트 제조 방식입니다.
            </p>
            <p>
              구조적 하중을 최소화하면서
              <span style={{ color: "#bf1212" }}>
                {" "}
                안정성과 내구성을 동시에 확보{" "}
              </span>{" "}
              및 반복 생산에서도{" "}
              <span style={{ color: "#bf1212" }}>일관된 고품질 제품 </span>이
              제공됩니다.
            </p>
          </div>
          <div className="skill-outline-imgbox">
            <img src={hssImg} />
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skill-character"
        >
          <h2 className="skill-character-title">핵심 특징</h2>
          <div className="skill-line"></div>
          <div className="skill-character-main">
            <div>
              <p>1</p>
              <p>구조적 효율성</p>
            </div>
            <div>
              <p>2</p>
              <p>맞춤형 Primer 기술</p>
            </div>
            <div>
              <p>3</p>
              <p>정밀 금형 기반 균일 생산</p>
            </div>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skill-expectation"
        >
          <h2 className="skill-expectation">효과</h2>
          <div className="skill-line"></div>
          <div className="skill-expectation-main">
            <div>에너지 절감</div>
            <div>자재 절약</div>
            <div>고품질 대량 생산</div>
            <div>친환경 제조</div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default HssSection;
