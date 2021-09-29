import Head from "next/head";
import Header from "../src/components/Header";
import Common from "../src/Components/Common";
import { AdmissionsData } from "../src/data";
import Footer from "../src/Components/Footer";

const Admissions = () => {
  return (
    <>
      <Head>
        <title>Admission : Pune University Computer Science Department</title>
      </Head>
      <Header />
      {AdmissionsData.map((val) => {
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

export default Admissions;
