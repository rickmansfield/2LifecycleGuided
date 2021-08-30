import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log('AppFun: Set State');
  const [name, setName] = useState("Warren");
  
  const handleClick = () => {
    console.log('AppFunc: Handle Click');
    setName("Allison");
  };

  useEffect(() => {
    console.log('AppFunc: Component has Mounted Just this ONCE');
    //most likely you will want to set new state here
  }, [])

  useEffect(() => {
    console.log('AppFunc: Component had Updated');
  })

  console.log('AppFunc: Render DOM');
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
