
import "./styles.sass"

const Home = () => {
  
  return (
    <main className="main-welcome">
      <img src="" alt="" />
      <section>
        <h1>Lecttu</h1>
        <h3>tu resultado médico en menos de 24h</h3>
        <p>+ humano + rápido</p>
        <div>
            {/* <button>
                <img src="ruta/a/la/imagen.png" alt="Ícono">
            </button>
            <button>
                <img src="ruta/a/la/imagen.png" alt="Ícono">
            </button>
            <button>
                <img src="ruta/a/la/imagen.png" alt="Ícono">
            </button>
            <button>
                <img src="ruta/a/la/imagen.png" alt="Ícono">
            </button> */}
            <p>Escoge la opción que necesitas...</p>
            <div>
                <button>Ingresar PDF</button>
                <button>Tomar foto</button>
                <button>Enviar una pregunta</button>
            </div>
        </div>
      </section>
      
    </main>
);
}

export default Home