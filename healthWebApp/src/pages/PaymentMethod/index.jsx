import React from 'react';
import Footer from "../../components/Footer";
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from "react-icons/io";
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
        <small>Escoge tu método de pago</small>
        <div className='PaymentMethod__container-Method'>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
        </div>
        <div>
          <button>Tu bolsillo</button>
        </div>
        <h3>Card info</h3>
        <div>
          <div>
            <p>Número</p>
          </div>
          <div>
            <p>Nombre</p>
          </div>
          <div>
            <p>Fecha de exp.</p>
            <p>Código</p>
          </div>
          <button>Continuar</button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PaymentMethod;

