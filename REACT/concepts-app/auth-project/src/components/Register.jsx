import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { Link } from 'react-router';

const schema = yup.object().shape({
  username: yup.string().required('El nombre de usuario es requerido'),
  email: yup.string().email('El correo no es válido').required('El correo es requerido'),
  password: yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('La confirmación de la contraseña es requerida')
});


export const Register = () => {

  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (e) => {
    
    console.log(e);
   
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Registro</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                  <input type="text" className="form-control" id="username" placeholder="Ingresa tu nombre de usuario"{...register("username")} />
                  <p>{errors.username && errors.username.message}</p>
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" {...register("email")} />
                  <p>{errors.email && errors.email.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" {...register("password")}/>
                  <p>{errors.password && errors.password.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirma tu contraseña" {...register("confirmPassword")}/>
                  <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
              </form>
              <div className="text-center mt-3">
                <Link to="/login">¿Ya tienes una cuenta? Inicia Sesión</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
