import "./Footer.css";
import logoImg from "./../assets/hanganglogo.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <p>개인정보처리방침</p>
          <div className="footer-vline"></div>
          <p>이용약관</p>
        </div>
        <div className="footer-logo">
          <img src={logoImg} />
        </div>
        <div className="footer-info-top">
          <p>대표자 : 000</p>
          <div className="footer-vline"></div>
          <p>주소 : 서울특별시 00구 00로 000-000 (00빌딩 12층)</p>
          <div className="footer-vline"></div>
          <p>TEL. 000-0000-0000</p>
        </div>
        <div className="footer-info-mid">
          <p>E-MAIL : S0000000@gmail.com</p>
          <div className="footer-vline"></div>
          <p>사업자등록번호 : 000-000000-0000</p>
        </div>
        <div className="footer-info-bottom">
          <p>COPYRIGHT© HANGANGSTRUCTUCTURE ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
