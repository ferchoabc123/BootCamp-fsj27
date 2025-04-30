import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/config'; // Asegúrate de que la ruta sea correcta
import { useUserData } from '../../context/UserDataContext'; // Asegúrate de que la ruta sea correcta
import { onAuthStateChanged } from 'firebase/auth';

const schema = yup.object().shape({
  correo: yup.string().email('El correo no es válido').required('El correo es requerido'),
  dui: yup.string().required('El DUI es requerido').matches(/^\d{8}-\d{1}$/, 'El DUI debe tener el formato 00000000-0'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { setUserData } = useUserData();
  const [userInfo, setUserInfo] = useState({ name: '', email: '', date: '' });

  const onSubmitForm = (data) => {
    console.log(data);

    signInWithEmailAndPassword(auth, data.correo, data.dui)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);

        // Guardar el usuario en el contexto
        setUserData(user);

        // Obtener el nombre y la fecha del usuario autenticado
        onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUserInfo({
              name: currentUser.displayName || 'No disponible',
              email: currentUser.email,
              date: currentUser.photoURL || 'No disponible', // Asegúrate de que la fecha esté disponible
            });

          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ border: '2px solid #0056b3', backgroundColor: '#ffffff' }}>
            <div className="card-body">
              <div className="text-center mb-4">
                <img 
                  src="https://www.centromedicoescalon.com/wp-content/uploads/2021/11/contactenos-cme-el-salvador-1024x682.jpg" 
                  alt="Login Illustration" 
                  style={{ maxWidth: '100%', height: 'auto' }} 
                />
              </div>
              <h3 className="card-title text-center mb-4" style={{ color: '#0056b3' }}>Iniciar Sesión</h3>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="correo" 
                    placeholder="Ingrese su correo" 
                    {...register("correo")} 
                  />
                  <p className="text-danger">{errors.correo && errors.correo.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="dui" className="form-label">DUI</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="dui" 
                    placeholder="Ingrese su DUI" 
                    {...register("dui")} 
                  />
                  <p className="text-danger">{errors.dui && errors.dui.message}</p>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn" 
                    style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold' }}
                  >
                    Iniciar
                  </button>
                </div>
              </form>
              <div className="mt-5" style={{ borderTop: '2px solid #0056b3', paddingTop: '20px' }}>
                <h4 className="text-center" style={{ color: '#0056b3' }}>Ticket de la Cita</h4>
                <p><strong>Nombre del paciente:</strong> {userInfo.name}</p>
                <p><strong>Correo del paciente:</strong> {userInfo.email}</p>
                <p><strong>Fecha del paciente:</strong> {userInfo.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
