import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import i18next from "i18next";

const Language = () => {
  const languages = [
    {
      code: "en",
      name: "english",
      country_code: "gb",
      dir:'ltr'
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "sa",
      dir: "rtl",
    },
  ];

  const { i18n, t } = useTranslation();
  // const { changeLanguage } = i18n;

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    document.querySelector("html").dir = currentLanguage.dir ;
    document.title = t("app_title");
  }, [currentLanguage, t]);

  console.log(currentLanguage ,'current');
  const languageMenu = (
    <Menu>
      {languages.map((item) => (
        <Menu.Item
          key={item.country_code}
          onClick={() => i18next.changeLanguage(item.code)}
        >
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="flex justify-end px-40 py-4 border-t-4 border-t-[#7251A2] border-b-2 border-b-[#EDEDED] max-sm:hidden">
      <Dropdown overlay={languageMenu} trigger={["click"]} className="rtl">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {currentLanguage.name.toUpperCase()} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default Language;
