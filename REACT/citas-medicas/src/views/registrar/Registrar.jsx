import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase/config'; // Asegúrate de que la ruta sea correcta
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const hoy = new Date();


const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es requerido'),
    correo: yup.string().email('El correo no es válido').required('El correo es requerido'),
    fecha: yup.date().required('La fecha es requerida').nullable().min(hoy, 'La fecha no puede ser anterior a hoy'),
    dui: yup.string().required('El DUI es requerido').matches(/^\d{8}-\d{1}$/, 'El DUI debe tener el formato 00000000-0'),
})



export const Registrar = () => {
    const navigate = useNavigate(); // Hook para redirigir
    //Esto es una desestructuración de un objeto que devuelve el hook useForm
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitForm = (data) => {
        console.log(data);

        createUserWithEmailAndPassword(auth, data.correo, data.dui)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // Actualizar el perfil del usuario con nombre y fecha
                updateProfile(user, {
                    displayName: data.nombre,
                    photoURL: data.fecha, // Asegúrate de que 'fecha' sea un campo válido en el perfil del usuario
                }).then(() => {
                    console.log('Perfil actualizado:', user.displayName);
                    console.log('Fecha registrada:', data.fecha);

                    // Redirigir al login
                    navigate('/login');
                }).catch((error) => {
                    console.error('Error al actualizar el perfil:', error);
                });
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
          <div className="card" style={{ border: '2px solid #0056b3', backgroundColor: '#ffffff' }}>
            <div className="card-body">
              <h3 className="card-title text-center mb-4" style={{ color: '#0056b3' }}>Registrar Cita</h3>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" {...register("nombre")}/>
                  <p className='text-danger'>{errors.nombre && errors.nombre.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="email" className="form-control" id="correo" placeholder="Ingrese su correo" {...register("correo")}/>
                    <p className='text-danger'>{errors.correo && errors.correo.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="fecha" {...register("fecha")}/>
                    <p className='text-danger'>{errors.fecha && errors.fecha.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="dui" className="form-label">DUI</label>
                  <input type="text" className="form-control" id="dui" placeholder="Ingrese su DUI" {...register("dui")}/>
                    <p className='text-danger'>{errors.dui && errors.dui.message}</p>
                </div>
                <div className="text-center">
                  <button 
                    type="submit"  
                    className="btn" 
                    style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold' }}
                  >
                    Confirmar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
