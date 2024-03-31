import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';
import "./styles.sass";

const Home = () => {

  const navigate = useNavigate();

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
        {/* <div className="container--buttonRound">
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
        </div> */}
        <section className="container--secondary">
          <div className="secondary-buttons">
            {/* <button className="secondary-buttons-btn" onClick={() => navigate('/photo-taking')}>Tomar foto</button> */}
            <button className="secondary-buttons-btn">Ingresa tu examen</button>
            {/* <button className="secondary-buttons-btn" onClick={() => navigate('/chat')}>Enviar preguntas</button> */}
          </div>
          <div>
            <p className="secondary-pr">Carga tus exámenes de laboratorio en foto o PDF. Un profesional médico se encargará de su interpretación y envío de resultados</p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home;