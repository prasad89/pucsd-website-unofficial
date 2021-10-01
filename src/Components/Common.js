import Sidebar from "../Components/Sidebar";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-8 pt-5 pt-lg-0 d-flex flex-column">
                  <h1>{props.heading}</h1>
                  <hr />
                  <p>{props.paragraph}</p>
                </div>
                <div className="col-lg-4 sidebar">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
