import { useEffect, useState } from "react";

export default function useMemo(props) {
  const [obj, setObj] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", (evt) => {
      setObj({
        x: evt.clientX,
        y: evt.clientY,
      });
    });
  }, []);
  return {
    obj,
  };
}
