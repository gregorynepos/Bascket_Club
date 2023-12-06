import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function Actualites() {
  const [Actus, setActus] = useState([]);

  useEffect(() => {
    axios.get("/AllActus")
      .then((response) => {
        setActus(response.data);
      });
  }, []);
  if (!Actus)
    return null;

  return (
    <>
      <section className='articles'>
        <h1>Actualites</h1>
        {Actus.map((actus, i) => {
          return (
            <div className='article' key={i}>
              <div className='right'>
                <h1>{actus.title}</h1>
                <p className='description'>{actus.descriptions}</p>
                <p className='date'>{actus.date}</p>
              </div>
              <div className='left'>
                <img style={{ maxWidth: "auto" }} src={"img/" + actus.images_articles} alt={actus.alt_articles} className='' />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Actualites;