// @ts-nocheck
// src/components/LoginWithGoogle.jsx
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useNavigate } from "react-router-dom";


export default function LoginWithGoogle() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario logueado:", user);

      // ✅ Guardar auth y redirigir
      localStorage.setItem("isAuth", true);
      navigate("/dashboard");

    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Iniciar sesión con Google
    </button>
  );
}
