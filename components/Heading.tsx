import { getCookie } from "cookies-next";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const Heading: FC = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(getCookie("token")?.toString() ?? "");
  }, []);
  return (
    <Navbar className="shadow-sm sticky-top" bg="white" expand="md">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary" href="/">
          block<span className="fw-bold">dont</span>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href="/home">
              home
            </Link>
            <Link className="nav-link" href="/polls">
              poll
            </Link>
            {token ? (
              <Link href={"/logout"} className="nav-link">
                logout
              </Link>
            ) : (
              <>
                <Link className="nav-link" href="/register">
                  register
                </Link>
                <Link className="nav-link" href="/login">
                  login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Heading;
