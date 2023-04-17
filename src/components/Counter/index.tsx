import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../../store/slice/counter";
import { RootState } from "../../store";

export default function Counter() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.click);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
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
        <Button key="increment" onClick={handleIncrement}>
          CLICK:{counterValue}
        </Button>
        <Button key="reset" onClick={handleReset}>
          CLEAR
        </Button>
        <Button key="disable">DISABLE</Button>
      </ButtonGroup>
    </Box>
  );
}
