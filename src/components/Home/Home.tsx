import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png';
import useHome from './useHome';
import PaginationComponent from 'components/Pagination/PaginationComponent';
import Timer from 'components/TImer/Timer';

const Home: React.FC = () => {
  const { data, changeLanguage, lang, handlePageChange } = useHome();
  return (
    <>
      <header className="shadow-sm">
        <Navbar bg="white" expand="lg">
          <Container fluid="lg">
            <div className="logo">
              <img src={logo} alt="Site Logo" className="img-fluid" />
            </div>
            <div className="date-time flex-fill d-flex justify-content-center justify-content-lg-end">
              <p className="m-0 fs-4">
                <Timer />
              </p>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <NavDropdown title={lang === 'ru' ? 'Русский' : 'English'} id="basic-nav-dropdown">
                  <NavDropdown.Item
                    onClick={() => {
                      changeLanguage('ru');
                    }}
                  >
                    Русский
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      changeLanguage('en');
                    }}
                  >
                    English
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="py-4">
        <Container fluid="lg">
          <PaginationComponent items={data} itemsPerPage={10} onPageChange={handlePageChange} />
        </Container>
      </main>
      <footer className="shadow">
        <Container fluid="lg" className="p-3">
          <p className="m-0 text-center">Designed and Developed by Artyom Harutyunyan</p>
        </Container>
      </footer>
    </>
  );
};

export default Home;
