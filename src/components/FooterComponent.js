import { Container, Footer } from "react-bootstrap";
import "../assets/stylesheet/footer.css";

function FooterComponent() {
  return (
    <Container fluid="true">
      <div className="footer mt-5 py-2 text-light bg-warning">
        <h6 className="text-center fw-light">Copyright @2021 Dewe Tour -Akhmad Syaifudin-</h6>
      </div>
    </Container>
  );
}

export default FooterComponent;
