import { MdOutlineMailOutline, MdOutlineLock } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import "./styles.sass"


const SignIn = () => {
  
  return (
    <main className="main-signIn">
      <section className="sign-in">
        <h1>Iniciar sesión</h1>
        <form 
          className='sign-in__form'
        >
          <div className='form__input-label'>
            <label 
              htmlFor='email-input'
              className='form__input-label--label'
            >
              Email
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='email-input' className='icon'>
                <MdOutlineMailOutline />
            </label>
              <input 
                type='email' 
                placeholder='example@email.com' 
                id='email-input' 
                className='input'
                autoComplete='off'
              />
            </div>
            </div>
          <div className='form__input-label'>
            <label 
              htmlFor='password-input'
              className='form__input-label--label'
            >
              Contraseña
            </label>
            <div className='form__input-label--wrapper'>
              <label htmlFor='password-input' className='icon'>
                <MdOutlineLock />
              </label>
              <input 
                type='password' 
                placeholder='***********' 
                id='password-input' 
                className='input'
                />
            </div>
          </div>
          <div className='form__buttons-container'>
            <button
              className='form__buttons-container--sign-in'
              type='submit'
            >
              Iniciar sesión
            </button>
            <button
              className='form__buttons-container--google flex'
            >
              <span class="img-google">Google</span>
              <span class="img-google">
                <FcGoogle />
              </span>
            </button>
            <button
              className='form__buttons-container--phone'
            >
              <span class="img-phone">
              <FiPhone />
              </span>
            </button>
          </div>
        </form>        
        <div class="letter-footer">
        <smaller className='p3'>¿No tienes cuenta? Crea una cuenta</smaller>
        
        </div>
        
      </section> 
    </main>
  );
}

export default SignIn
