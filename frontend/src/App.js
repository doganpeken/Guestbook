import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Entrie from "./components/Entrie";
import EntrieList from "./components/EntrieList";

const StyledContainer = styled(Container)`
  background-color: white;
  padding: 0px;
`;

export default function App() {
  const [view, setView] = useState("entrielist");

  return (
    <StyledContainer>
      {view === "entrielist" && <EntrieList view={view} setView={setView} />}
      {view === "entrie" && <Entrie view={view} setView={setView} />}
    </StyledContainer>
  );
}
