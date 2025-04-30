import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('El nombre de usuario es requerido'),
  password: yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres')
});

const Login = () => {

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
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" {...register("username")} />
                  <p>{errors.username && errors.username.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" {...register("password")} />
                    <p>{errors.password && errors.password.message}</p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Confirmar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
