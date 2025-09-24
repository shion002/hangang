import "./PageTitle.css";

interface pageTitleProps {
  title: string;
}

const PageTitle = ({ title }: pageTitleProps) => {
  return (
    <div className="PageTitle">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
