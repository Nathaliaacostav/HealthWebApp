import React from 'react';
import Footer from "../../components/Footer";
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './styles.sass';


const PaymentValidation = () => {
  const navigate = useNavigate()

  
  return (
    <main className='paymentValidation'>
      <div className="paymentValidation__topBar">
        <button className="paymentValidation__backButton" onClick={() => navigate('/photo-taking')}>
        <IoIosArrowBack />
        </button>
        <h3 className="paymentValidation__pageDescription">Validar pago</h3>
        <button className="paymentValidation__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='paymentValidation__container'>
        <div className='paymentValidation__container__loadedPages'>
        </div>
        <div className= 'paymentValidation__container__galery'>
          <div className='paymentValidation__container__galery-Icon'></div>
          <div className='paymentValidation__container__galery-Icon'></div>
          <div className='paymentValidation__container__galery-Icon'></div>
        </div>
        <h3 className='paymentValidation__container-subtitle'>Páginas cargadas</h3>
        <p className='paymentValidation__container-paragraph'>Ten en cuenta que Lecttu realizará la lectura de tu examen siempre y cuando el archivo sea legible y corresponda a un examen médico</p>
        <p className='paymentValidation__container-warning'>Por ahora no realizamos lecturas de exámenes diagnósticos o electrocardiogramas</p>
        <h3 className='paymentValidation__container-subtitle'>Valor a pagar</h3>
        <div className='paymentValidation__container-paymentAmount'>
          <div>
            <img src="" alt="" />
          </div>
          <div class='cost'>$15.000 COP</div>
        </div>
        <button className='paymentValidation__container-button'onClick={() => navigate('/payment-method')}>Continuar</button>
      </section>
      <Footer />
    </main>
  );
};

export default PaymentValidation;