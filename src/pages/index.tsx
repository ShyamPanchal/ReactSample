import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderComponent from "../components/header";
import HomePage from "../pages/home";
import SamplePage from "../pages/sample";

const AppWrapper = styled.div`
  background-color: #282c34;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        {/* <nav>
          <Link to="/home">Home</Link>
        </nav> */}
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<SamplePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
