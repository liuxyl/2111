import React, { useEffect, useTransition } from 'react';

export default function Num (props) {
  const { x } = props
  console.log(x, 1);
  useEffect(() => {
    console.log(x, 'x');
  }, [x])

  return (
    <div>
      
    </div>
  )
}
