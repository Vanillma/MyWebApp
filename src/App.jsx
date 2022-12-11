import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Container
        fluid={true}
        className="p-0"
      >
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
