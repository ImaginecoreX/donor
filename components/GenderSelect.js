import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";

export default function GenderSelect() {
  return (
    <Select
    placeholder="Select a Gender"
    endDecorator={
      <Chip size="sm" color="danger" variant="soft">
        +5
      </Chip>
    }
    sx={{ width: 240 }}
  >
    <Option value="dog">Dog</Option>
    <Option value="cat">Cat</Option>
    <Option value="fish">Fish</Option>
    <Option value="bird">Bird</Option>
  </Select>
  );
}
