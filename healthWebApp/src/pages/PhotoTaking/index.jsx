import React from 'react';
import Footer from "../../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import './styles.sass';


const PhotoTaking = () => {
  const navigate = useNavigate()
    
  return (
    <main className='photoTaking'>
      <div className="photoTaking__topBar">
        <button className="photoTaking__backButton" onClick={() => navigate('/Home')}>
        <IoIosArrowBack />
        </button>
        <h3 className="photoTaking__pageDescription">Toma de fotografías</h3>
        <button className="photoTaking__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='photoTaking__container'>
        <div>
          <h3 className="photoTaking__container--title">Recuerda cargar 1 solo examen a la vez. Toma las fotos de las hojas que requieras</h3>
          <div className="photoTaking__container--capture">
            <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711175393/anadir_bscuhr.png" alt="" />
          </div>
          <p className="photoTaking__container--caption">¿Es legible tu imagen?</p>
        </div>
        <div className="photoTaking__container--options">
          <button className="submitButton" onClick={() => navigate('/payment-validation')}>Sí, enviar</button>
          <button className="submitButton">Cargar más</button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PhotoTaking;