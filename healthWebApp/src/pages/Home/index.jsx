import Footer from "../../components/Footer";
import wallpaper7 from "../../assets/images/wallpaper7.jpeg";
import "./styles.sass";

const Home = () => {
  return (
    <main className="main-home">
      <section className="container__home">
        <div className="home__title">
          <h1 className="home__title--title">Lecttu!</h1>
        </div>
        <h3 className="home__title--subtitle">
          tu resultado médico en menos de 24h
        </h3>
        <p className="home__title--paragraph">+ humano + rápido</p>
        <div className="container--buttonRound">
          <button className="buttonRound">
            <img
              className="buttonRound--icon"
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711175393/usuario_hka6sn.png"
              alt=""
            />
          </button>
          <button className="buttonRound">
            <img
              className="buttonRound--icon"
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711175393/dolar_honbfw.png"
              alt=""
            />
          </button>
          <button className="buttonRound">
            <img
              className="buttonRound--icon"
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711175393/examen-medico_hq01ey.png"
              alt=""
            />
          </button>
          <button className="buttonRound">
            <img
              className="buttonRound--icon"
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711175393/anadir_bscuhr.png"
              alt=""
            />
          </button>
        </div>
        <section className="container--secondary">
          <div>
            <p className="secondary-pr">Escoge la opción que necesitas...</p>
          </div>
          <div className="secondary-buttons">
            <button className="secondary-buttons-btn">Tomar foto</button>
            <button className="secondary-buttons-btn">Ingresar PDF</button>
            <button className="secondary-buttons-btn">Enviar preguntas</button>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
