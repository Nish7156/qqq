import React, { useState } from "react";
import heartly from "/public/images/heartly.svg";
import mindfull from "/public/images/mindful.svg";
import cuerious from "/public/images/cuerious.svg";
import cuerious2 from "/public/images/curerious-2.svg";
import confusion from "/public/images/confusion.svg";
import disappointment from "/public/images/disappointment.svg";
import disappointment2 from "/public/images/disappointment-2.svg";

import CustomImage from "../CustomImage";

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      tabTitle: heartly,
      title: "Hearty",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: mindfull,
      title: "Mindful",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle:  cuerious,
      title: "Curious",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: confusion,
      title: "Confusion",
      content: "Contenido de tab 4.",
    },
    {
      id: 5,
      tabTitle: disappointment,
      title: "Disappointment",
      content: "Contenido de tab 4.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (i: any) => {
    setActiveTab(i);
  };

  return (
      <div className="flex">
        <div className="tab-content">
          {tabs.map((tab, i) => (
            <div
              className={`tab-pane ${activeTab === i ? "active" : ""}`}
              key={i}
            >
              <div className="w-[100px] h-[100px] relative">
                <CustomImage src={tab.tabTitle} />
              </div>
            </div>
          ))}
        </div>
        <div className="tabs">
          {tabs.map((tab, i) => {
            const isActive = i === activeTab;
            const prevActive = i < activeTab;
            return (
              <li
                className={`nav-item `}
                key={i}
                onClick={() => handleClick(i)}
              >
                <a
                  className={`nav-link ${isActive ? "active" : ""} ${
                    prevActive ? "prev-active" : ""
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  <p className="title">{tab.title}</p>
                </a>
              </li>
            );
          })}
        </div>
      </div>
  );
};

export default Tabs;
