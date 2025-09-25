import "./ThirdSection.css";
import vqlImg from "./../assets/vql_img.webp";
import hssImg from "./../assets/hss_img.webp";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThirdSection = () => {
  const [systemTab, setSystemTab] = useState("VQL");
  const nav = useNavigate();
  const skills = [
    {
      key: "VQL",
      content:
        "AI 기반 비전 검사 시스템을 적용하여, 기존 검사 공정을 간소화하고 품질 관리 수준을 한 단계 업그레이드한 검사 공법입니다.",
      subContent:
        "특징: 불량률 감소, 체계적인 품질 관리, 자동화 기반의 스마트팩토리 대응형 검사 공법",
      img: vqlImg,
      url: "vql",
    },
    {
      key: "HSS",
      content:
        "최적의 구조 설계를 기반으로 정밀 금형 기술과 맞춤형 Primer 개발을 결합한 스마트 제조 공법입니다.",
      subContent:
        "특징: 에너지 절감, 자재 절약, 고품질 대량 생산이 가능한 스마트 구조 최적화 공법",
      img: hssImg,
      url: "hss",
    },
  ];

  return (
    <section className="ThirdSection">
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="thirdsection-title-content"
      >
        <h1>HS 시스템</h1>
        <p>
          한강 구조공업의 전략적인 시스템을 통해 합리적이고 최신화된 기술을
          제공합니다.
        </p>
      </motion.article>
      <article className="thirdsection-main-content">
        <div className="thirdsection-main-wrap">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="thirdsection-content-tab"
          >
            {skills.map((skill) => (
              <button
                className={`thirdsection-content-button ${
                  systemTab === skill.key ? "active" : ""
                } `}
                onClick={() => {
                  setSystemTab(skill.key);
                }}
              >
                {skill.key}
                <div className="thirdsection-button-line"></div>
              </button>
            ))}
          </motion.div>
          {skills.map((skill) => (
            <div
              className={`thirdsection-content-system ${
                systemTab === skill.key ? "" : "none"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="thirdsection-content-system-main"
              >
                <h1>{skill.key}</h1>
                <div className="thirdsection-content-line"></div>
                <div className="thirdsection-content-info">
                  <p>{skill.content}</p>
                  <p>{skill.subContent}</p>
                </div>
                <button
                  className="thirdsection-info-button"
                  onClick={() => {
                    nav(skill.url);
                    window.scrollTo(0, 0);
                  }}
                >
                  더보기
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="thirdsection-content-system-img"
              >
                <div className="thirdsection-mobile-cut">
                  <img src={skill.img} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ThirdSection;
