import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            "titulo": "¡Quieres ir a trabajar <span class='text-[#019b2a]'>legalmente en EE. UU.</span> como enfermera con la <span class='text-[#019b2a]'>visa TN</span> y disfrutar de oportunidades que <span class='text-[#019b2a]'>transformarán tu futuro</span>, regístrate.",
            "subtitulo": "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.",
            "leyenda": "Tus datos",
            "nombre": "Nombre",
            "telefono": "Teléfono",
            "mensaje": "Escribe tu mensaje...",
            "terminos": "Al proporcionar mi número de teléfono a The Mendoza Law Firm, acepto y reconozco que The Mendoza Law. <a href='#' class='text-green-500'>Política de privacidad.</a> <a href='#' class='text-red-500'>Ver más</a>.",
            "enviar": "Enviar",
            "alertaCampos": "Todos los campos son obligatorios",
            "alertaTerminos": "Debes aceptar los términos y condiciones",
            "alertaEnvio": "Formulario enviado correctamente",
        }
    },
    en: {
        translation: {
            "titulo": "Do you want to work <span class='text-[#019b2a]'>legally in the U.S.</span> as a nurse with a <span class='text-[#019b2a]'>TN visa</span> and enjoy opportunities that <span class='text-[#019b2a]'>will transform your future</span>? Sign up.",
            "subtitulo": "Leave us your details, and we will contact you as soon as possible.",
            "leyenda": "Your information",
            "nombre": "Name",
            "telefono": "Phone",
            "mensaje": "Write your message...",
            "terminos": "By providing my phone number to The Mendoza Law Firm, I accept and acknowledge that The Mendoza Law. <a href='#' class='text-green-500'>Privacy Policy.</a> <a href='#' class='text-red-500'>See more</a>.",
            "enviar": "Submit",
            "alertaCampos": "All fields are required",
            "alertaTerminos": "You must accept the terms and conditions",
            "alertaEnvio": "Form submitted successfully"
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
