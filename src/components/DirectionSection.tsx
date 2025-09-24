import "./DirectionSection.css";
import directionImg from "./../assets/info-map.webp";
import { motion } from "framer-motion";

const DirectionSection = () => {
  return (
    <section className="DirectionSection">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="direction-wrap"
      >
        <article className="direction-img">
          <div>
            <h2>한강구조공업에 오시는길을 안내해드립니다</h2>
            <img src={directionImg} />
          </div>
        </article>
        <article className="direction-title">
          <div>
            <h2>주소</h2>
            <p>서울특별시 영등포구 한강로 00-000</p>
          </div>
          <div>
            <h2>연락처</h2>
            <p>대표 연락처:010-0000-0000</p>
            <p>팩스:02-000-0000</p>
            <p>이메일:hanagnst0000@naver.com</p>
          </div>
        </article>
      </motion.div>
    </section>
  );
};

export default DirectionSection;
