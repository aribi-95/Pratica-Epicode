import { Container, Alert } from "react-bootstrap";
import logo2 from "./assets/epibooks-logo.png";

function Welcome() {
    return (
        <Container className="p-3">
            <Alert className="myAlert mb-0" variant="info">
                <img src={logo2} className="alertLogo" alt="logo" />
                <p className="mb-0">Benvenuto, sfoglia i nostri libri e lasciati ispirare!</p>
            </Alert>
        </Container>
    );
}

export default Welcome;
