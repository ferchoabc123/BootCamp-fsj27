import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('El correo no es válido').required('El correo es requerido'),
  password: yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres')
});

export const Login = () => {

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
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
