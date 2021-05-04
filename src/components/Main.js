import React, { useState, useEffect, useRef } from 'react'
import Setting from "./Setting"
import Display from "./Display"

const Main = () => {
  const [viewPolice, setViewPolice] = useState("popularity");
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");
  const [sizePolice, setSizePolice] = useState(20);
  const [policeList, setPoliceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cancelRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    cancelRef.current = false
    controllerRef.current = new AbortController()
    // mounts
    console.log("I mounted")
    return () => {
      //unmounts
      console.log("I unmount")
      cancelRef.current = true
      controllerRef.current.abort()
    }
  }, [])

  useEffect(() => {
    console.log("use effect starts with ", viewPolice)
    console.log(cancelRef)

    setLoading(true);

    //Ajout de notre key sous le format REACT_APP_"nom key"
    fetch(`https://webfonts.googleapis.com/v1/webfonts?sort=${viewPolice}&key=${process.env.REACT_APP_GOOGLEFONTS_API_KEY}`, {
      signal: controllerRef.current.signal
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu charger les polices, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("I get data")
        console.log(data);
        if (!cancelRef.current) {
          console.log("I will update component")
          setPoliceList(data.items)
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error.message)
        if (!cancelRef.current) {
          setError(error.message);
          setLoading(false);
        }
      });

  }, [viewPolice]);


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
            <Display viewPolice={viewPolice} policeList={policeList} text={text} sizePolice={sizePolice} />
          </h2>
        </section>
      </div>
    </main >
  )
}

export default Main
