import React from 'react';

function Contact() {
  return (
    <>

      <section className='menu'>
        <div style={{
          backgroundImage: `url("./img/Screenshot3.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <section className='contacts'>
            <h1>Contacts</h1>
            <div className='article'>
              <div className='left'>
                <img src="./img/ecusson.png" alt="" className='' />
              </div>
              <div className='right'>
                <p className='date'></p>
                <h1> ALLAUCH BASKET BALL </h1>
                <p className='description'>Vous voulez des renseignements alors n'hésitez pas à venir à nos permanences :<br />le lundi et le jeudi de 17h30 à 20h au gymnase Tommasi.</p>
                <p className='auteur'>  </p>
              </div>
            </div>
            <div className='article'>
              <div className='left'>
                <img src="./img/audrey.png" alt="" className='' />
              </div>
              <div className='right'>
                <p className='date'></p>
                <h1> Audrey CUGGIA, Secrétaire </h1>
                <p className='description'>30 bd bernard Verger Lotissement Leï Jitello d Oulivie 13013 MARSEILLE </p>
                <span className="fas fa-envelope"> email: bc.allaudien@gmail.com </span>
                <p className='auteur'> </p>
              </div>
            </div>
          </section>
        </div>
      </section>

    </>
  );
}

export default Contact;