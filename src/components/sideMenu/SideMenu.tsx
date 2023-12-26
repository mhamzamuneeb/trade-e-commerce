import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export const SideMenu = ({ sharedData, updateData }) => {
  const menu = [
    { title: "electronics", value: "electronics" },
    {
      title: "jewelery",
      value: "jewelery",
      children: [
        { title: "men's clothing", value: "men's clothing" },
        { title: "b1", value: "b1" },
        { title: "c1", value: "c1" },
        {
          title: "d1",
          value: "d1",
          children: [
            { title: "women's clothing", value: "women's clothing2" },
            { title: "b2", value: "b2" },
            { title: "c2", value: "c2" },
            { title: "d2", value: "d2" },
          ],
        },
      ],
    },
    {
      title: "d",
      value: "d",
      children: [
        { title: "a11", value: "a11" },
        { title: "b11", value: "b11" },
        { title: "c11", value: "c11" },
        {
          title: "d11",
          value: "d11",
          children: [
            { title: "a22", value: "a22" },
            { title: "b22", value: "b22" },
            { title: "c22", value: "c22" },
            { title: "d22", value: "d22" },
          ],
        },
      ],
    },
  ];

  const [openMenus, setOpenMenus] = useState([]);

  const showMenu = (index) => {
    setOpenMenus((prevOpenMenus) => [...prevOpenMenus, index]);
  };

  const hideMenu = (index) => {
    setOpenMenus((prevOpenMenus) => prevOpenMenus.filter((i) => i !== index));
  };
  const getValue = (value) => {
    updateData(value);
    console.log(value);
  };
  return (
    <div className="section">
      <div className="horizontal-slide-menu">
        <ul className="level-1-menu">
          {menu?.map((item, index) => (
            <li
              className={`level-1-item menu-item ${
                item?.children?.length > 0 ? "hasChildren" : ""
              }`}
              key={item.value}
            >
              <span onClick={() => getValue(item.value)}>{item.title}</span>
              {item?.children?.length > 0 && (
                <>
                  <span onClick={() => showMenu(index)}>
                    <ArrowRightOutlined />
                  </span>
                  <ul
                    className={`level-2-menu subMenu ${
                      openMenus.includes(index) ? "noTranslate" : ""
                    }`}
                  >
                    <li className="level-2-close" key="qwe">
                      <span onClick={() => hideMenu(index)}>
                        <ArrowLeftOutlined />
                      </span>
                    </li>
                    {item?.children?.map((child, childIndex) => (
                      <li
                        className={`level-2-item menu-item ${
                          child?.children?.length > 0 ? "hasChildren" : ""
                        }`}
                        key={child.value}
                      >
                        <span onClick={() => getValue(child.value)}>
                          {child.title}
                        </span>
                        {child?.children?.length > 0 && (
                          <>
                            <span onClick={() => showMenu(childIndex)}>
                              <ArrowRightOutlined />
                            </span>
                            <ul
                              className={`level-3-menu subMenu ${
                                openMenus.includes(childIndex)
                                  ? "noTranslate"
                                  : ""
                              }`}
                            >
                              <li className="level-3-close" key="asd">
                                <span onClick={() => hideMenu(childIndex)}>
                                  <ArrowLeftOutlined />
                                </span>
                              </li>
                              {child?.children?.map((subChild) => (
                                <li
                                  className="level-3-item menu-item"
                                  key={subChild.value}
                                >
                                  <span
                                    onClick={() => getValue(subChild.value)}
                                  >
                                    {subChild.title}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
