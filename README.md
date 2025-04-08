# 💸 Tricount Clone

Una aplicación web moderna para dividir gastos en grupo, inspirada en Tricount. Crea grupos con amigos, añade gastos, y calcula automáticamente cuánto debe pagar cada persona. Desarrollado con React + Firebase.

## 🧠 Funcionalidades

- Autenticación de usuarios (email y contraseña)
- Crear grupos personalizados
- Añadir miembros al grupo
- Registrar y dividir gastos
- Calcular balances automáticamente
- Editar y eliminar gastos
- Dashboard con todos los grupos
- Estilos modernos y responsivos

---

## 🚀 Tecnologías usadas

- **React 19**
- **Firebase (Auth + Firestore)**
- **React Router DOM v6**
- **React Loading Skeleton**
- **CSS Modules + Responsive Design**

---

## 📦 Instalación

1. **Clona el proyecto:**

```bash
git clone https://github.com/tu-usuario/tricount-clone.git
cd tricount-clone
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Configura tu archivo `.env`:**

Crea un archivo `.env` en la raíz del proyecto con estas variables:

```env
REACT_APP_API_KEY=tu_api_key
REACT_APP_AUTH_DOMAIN=tu_auth_domain
REACT_APP_PROJECT_ID=tu_project_id
REACT_APP_STORAGE_BUCKET=tu_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=tu_sender_id
REACT_APP_APP_ID=tu_app_id
```

> 🔐 **Importante:** Nunca compartas tu `.env` públicamente. Añádelo al `.gitignore`.

---

## 🔧 Configuración de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto (si no lo tienes).
3. Ve a "Authentication" y habilita el método **Correo/Contraseña**.
4. Ve a "Firestore Database" y crea una base de datos en modo de prueba.
5. Copia la configuración del proyecto (`firebaseConfig`) y pégala en tu `.env`.

---

## 🧪 Scripts disponibles

| Comando         | Acción                         |
|-----------------|--------------------------------|
| `npm start`     | Inicia la app en `localhost:3000` |
| `npm run build` | Compila para producción        |
| `npm test`      | Lanza tests                    |
| `npm run eject` | Expone la configuración de React (irreversible) |

---

## 📁 Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables (Navbar, Footer, etc.)
├── pages/            # Páginas: Login, Dashboard, GroupDetails, etc.
├── routes/           # Todas las rutas de React Router
├── utils/            # Lógica como cálculo de balances
├── firebase/         # Configuración Firebase
├── styles/           # Archivos CSS
└── App.js            # Entrada principal
```

---

## 🧑‍💻 Autor

Desarrollado por [Carlos](https://github.com/tu-usuario).  
Con ❤️ y muchas ganas de aprender.

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT.
