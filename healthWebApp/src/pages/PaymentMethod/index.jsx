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
        <h3 className="PaymentMethod__pageDescription">Toma de fotografías</h3>
        <button className="PaymentMethod__fi-more">
          <FiMoreVertical />
        </button>
      </div>
      <section className='PaymentMethod__container'>
      </section>
      <Footer />
    </main>
  );
};

export default PaymentMethod;

