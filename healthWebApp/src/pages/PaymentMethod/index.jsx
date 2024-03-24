import React from 'react';
import Footer from "../../components/Footer";
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
import './styles.sass';


const PaymentMethod = () => {
  const navigate = useNavigate()

  const goTo = () => navigate('/sign-in');
  
  return (
    <main className='PaymentMethod'>
      <div className="PaymentMethod__topBar">
        <button className="PaymentMethod__backButton" onClick={goTo}>
          <IoIosArrowBack />
        </button>
        <h3 className="PaymentMethod__pageDescription">Transacción</h3>
        <button className="PaymentMethod__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='PaymentMethod__container'>
        <h1 className='PaymentMethod__container-title1'>Total a pagar</h1>
        <h1 className='PaymentMethod__container-title2'>$15.000</h1>
        <p className='PaymentMethod__container-paragraph'>Valor en pesos colombianos</p>
        <p className='PaymentMethod__container-small'>¡Escoge tu método de pago!</p>
        <div className='PaymentMethod__container-method'>
          <button className='type'>
            <img className='iconPay'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711301781/pseLogo_zifxqp.png" alt="Descripción de la imagen" />
          </button>
          <button className='type'>
            <img className='iconPay2'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711301839/tarjeta-de-credito_rthqip.png" alt="" />
          </button>
        </div>
        <div className='PaymentMethod__container-bolsillo'>
          <button className='bolsilloStyle'> <IoWalletOutline /> Tu bolsillo</button>
        </div>
        <h3 className='PaymentMethod__container-subtitle'>Card info</h3>
        <div className='PaymentMethod__container-dataPay'>
          <div>
            <p className='paragraph2'>Número</p>
          </div>
          <div>
            <p className='paragraph2'>Nombre</p>
          </div>
          <div className='container3'>
            <p className='paragraph2'>Fecha de exp.</p>
            <p className='paragraph2'>Código</p>
          </div>
          <button className='PaymentMethod__container-Btn'>Continuar</button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PaymentMethod;

