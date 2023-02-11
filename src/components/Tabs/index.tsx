import React,  {useEffect, useRef,useState} from 'react';
import heartly from "/public/images/heartly.svg";
import mindfull from "/public/images/mindful.svg";
import cuerious from "/public/images/cuerious.svg";
import cuerious2 from "/public/images/curerious-2.svg";
import confusion from "/public/images/confusion.svg";
import disappointment from "/public/images/disappointment.svg";
import disappointment2 from "/public/images/disappointment-2.svg";
import CustomImage from "../CustomImage";

const Tabs = ({sectionVisible}:any) => {

  const tabs = [
    {
      id: 1,
      tabImage: [heartly],
      title: "Hearty",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabImage: [mindfull],
      title: "Mindful",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabImage:  [cuerious, cuerious2],
      title: "Curious",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabImage: [confusion],
      title: "conflusion",
      content: "Contenido de tab 4.",
    },
    {
      id: 5,
      tabImage: [disappointment, disappointment2],
      title: "Disappointment",
      content: "Contenido de tab 4.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (i: any) => {
    setActiveTab(i);
  };
  if (typeof document !== 'undefined') {
    const removeActiveClass = () => {
      var elems = document.querySelectorAll(".nav-link");
      var imageElems = document.querySelectorAll(".tab-pane.active");
        [].forEach.call(elems, function(el:any) {
            el.classList.remove("active");
            el.classList.remove("prev-active");
        });
        [].forEach.call(imageElems, function(el:any) {
            el.classList.remove("active");
        });
    }
    const resetTabAnimation = () => {
      var elems = document.querySelectorAll(".nav-link");
      var imageElems = document.querySelectorAll(".tab-pane");
        [].forEach.call(elems, function(el:any) {
            el.classList.remove("active");
            el.classList.remove("prev-active");
        });
        [].forEach.call(imageElems, function(el:any) {
            el.classList.remove("active");
        });
        document.getElementById('tab_0')?.classList.add('active');
        document.getElementById('tabImage_0')?.classList.add('active');
    }


    if (sectionVisible) {
      resetTabAnimation();

      var elemsTab = document.querySelectorAll(".nav-link");

      elemsTab.forEach.call(elemsTab, function(el, i) {
        setTimeout(function(){ 
          removeActiveClass();
          document.getElementById('tab_' + i)?.classList.add('active');
          document.getElementById('tabImage_' + i)?.classList.add('active');
          for (let j = 0; j < i; j++) {
            document.getElementById('tab_' + j)?.classList.add("prev-active");
          }
        }, i * 2000);
        
      });
    } else {
      removeActiveClass();
    }
}




  return (
      <div className="flex items-end ml-8">
        <div className="tab-content">
          {tabs.map((tab, i) => (
            <div id={`tabImage_` + i}
              className={`tab-pane ${activeTab === i ? "active" : ""}`}
              key={i}
            >
              <div className={`min-w-[290px] min-h-[290px] relative ${tab.tabImage[1] ? "doubleImage" : ""}` }>
                <CustomImage src={tab.tabImage[0]} />
                {/* { tab.tabImage[1] &&
                <CustomImage src={tab.tabImage[1]} />
                } */}
              </div>
            </div>
          ))}
        </div>
        <div className="tabs ml-32">
          {tabs.map((tab, i) => {
            const isActive = i === activeTab;
            const prevActive = i < activeTab;
            return (
              <li
                className={`nav-item `}
                key={i}
                
              >
                <a id={`tab_${i}`}
                  className={`nav-link ${isActive ? "active" : ""} ${
                    prevActive ? "prev-active" : ""
                  }`}
                 
                >
                  <p className="title text-2xl">{tab.title}</p>
                </a>
              </li>
            );
          })}
        </div>
      </div>
  );
};

export default Tabs;

