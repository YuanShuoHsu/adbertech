import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const buttons = [
  <Button key="one">CLICK:0</Button>,
  <Button key="two">CLEAR</Button>,
  <Button key="three">DISABLE</Button>,
];

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default App;
