import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { InitzializeApp } from "./init";
import { RouterApps } from "./routing";

function App() {
  return (
    <>
      <InitzializeApp></InitzializeApp>
      <RouterApps></RouterApps>
    </>
  );
}

export default App;
