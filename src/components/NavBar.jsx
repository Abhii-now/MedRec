import { Button, Container, Navbar } from "react-bootstrap";
import { getUser } from "./User";
export function NavBar({ user }) {
  //   const ethereumButton = document.querySelector(".enableEthereumButton");
  function handleOnClick() {
    window.ethereum.request({ method: "eth_requestAccounts" });
  }
  function LoginInfo() {
    if (user != undefined) {
      return <Navbar.Text>Signed in as: {getUser(user)}</Navbar.Text>;
    } else {
      return <Button onClick={() => handleOnClick()}>Connect Wallet</Button>;
    }
  }
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">MedRec</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {LoginInfo()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
