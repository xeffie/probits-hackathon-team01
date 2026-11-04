// import { Link } from "react-router-dom";
import logo from "../../public/img/logo.png";
import "./home.css";

export const Home = () => {
  return (
    <>
      <section className="home">
        {/* <Link to={"/home"}> */}
        <img className="home__logo" src={logo} alt="Probits logotyp" />
        {/* </Link> */}
        <h1 className="home__title">Välkommen!</h1>
        <section className="home__date-section">
          <p className="home__date-day">Onsdag</p>
          <p className="home__date-month">4 November</p>
        </section>
        <section className="home__container">
          <h2 className="home__subtitle">Dagens känsla</h2>
          <p className="home__description">Hur mår du idag?</p>
          <button className="home__button-checkin">Checka in</button>
        </section>
        <h2 className="home__subtitle">Den här veckan</h2>
        <p>se kalender</p>
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
              <span>L</span>
              <section className="weekday"></section>
            </section>
          </section>
        </section>
        <h2 className="home__subtitle">Senaste aktiviteter</h2>
        <section>
          <section className="home__container">
            <h3>Promenad</h3>
            <p className="home__description">30 min - idag - 07:45</p>

            <a href="/calendar">Reflektera</a>
          </section>
        </section>
      </section>
    </>
  );
};
