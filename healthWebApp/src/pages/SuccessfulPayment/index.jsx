import React from 'react';
import Footer from "../../components/Footer";
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './styles.sass';


const SuccessfullPayment = () => {
  const navigate = useNavigate()

  const goTo = () => navigate('/sign-in');
  
  return (
    <main className='SuccessfullPayment'>
      <div className="SuccessfullPayment__topBar">
        <button className="SuccessfullPayment__backButton" onClick={goTo}>
        <IoIosArrowBack />
        </button>
        <h3 className="SuccessfullPayment__pageDescription">Pago exitoso</h3>
        <button className="SuccessfullPayment__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='SuccessfullPayment__container'>
        <h1 className='SuccessfullPayment__container-title'>¡Gracias por tu pago!</h1>
        <div className='SuccessfullPayment__container-check'>
          <img className='checkIcon'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711314902/garrapata_omqwug.png" alt="" />
        </div>
        <h3 className='SuccessfullPayment__container-subtitle'>Tu lectura estará disponible en menos de 24h</h3>
        <p className='SuccessfullPayment__container-receipt'>03850</p>
        <button className='SuccessfullPayment__container-share'>
          <img className='shareIcon' src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711316500/factura_tnhwzj.png" alt="" />
        </button>
        <button className='SuccessfullPayment__container-share'>
          <img className='shareIcon2' src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711316502/compartir_qpwpmj.png" alt="" />
        </button>
        <div className='SuccessfullPayment__container-btn'>
          <button className='btnConfirm'>Continuar</button>
        </div>
              </section>
      <Footer />
    </main>
  );
};

export default SuccessfullPayment;

