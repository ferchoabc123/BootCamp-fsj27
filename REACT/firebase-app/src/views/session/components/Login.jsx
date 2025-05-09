import React from 'react';
import  * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { auth } from '../../../services/firebase/config'; 
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useUserData } from '../../../context/UserDataContext';
import { useNavigate } from 'react-router';

const schema = yup.object().shape({
  email: yup.string().email('El correo electronico no es valido').required('El correo electronico es requerido'),
  password: yup.string().required('La contraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

export function Login() {

   const {register, handleSubmit, formState:{errors}} = useForm({
     resolver: yupResolver(schema)
   })
    const navigate = useNavigate(); // Hook para redirigir

   //Destructuring objeto
   const { setUserData} = useUserData();

  const onSubmitForm = (data) => {
     console.log(data);

  signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    console.log(user.email);
    console.log(user.displayName);
    
    // Guardar el usuario en el contexto
    setUserData(user);
    navigate('/home'); // Redirigir a la página de inicio después de iniciar sesión
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.error(errorMessage);
  });
}

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
              <form onSubmit={ handleSubmit(onSubmitForm) }  >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" {...register('email')} placeholder="Ingresa tu correo" />
                  <p className='text-danger'>{errors.email && errors.email.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" {...register('password')} placeholder="Ingresa tu contraseña" />
                  <p className='text-danger'>{errors.password && errors.password.message}</p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}