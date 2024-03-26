import React from 'react';
import './styles.sass';
import Footer from "../../components/Footer";


const DocHome = () => {
  return (
    <main className='docHome'>
      <section className='docProfile'>
        <div className='docProfile__content'>
          <img className='docProfile__content-photo'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711418012/Medico_ihvubk.png" alt="" />
          <div className='docProfile__content-data'>
            <h3 className='doctorTitle'>Dr. John Doe</h3>
            <p className='doctorDescription'>Registro médico: 12345678</p>
            <p className='doctorDescription'>Médico General</p>
          </div>
        </div>
      </section>
      <section className='container'>
        <h1 className='container__docHomeTitle'>Lecturas</h1>
        <div className='container__contentPatient'>
          <div className='container__contentPatient-description'>
            <p className='patientTitle'>Johana García López</p>
            <p className='patientData'>Paciente: femenino</p>
            <p className='patientData'>Tipo examen: Hemograma</p>
            <p className='patientData'>Fecha de envío: 19/03/24</p>
          </div>
          <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
        </div>
        <div className='container__contentPatient'>
          <div className='container__contentPatient-description'>
            <p className='patientTitle'>Rodrigo Medina Mesa</p>
            <p className='patientData'>Paciente: masculino</p>
            <p className='patientData'>Tipo examen: Hemograma</p>
            <p className='patientData'>Fecha de envío: 19/03/24</p>
          </div>
          <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
        </div>
        <div className='container__contentPatient'>
          <div className='container__contentPatient-description'>
            <p className='patientTitle'>Jesús Álvarez Restrepo</p>
            <p className='patientData'>Paciente: masculino</p>
            <p className='patientData'>Tipo examen: Hemograma</p>
            <p className='patientData'>Fecha de envío: 19/03/24</p>
          </div>
          <img className='patientImg'src="https://res.cloudinary.com/dhhyc88td/image/upload/v1711416720/lectura_ydxgqg.png" alt="" />
        </div>
      </section>
      <Footer />
    
    </main>
  );
};

export default DocHome;