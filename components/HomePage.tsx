import BotonAutenticacion from "./BotonAutenticacion";
import React, { useState } from "react";
import CustomHeader from "./Header";
export function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  
    return (
      <>
        <CustomHeader title="Club Ituzaingo" />
        {!loggedIn && <BotonAutenticacion />}
      </>
    );  
}
