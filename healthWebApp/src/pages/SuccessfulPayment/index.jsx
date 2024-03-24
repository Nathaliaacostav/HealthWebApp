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
      </section>
      <Footer />
    </main>
  );
};

export default SuccessfullPayment;

