import NavbarComponent from "../components/NavbarComponent";
import "../assets/stylesheet/profile.css";
import { Form, Button } from "react-bootstrap";
import JumbotronComponent from "../components/JumbotronComponent";

function Profile() {
  return (
    <>
      <NavbarComponent />
      <JumbotronComponent />
      <h2>ini konten ptofile</h2>
    </>
  );
}

export default Profile;
