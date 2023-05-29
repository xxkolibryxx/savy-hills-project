import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png';
import PaginationComponent from 'components/Pagination/PaginationComponent';
import Timer from 'components/Timer/Timer';
import dbData from '../../db/data.json';
import { selectLanguage } from 'redux/language/selectors';
import { setLanguage } from 'redux/language/languageSlice';
import { type IData } from 'interfaces/common';

type changeLanguageType = (language: string) => void;
type LanguageData = Record<string, Record<string, IData>>;

interface Props {
  lang: string;
  setLanguage: (language: string) => void;
}

interface State {
  data: IData[];
  currentPage: number;
}

class Home extends Component<Props, State> {
  state: State = {
    data: [],
    currentPage: 1
  };

  componentDidMount(): void {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.lang !== this.props.lang) {
      this.fetchData();
    }
  }

  fetchData(): void {
    const { lang } = this.props;
    const parsedDataByType: LanguageData = dbData;
    const temporaryData = Array.from(Object.values(parsedDataByType[lang]));
    this.setState({ data: temporaryData });
  }

  handlePageChange = (selectedPage: number): void => {
    this.setState({ currentPage: selectedPage });
  };

  changeLanguage: changeLanguageType = (language) => {
    const { setLanguage } = this.props;
    setLanguage(language);
  };

  render(): JSX.Element {
    const { lang } = this.props;
    const { data } = this.state;

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
                  <NavDropdown
                    title={lang === 'ru' ? 'Русский' : 'English'}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        this.changeLanguage('ru');
                      }}
                    >
                      Русский
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        this.changeLanguage('en');
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
            <PaginationComponent
              items={data}
              itemsPerPage={10}
              onPageChange={this.handlePageChange}
            />
          </Container>
        </main>
        <footer className="shadow">
          <Container fluid="lg" className="p-3">
            <p className="m-0 text-center">Designed and Developed by Artyom Harutyunyan</p>
          </Container>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state: { language: { value: string } }): { lang: string } => {
  return {
    lang: selectLanguage(state)
  };
};

const mapDispatchToProps = {
  setLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
