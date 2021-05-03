import React from 'react'
import { useState } from "react"
import Setting from "./Setting"
import Display from "./Display"

const Main = () => {
  const [viewPolice, setViewPolice] = useState("popularity");
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");
  const [sizePolice, setSizePolice] = useState(20);

  const changePolice = (event) => {
    setViewPolice(event.target.value)
  }

  const changeText = (event) => {
    setText(event.target.value)
  }

  const changeSizePolice = (event) => {
    setSizePolice(event.target.value)
  }

  return (
    <main>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 mb-4">
            <div className="position: sticky; top: 0px;">
              <Setting changePolice={changePolice} viewPolice={viewPolice} changeText={changeText} text={text} changeSizePolice={changeSizePolice} sizePolice={sizePolice} />
              <div className="mb-3">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <section className="row mb-5">
          <h2 className="mb-3">
            <Display viewPolice={viewPolice} text={text} sizePolice={sizePolice} />
          </h2>
        </section>
      </div>
    </main >
  )
}

export default Main
