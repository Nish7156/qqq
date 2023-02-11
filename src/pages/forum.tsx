import Layout from "@/layout/Layout";
import Header from "@/components/Contagion/header";
import LoginBox from "@/components/Contagion/loginBox";
import Category from "@/components/Contagion/category";
import Search from "@/components/Contagion/Search";
import ForumMenu from "@/components/Contagion/forumMenu";
import About from "@/components/Contagion/about";
import Card from "@/components/Card";
import Chat from "@/components/Contagion/chat";
import Related from "@/components/Contagion/related";


import { MenuService } from "../service";

export default function Forum({ menus }: any) {
  return( <Layout menus={menus}>
    <Header />
    <Category />
    <LoginBox />
    <Search />
    <Card />
    <ForumMenu />
    <div className="container my-4">
      <div className="grid grid-cols-9 gap-4">
         <div className="col-span-6">
         <Chat />
         </div>
         <div className="col-span-3">
         <About />
         <Related />
         </div>

      </div>
  
   
    </div>
  </Layout>);
}

export async function getServerSideProps() {
  let menus;

  try {
    const { data } = await MenuService();
    const content = data?.menus.data ?? {};
    menus = content;
  } catch (error) {}

  return {
    props: {
      menus: menus,
    },
  };
}
