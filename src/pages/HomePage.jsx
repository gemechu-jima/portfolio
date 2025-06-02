
import { Helmet } from "react-helmet";
import LeftSideCta from "../Components/home/LeftSideCta.jsx";
import PageNav from "../Components/PageNav";
import RigthsideCta from "../Components/home/RigthsideCta.jsx";




function HomePage() {
 



  return (
    <main className="relative ">
      <PageNav />
      <div id="home" className="relative mx-auto  flex w-full flex-col
       bg-slate-200 font-serif dark:bg-gray-900 dark:text-white 
        md:h-screen md:flex-row md:justify-between ">
        <Helmet>
        </Helmet>
        <RigthsideCta />
        <LeftSideCta  />
      </div>
     
    </main>
  );
}

export default HomePage;
