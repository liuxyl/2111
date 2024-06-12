import React, { useEffect, useState } from "react";
import useMemo from "./components/useMove";

export default function City(props) {
  const { obj } = useMemo;
  return (
    <div>
      <h1>x{obj.x}</h1>
      <h1>y:{obj.y}</h1>
    </div>
  );
}
