import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { increment, reset, disable } from "../../store/slice/counter";
import { RootState } from "../../store";

export default function Counter() {
  const dispatch = useDispatch();
  const counterClick = useSelector((state: RootState) => state.counter.click);
  const counterStatus = useSelector((state: RootState) => state.counter.status);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleDisable = () => {
    dispatch(disable());
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
        sx={{
          width: "120px",
        }}
      >
        <Button
          key="increment"
          disabled={counterStatus}
          onClick={handleIncrement}
        >
          CLICK:{counterClick}
        </Button>
        <Button key="reset" onClick={handleReset}>
          CLEAR
        </Button>
        <Button key="disable" onClick={handleDisable}>
          {counterStatus ? "DISABLE" : "ABLE"}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
