import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import "./app.css";

function App() {
  return (
    <Container className="App">
      <Header />
      <Main />
    </Container>
  );
}

export default App;
