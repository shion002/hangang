import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTab, setMenuTab] = useState("");
  const nav = useNavigate();

  const menus = [
    {
      key: "회사소개",
      url: "/intro",
      children: [
        { key: "인사말", url: "/intro" },
        { key: "연혁", url: "/history" },
      ],
    },
    {
      key: "제품",
      url: "/product",
    },
    {
      key: "기술",
      url: "/vql",
      children: [
        { key: "VQL", url: "/vql" },
        { key: "HSS", url: "/hss" },
      ],
    },
    {
      key: "고객지원",
      url: "/direction",
      children: [
        { key: "오시는길", url: "/direction" },
        { key: "문의하기", url: "/inquiry" },
      ],
    },
  ];

  const menuClick = () => {
    setIsOpen(true);
  };

  const defaultClick = () => {
    setIsOpen(false);
  };

  const menuTabClick = (menu: string) => {
    if (menu === menuTab) {
      setMenuTab("");
    } else {
      setMenuTab(menu);
    }
  };

  return (
    <>
      <div className="header-nav-back">
        <div className="header-nav">
          <button className="header-mobile-button" onClick={menuClick}>
            ☰
          </button>
          <div
            className="header-logo"
            onClick={() => {
              nav("/");
            }}
          ></div>
          <nav className="header-pc-menu">
            {menus.map((menu) => {
              const hasChildren = !!menu.children?.length;
              return (
                <li key={menu.key}>
                  <div
                    className="header-pc-menu-title"
                    onClick={() => {
                      nav(menu.url);
                    }}
                  >
                    <div>
                      {menu.key}
                      <div className="header-pc-menu-bottom-border"></div>
                    </div>
                  </div>
                  {hasChildren && (
                    <ul className="header-pc-menu-sub">
                      {menu.children!.map((child) => (
                        <li
                          key={`${menu.key}-${child.key}`}
                          onClick={() => {
                            nav(`${child.url}`);
                          }}
                        >
                          {child.key}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </nav>
        </div>
      </div>
      <nav className={`header-mobile-nav ${isOpen ? "open" : ""}`}>
        {menus.map((menu) => {
          const menuIsOpen = menu.key === menuTab;
          const hasChildren = !!menu.children?.length;

          return (
            <li key={menu.key} className={`${menuIsOpen ? "open" : ""}`}>
              <div
                className="header-mobile-menu-title"
                onClick={() => {
                  if (!hasChildren) {
                    nav(menu.url);
                  } else {
                    menuTabClick(menu.key);
                  }
                }}
              >
                {menu.key}
                {hasChildren &&
                  (menuIsOpen ? (
                    <div className="header-mobile-close-icon">
                      <SlArrowUp />
                    </div>
                  ) : (
                    <div className="header-mobile-open-icon">
                      <SlArrowDown />
                    </div>
                  ))}
              </div>

              {hasChildren && (
                <ul className="header-mobile-nav-sub">
                  {menu.children!.map((child) => (
                    <li
                      key={`${menu.key}-${child.key}`}
                      onClick={() => {
                        nav(child.url);
                      }}
                    >
                      {child.key}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </nav>

      {isOpen && (
        <div className="header-mobile-background" onClick={defaultClick}></div>
      )}
    </>
  );
};

export default HeaderNav;
