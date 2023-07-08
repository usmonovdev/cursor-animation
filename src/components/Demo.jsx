import React from "react";
import ShapeCursors from "./demos/ShapeCursors";
import WithIcons from "./demos/WithIcons";
import PremiumCursors from "./demos/PremiumCursors";

const Demo = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <PremiumCursors />
      <ShapeCursors />
      <WithIcons />
    </div>
  );
};

export default Demo;
