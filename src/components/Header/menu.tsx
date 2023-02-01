import React, { useState } from "react";

function Menu() {
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
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
      </aside>
    </div>
  );
}

export default Menu;
