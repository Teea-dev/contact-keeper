import React from "react";
import Nav from "../layout/Nav";
import Contacts from "../contacts/Contacts";

function Home() {
  return (
    <>
      <Nav />

      <div className="grid-2">

       <div>
        <Contacts /> 
       </div>
      </div>
    </>
  );
}

export default Home;
