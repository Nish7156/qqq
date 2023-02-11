import React, {Children } from "react";
import Header from "@/components/Header";
function Layout({ children, menus }: any) {
  return (
    <div>
      <Header menus={menus} />
      {children}
    </div>
  );
}

export default Layout;
