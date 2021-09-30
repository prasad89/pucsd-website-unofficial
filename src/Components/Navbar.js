import { useRouter } from "next/router";
import Link from "next/link";
import { NavLinks } from "../data";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand"></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  {NavLinks.map((val, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        <Link href={val.path}>
                          <a
                            className={
                              router.pathname == val.path
                                ? "menu_active nav-link"
                                : "nav-link"
                            }
                          >
                            {val.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
