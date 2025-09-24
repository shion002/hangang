import "./IntroSection.css";
import introImg from "./../assets/intro-main.webp";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="IntroSection">
      <div className="introsection-wrap">
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="intro-content"
        >
          <h1 className="intro-content-title">인사말</h1>
          <h3 className="intro-content-subtitle">
            Trusted today, transforming tomorrow
          </h3>
          <p className="intro-content-main">
            한강구조공업을 찾아주신 여러분께 진심으로 감사의 말씀을 드립니다.
            저희는 오랜 시간 쌓아온 경험과 기술력을 바탕으로, 대한민국 건축
            산업의 새로운 기준을 만들어가고 있습니다.
          </p>
          <p className="intro-content-main">
            한강구조공업은 고객과 사회가 신뢰할 수 있는 기업으로 자리매김하기
            위해 끊임없는 도전과 혁신을 이어가겠습니다.
          </p>
          <p className="intro-content-main">
            앞으로도 국내를 넘어 세계 시장에서도 인정받는 글로벌 건축 공업
            기업으로 성장해 나가겠습니다. 여러분의 지속적인 관심과 성원을
            부탁드립니다.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="intro-img"
        >
          <div>
            <img src={introImg} />
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default IntroSection;
