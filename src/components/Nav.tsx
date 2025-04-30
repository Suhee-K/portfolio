import React, { useState } from "react";
import Tabs, { Item } from "devextreme-react/tabs";

const Nav = () => {
  const [widgetWrapperClasses] = useState(
    "widget-wrapper widget-wrapper-horizontal"
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="tabs-demo shadow-md fixed w-full bg-white z-50">
      <div className={widgetWrapperClasses}>
        <Tabs
          stylingMode="secondary"
          defaultSelectedIndex={0}
          focusStateEnabled={false}
          onItemClick={(e) => {
            const sectionId = e.itemData.text.replace(/\s/g, "").toLowerCase();
            scrollToSection(sectionId);
          }}
        >
          <Item text="Home" />
          <Item text="About Me" />
          <Item text="Skills" />
          <Item text="Experiences" />
          <Item text="Projects" />
          <Item text="Awards" />
        </Tabs>
      </div>
    </div>
  );
};

export default Nav;
