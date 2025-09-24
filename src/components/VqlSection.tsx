import "./SkillSection.css";
import vqlImg from "./../assets/vql_img.webp";
import { motion } from "framer-motion";

const VqlSection = () => {
  return (
    <section className="Vqlsection">
      <div className="skill-wrap">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skill-title-first"
        >
          VQL
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
              <span style={{ color: "#bf1212" }}>AI 기반 비전 검사 시스템</span>
              을 적용하여 기존의 육안 및 단순 기계적 검사 방식을 대체 및
              보완하는 방식입니다.
            </p>
            <p>
              차별화된 공법으로{" "}
              <span style={{ color: "#bf1212" }}>공정 간소화</span> 및{" "}
              <span style={{ color: "#bf1212" }}>불량률이 최소화</span>된 정밀
              품질 관리가 가능합니다.
            </p>
          </div>
          <div className="skill-outline-imgbox">
            <img src={vqlImg} />
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
              <p>불량률 감소</p>
            </div>
            <div>
              <p>2</p>
              <p>체계적 품질 관리</p>
            </div>
            <div>
              <p>3</p>
              <p>스마트 팩토리 대응</p>
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
            <div>생산성 향상</div>
            <div>품질 신뢰성 확보</div>
            <div>비용 절감</div>
            <div>데이터 기반 의사결정</div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default VqlSection;
