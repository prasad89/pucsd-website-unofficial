import Head from "next/head";
import Header from "../src/components/Header";
import Common from "../src/Components/Common";
import { AboutData } from "../src/data";
import Footer from "../src/Components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About : Pune University Computer Science Department</title>
      </Head>
      <Header />
      {AboutData.map((val) => {
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

export default About;
