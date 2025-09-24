import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import hangangBanner from "./../assets/hangangbanner.webp";
import "./Header.css";

const MainHeader = () => {
  return (
    <>
      <header
        className="Header"
        style={{
          backgroundImage: `url(${hangangBanner})`,
        }}
      >
        <HeaderNav />
        <HeaderTitle />
      </header>
    </>
  );
};

export default MainHeader;
