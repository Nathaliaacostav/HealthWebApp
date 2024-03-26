import adminImage from "../../assets/images/Medico.png"
import userImage from "../../assets/images/Paciente.png"
import "./styles.sass"

const Welcome = () => {
  
  return (
    <main className="main-welcome">
      <div className="container">
        <section className="container-rols">
          <div className="container-rols__div">
            <img src={userImage} alt="user" className="container-rols__div--img"/>
            <h2 className="welcomeTitle">Soy un paciente</h2>
            <p className="pd">Obtén lecturas de tus exámenes médicos y orientación en salud.</p>
            <button className="rol container-rols__div--user">
              <p>Ingresa</p>
            </button>
          </div>
          <div className="container-rols__div">
            <img src={adminImage} alt="admin" className="container-rols__div--img"/>
            <h2 className="welcomeTitle">Soy un médico</h2>
            <p className="pd">Brindo orientación en salud e interpretación de exámenes</p>
            <button className="rol container-rols__div--admin">
              <p>Ingresa</p>
            </button>
          </div>
          <p className='footerText'>Selecciona tu usuario para ingresar ¿No tienes cuenta? crea una aquí</p>
        </section>
      </div>
    </main>
);
}

export default Welcome