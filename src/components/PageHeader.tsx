import HeaderNav from "./HeaderNav";
import PageTitle from "./PageTitle";
import "./Header.css";

interface pageHeaderProps {
  pageBanner: string;
  pageTitle: string;
}

const PageHeader = ({ pageBanner, pageTitle }: pageHeaderProps) => {
  return (
    <>
      <header
        className="Header"
        style={{
          height: "400px",
          backgroundImage: `url(${pageBanner})`,
          backgroundPosition: "50% 60%",
        }}
      >
        <HeaderNav />
        <PageTitle title={pageTitle} />
      </header>
    </>
  );
};

export default PageHeader;
