import { getAuth, signOut } from 'firebase/auth';
import { useUserData } from '../../../context/UserDataContext';

export const Logout = () => {
    const { setUserData } = useUserData();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth)
            setUserData(null); // Vacía el contexto del usuario
            console.log('Usuario deslogueado exitosamente');
        } catch (error) {
            console.error('Error al desloguear el usuario:', error);
        }
    };

    return (
        <button className='btn btn-danger' onClick={handleLogout}>
            Logout
        </button>
    );
};
