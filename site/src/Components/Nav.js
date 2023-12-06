import React, { useState, useEffect } from 'react';

function Nav() {
    // selon la taille de l'écran le menu s'affiche 
    const [tooggleMenu, setToggleMenu] = useState(false);
    const [Largeur, setLargeur] = useState(window.innerWidth)


    const tooggleNavSmallScreen = () => {

        setToggleMenu(!tooggleMenu);
    }
    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 700) {
                setToggleMenu(false);

            }

        }

        window.addEventListener('resize', changeWidth);

        return () => {

            window.removeEventListener('resize', changeWidth);
        }

    }, [])


    return (
        //short circuit operator
        <>

            <nav>

                {(tooggleMenu || Largeur > 700) && (
                    <section className="liste">
                        <img className="liste" src="/img/Screenshot5.png" alt="logo du club" />
                        <h2 className="liste" >basket club allaudien </h2>


                        <ul className='liste' >
                            <li className='items'><a href="/">Home</a></li>
                            <li className='items'><a href="/Club">Club</a></li>
                            <li className='items'><a href="/Equipes">Equipes</a></li>
                            <li className='items' ><a href="/Actualites">Actu</a></li>
                            <li className='items' ><a href="/Stages ">Stages</a></li>
                            <li className='items' ><a href="/Adhesions ">Adhésions</a></li>
                            <li className='items'><a href="/Medias">Medias</a></li>
                            <li className='items'><a href="/Contact">Contact</a></li>
                            <li className='items'><a className="fas fa-user-cog" href="/Login"> </a></li>
                        </ul>
                    </section>
                )}

                <button onClick={tooggleNavSmallScreen} className='btn'>menu</button>

            </nav>

        </>
    );
}
export default Nav;