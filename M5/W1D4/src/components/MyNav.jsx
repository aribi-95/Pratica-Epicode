import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import logo from "../assets/logo-text.png";
import { ThemeContext } from "../context/ThemeContext";

function MyNav({ searchTerm, setSearchTerm }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Navbar
            expand="lg"
            collapseOnSelect
            className={`sticky-top navbar-expand-lg ${
                theme === "light"
                    ? "navbar-light bg-light"
                    : "navbar-dark bg-dark"
            }`}
        >
            <Container fluid>
                <Navbar.Brand href="#" className="py-0">
                    <img src={logo} className="navLogo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Cerca un titolo..."
                            className="me-2 w-100"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <button
                        className={`btn themeButton ms-2 ${
                            theme === "light"
                                ? "btn-outline-dark"
                                : "btn-outline-light"
                        }`}
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? "☀️" : "🌙"}
                    </button>
                </div>
            </Container>
        </Navbar>
    );
}

export default MyNav;
