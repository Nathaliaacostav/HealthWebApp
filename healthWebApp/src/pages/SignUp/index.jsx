import React, { useState } from 'react';
import { MdOutlineMailOutline, MdOutlineLock } from 'react-icons/md';
import { FaRegUser, FaRegHeart } from 'react-icons/fa6';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import userImage from '../../assets/images/Paciente.png';
import wallpaper from '../../assets/images/wallpaper2.png';
import './styles.sass';


const SignUp = () => {
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
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log('Usuario creado:', user);
      // Aquí puedes hacer algo después de que el usuario se haya registrado, como redirigirlo a otra página.
    } catch (error) {
      console.error('Error al crear usuario:', error);
      // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <main className="main-signUp">
      <section>
        <img src={userImage} alt="user" className="userPaciente" />
      </section>
      <section className="sign-up">
        <h1>Crear cuenta</h1>
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="form__input-label">
            <label htmlFor="name-input" className="form__input-label--label">
              Nombre
            </label>
            <div className="form__input-label--wrapper">
              <label htmlFor="name-input" className="icon">
                <FaRegUser />
              </label>
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
            </div>
          </div>
          <div className="form__input-label">
            <label htmlFor="email-input" className="form__input-label--label">
              Email
            </label>
            <div className="form__input-label--wrapper">
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
          <div className="form__input-label">
            <label htmlFor="genre-input" className="form__input-label--label">
              Género
            </label>
            <div className="form__input-label--wrapper">
              <label htmlFor="genre-input" className="icon">
                <FaRegHeart />
              </label>
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
            </div>
          </div>
          <div className="form__input-label">
            <label
              htmlFor="password-input"
              className="form__input-label--label"
            >
              Contraseña
            </label>
            <div className="form__input-label--wrapper">
              <label htmlFor="password-input" className="icon">
                <MdOutlineLock />
              </label>
              <input
                type="password"
                placeholder="***********"
                id="password-input"
                className="input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__buttons-container">
            <button className="form__buttons-container--sign-in" type="submit">
              Crear cuenta
            </button>
          </div>
        </form>
        <p className="sign-in__form-wrapper--text">
          ¿Ya tienes cuenta? inicia sesión
        </p>
      </section>
    </main>
  );
};
export default SignUp;
