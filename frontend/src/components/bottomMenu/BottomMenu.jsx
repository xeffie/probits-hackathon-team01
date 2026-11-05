import "./bottomMenu.css";

export const BottomMenu = ({ onHome }) => {
  return (
    <section>
      <section className="menu">
        <button className="menu__button" onClick={onHome}>
          <i class="fa-solid fa-house icon"></i>
        </button>
        <button className="menu__button" onClick={onHome}>
          <i class="fa-solid fa-calendar icon"></i>
        </button>
        <button className="menu__button" onClick={onHome}>
          <i class="fa-solid fa-user-group icon"></i>
        </button>
        <button className="menu__button" onClick={onHome}>
          <i className="fa-solid fa-message icon"></i>
        </button>
      </section>
    </section>
  );
};
