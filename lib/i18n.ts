import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to FitControl',
          register: 'Register',
          login: 'Login',
          name: 'Name',
          email: 'Email',
          password: 'Password',
          dashboard: 'Dashboard',
          clients: 'Clients',
          payments: 'Payments',
          turns: 'Turns',
          plans: 'Plans',
          classes: 'Classes',
          myPayments: 'My Payments',
          routines: 'Routines',
          changeLanguage: 'Change Language',
          toggleTheme: 'Toggle Theme',
        },
      },
      es: {
        translation: {
          welcome: 'Bienvenido a FitControl',
          register: 'Registrarse',
          login: 'Iniciar Sesión',
          name: 'Nombre',
          email: 'Correo Electrónico',
          password: 'Contraseña',
          dashboard: 'Panel de Control',
          clients: 'Clientes',
          payments: 'Pagos',
          turns: 'Turnos',
          plans: 'Planes',
          classes: 'Clases',
          myPayments: 'Mis Pagos',
          routines: 'Rutinas',
          changeLanguage: 'Cambiar Idioma',
          toggleTheme: 'Cambiar Tema',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

