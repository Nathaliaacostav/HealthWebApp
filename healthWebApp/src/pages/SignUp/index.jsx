import React, { useState } from 'react';
import { MdOutlineMailOutline, MdOutlineLock } from 'react-icons/md';
import { FaRegUser, FaRegHeart } from 'react-icons/fa6';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import userImage from '../../assets/images/Paciente.png';
import './styles.sass';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignUp = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //verifica si hay campos vacíos
    if (!formData.name || !formData.email || !formData.gender || !formData.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor completa todos los campos.',
      });
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log('Usuario creado:', user);
      // Mostrar alerta de éxito
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso!',
        text: 'Tu cuenta ha sido creada exitosamente.',
      });
      // Redirigir al usuario a /sign-in
      navigate("/sign-in");
    } catch (error) {
      console.error('Error al crear usuario:', error);
      // Mostrar alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear tu cuenta. Por favor inténtalo de nuevo.',
      });
    }
  };

  return (
    <main className="main-signUp">
      <section className="sign-up">
        <h1>Crear cuenta</h1>
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="custom-input">
            <label htmlFor="name-input" className="input-label">
              Nombre
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Jane Doe"
                id="name-input"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
              <FaRegUser className="icon" />
            </div>
          </div>
          <div className="custom-input">
            <label htmlFor="email-input" className="input-label">
              Email
            </label>
            <div className="input-wrapper">
              <label htmlFor="email-input" className="icon">
                <MdOutlineMailOutline />
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                id="email-input"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="custom-input">
            <label htmlFor="genre-input" className="input-label">
              Género
            </label>
            <div className="input-wrapper">
              <select
                name="gender"
                id="selected-radio"
                className="input text-300"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="female">Femenino</option>
                <option value="male">Masculino</option>
                <option value="nonBinary">No binario</option>
                <option value="agender">Otro</option>
              </select>
              <FaRegHeart className="icon" />
            </div>
          </div>
          <div className="custom-input">
            <label
              htmlFor="password-input"
              className="input-label"
            >
              Contraseña
            </label>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="***********"
                id="password-input"
                className="input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <MdOutlineLock className="icon" />
            </div>
          </div>
          <div className="form__buttons-container">
            <button className="form__buttons-container--sign-in" type="submit">
              Crear cuenta
            </button>
          </div>
        </form>
        <p className="smaller">¿Ya tienes cuenta? <Link to='/sign-in'>inicia sesión</Link></p>
      </section>
    </main>
  );
};
export default SignUp;