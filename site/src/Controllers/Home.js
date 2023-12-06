import Carousel from "../Components/Slider";
import Sponsor from "../Components/sponsor";

function Home() {
  return (
    <>
      <Carousel />

      <section
        className="Home-menu"
        style={{
          backgroundImage: `url("./img/Screenshot2.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>basket ball club Allauch</h1>
        <article className="Home-articles">
          <div className="articles-div1">
            <h3>Résultats</h3>
            <img src="./img/12.png" alt="flyers" />
            <a href="/Actualites">
              <button className="b1">get started</button>
            </a>
          </div>
          <div className="articles-div2">
            <h3>Calendrier</h3>
            <img src="./img/12.png" alt="flyers" />
            <div>
            <a href="/Actualites">
              <button className="b2">get started</button>
            </a>
            </div>
          </div>

          <div className="articles-div3">
            <h3>Médias</h3>
            <img src="./img/14.png" alt="photos d'equipes" />
            <a href="/Medias">
              <button className="b3" >get started</button>
            </a>
          </div>
        </article>
      </section>
      <Sponsor />
    </>
  );
}
export default Home;
