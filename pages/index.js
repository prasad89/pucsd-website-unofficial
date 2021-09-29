import Head from "next/head";
import Header from "../src/components/Header";
import Common from "../src/Components/Common";
import { HomeData } from "../src/data";
import Footer from "../src/Components/Footer";
// import Image from "next/image";
// import uni from "../public/Images/uni.jpg";
// import pucsd from "../public/Images/pucsd.jpg";

const index = () => {
  return (
    <>
      <Head>
        <title>Home : Pune University Computer Science Department</title>
      </Head>
      <Header />
      <div className="container">
        <div className="d-flex w-100 justify-content-center">
          {/* <Image src={} alt="" /> */}
        </div>
      </div>
      {HomeData.map((val) => {
        return (
          <Common
            key={val.id}
            heading={val.heading}
            paragraph={val.paragraph}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default index;
