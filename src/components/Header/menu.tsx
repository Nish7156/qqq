import React, { useState } from "react";
import Link from "next/link";

function Menu({menus}:any) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <nav>
        <div
          className={`toggle-wrap ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <span className="toggle-bar"></span>
        </div>
      </nav>
      <aside className={isActive ? "active" : ""}>
      {menus.map((data: any, index: number) => (
      
      <Link href={data.attributes.slug} key={index}>
      {data.attributes.title}
    </Link>
        
    ))
}
        
     
      </aside>
    </div>
  );
}

export default Menu;
