import "./HistorySection.css";
import { motion } from "framer-motion";

const HistorySection = () => {
  return (
    <section className="HistorySection">
      <article className="history-wrap">
        <div className="history-line"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="history-main"
        >
          <h1 className="history-title">창립</h1>
          <div className="history-content-box">
            <p className="history-date">2000년 3월</p>
            <p className="history-content">한강구조공업 설립 (서울 본사)</p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2001년 5월</p>
            <p className="history-content">건축 구조물 금형 제작 사업 개시</p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2003년 2월</p>
            <p className="history-content">
              국내 최초 맞춤형 Primer 적용 공법 연구 착수
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2005년 10월</p>
            <p className="history-content">ISO 9001 품질경영시스템 인증 획득</p>
          </div>
        </motion.div>

        <div className="history-line"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="history-main"
        >
          <h1 className="history-title">기술 개발</h1>
          <div className="history-content-box">
            <p className="history-date">2006년 5월</p>
            <p className="history-content">
              자체 연구소 설립, 구조 설계 최적화 연구 강화
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2008년 2월</p>
            <p className="history-content">
              HSS 공법( HanGang Smart Structure Method ) 개발 성공
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2009년 8월</p>
            <p className="history-content">
              수도권 대형 건축 프로젝트에 HSS 공법 최초 적용
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2010년 12월</p>
            <p className="history-content">환경친화형 건축 자재 인증 획득</p>
          </div>
        </motion.div>

        <div className="history-line"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="history-main"
        >
          <h1 className="history-title">혁신과 확장</h1>
          <div className="history-content-box">
            <p className="history-date">2011년 4월</p>
            <p className="history-content">
              해외 건축 기술 전시회 참가 (일본, 독일)
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2012년 6월</p>
            <p className="history-content">
              스마트 금형 시스템 도입으로 생산 효율 20% 향상
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2013년 1월</p>
            <p className="history-content">
              VQI 공법 ( Vision Quality Inspection System ) 개발 착수
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2015년 10월</p>
            <p className="history-content">
              VQI 기반 자동 검사 라인 구축, 품질관리 체계 고도화
            </p>
          </div>
        </motion.div>

        <div className="history-line"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="history-main"
        >
          <h1 className="history-title">글로벌 진출</h1>
          <div className="history-content-box">
            <p className="history-date">2016년 8월</p>
            <p className="history-content">
              해외 지사 설립 (베트남, 인도네시아)
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2017년 9월</p>
            <p className="history-content">
              VQI 공법, 아시아 주요 건설사와 협력 프로젝트 적용
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2018년 9월</p>
            <p className="history-content">
              친환경·스마트 건축 솔루션 전문 기업으로 브랜드 리뉴얼
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2020년 4월</p>
            <p className="history-content">
              한강구조공업 창립 20주년 기념, “Next 100 Vision” 선포
            </p>
          </div>
        </motion.div>

        <div className="history-line"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="history-main"
        >
          <h1 className="history-title">미래 사업</h1>
          <div className="history-content-box">
            <p className="history-date">2021년 1월</p>
            <p className="history-content">AI 기반 품질 분석 시스템 도입</p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2022년 9월</p>
            <p className="history-content">
              모듈러 건축과 스마트 시티 구조 공법 연구 확대
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2023년 12월</p>
            <p className="history-content">차세대 HSS+VQI 융합 공법 발표</p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2024년 5월</p>
            <p className="history-content">
              ESG 경영 선포, 탄소 저감형 건축 솔루션 개발 착수
            </p>
          </div>
          <div className="history-content-box">
            <p className="history-date">2025년 8월</p>
            <p className="history-content">
              글로벌 건축 공업 선도 기업 도약, “100년 기업 비전” 발표
            </p>
          </div>
        </motion.div>

        <div className="history-line"></div>
      </article>
    </section>
  );
};

export default HistorySection;
