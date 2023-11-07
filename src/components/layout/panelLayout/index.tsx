import React, { ReactNode } from "react";
import Navbar from "../../navbar"

const index = ({children}:{ children: ReactNode }) => {
  return (
    <div>
  <Navbar />
    <>
    {children}
    </>
</div>
  )
}

export default index