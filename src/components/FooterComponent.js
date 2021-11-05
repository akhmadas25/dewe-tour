import { Container, Footer } from "react-bootstrap";
import "../assets/stylesheet/footer.css";
import leaf from "../assets/leaf.png";
import "../assets/stylesheet/navbar.css";

function FooterComponent() {
  return (
    <Container fluid="true">
      <div className="text-end leaf">
        <img src={leaf} />
      </div>
      <div className="footer mt-5 py-2 text-light bg-warning">
        <h6 className="text-center fw-light">
          Copyright @2021 Dewe Tour -Akhmad Syaifudin-
        </h6>
      </div>
    </Container>
  );
}

export default FooterComponent;
