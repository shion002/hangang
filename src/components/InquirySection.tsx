import "./InquirySection.css";

const InquirySection = () => {
  return (
    <section className="InquirySection">
      <div className="inquiry-wrap">
        <article className="inquiry-content">
          <h1 className="inquiry-content-title-first">문의하기</h1>
          <div className="inquiry-content-title">
            <input placeholder="제목 입력" />
          </div>
          <div className="inquiry-content-contact">
            <input placeholder="휴대폰 번호" />
            <input placeholder="이메일" />
          </div>
          <div className="inquiry-content-main">
            <textarea placeholder="내용 입력"></textarea>
          </div>
          <div className="inquiry-content-button">
            <button>문의하기</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InquirySection;
