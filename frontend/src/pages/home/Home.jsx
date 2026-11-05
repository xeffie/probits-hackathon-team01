// import { Link } from "react-router-dom";
import logo from "../../public/img/logo2.png";
import "./home.css";

export const Home = () => {
  return (
    <>
      <section className="home">
        {/* <Link to={"/home"}> */}
        <section className="home__flexbeside">
          <img className="home__logo " src={logo} alt="Probits logotyp" />
          <section className="home__anv-icon"></section>
        </section>
        {/* </Link> */}
        <h1 className="home__title ">Välkommen Anna!</h1>
        <section className="home__date-section ">
          <p className="home__date-day ">Onsdag</p>
          <p className="home__date-month">4 November</p>
        </section>
        <section className="home__container">
          <h2 className="home__subtitle ">Dagens känsla</h2>
          <p className="home__description home__margin-bottom">
            Hur mår du idag?
          </p>
          <button className="home__button-checkin">Checka in</button>
        </section>
        <section className="home__flexbeside">
          <h2 className="home__subtitle home__margin-bottom">Den här veckan</h2>
          <a href="/calendar">Se kalender</a>
        </section>
        <section className="home__container">
          <section className="weekdays">
            <section className="day">
              <span>M</span>
              <section className="weekday"></section>
            </section>

            <section className="day">
              <span>T</span>
              <section className="weekday"></section>
            </section>

            <section className="day">
              <span>O</span>
              <section className="weekday"></section>
            </section>

            <section className="day">
              <span>T</span>
              <section className="weekday"></section>
            </section>

            <section className="day">
              <span>F</span>
              <section className="weekday"></section>
            </section>

            <section className="day">
              <span>L</span>
              <section className="weekday"></section>
            </section>

            <section className="day">
              <span>S</span>
              <section className="weekday"></section>
            </section>
          </section>
        </section>
        <h2 className="home__subtitle">Senaste aktiviteter</h2>

        <section className="home__container home__flexbeside">
          <section className="home__flexbeside">
            <section className="icon__training"></section>
            <section>
              <h3 className="home__subsubtitle">Promenad</h3>
              <p className="home__description">30 min - idag - 07:45</p>
            </section>
          </section>

          <a className="home__button-reflect" href="/reflect">
            Reflektera
          </a>
        </section>
        <section className="home__container home__flexbeside">
          <section className="home__flexbeside">
            <section className="icon__lunch"></section>
            <section>
              <h3 className="home__subsubtitle">Lunch på fast tid</h3>
              <p className="home__description">30 min - idag - 12:00</p>
            </section>
          </section>
          <p>icon-smiley</p>
        </section>
        <section className="home__container home__flexbeside">
          <section className="home__flexbeside">
            <section className="icon__training"></section>
            <section>
              <h3 className="home__subsubtitle">Styrketräning</h3>
              <p className="home__description">45 min - Tor 05 nov - 18:00</p>
            </section>
          </section>
          <p>icon-smiley</p>
        </section>
        <section className="home__container home__flexbeside">
          <section className="home__flexbeside">
            <section className="icon__other"></section>
            <section>
              <h3 className="home__subsubtitle">Kvällsvila utan skärm</h3>
              <p className="home__description">20 min - Tis 05 nov - 18:45</p>
            </section>
          </section>
          <p>icon-smiley</p>
        </section>
        <section className="home__container home__flexbeside">
          <section className="home__flexbeside">
            <section className="icon__training"></section>
            <section>
              <h3 className="home__subsubtitle">Cykel till jobbet</h3>
              <p className="home__description">25 min - Tis 05 nov - 07:45</p>
            </section>
          </section>
          <a href="/reflect">Reflektera</a>
        </section>
        <a href=""></a>
      </section>
    </>
  );
};
