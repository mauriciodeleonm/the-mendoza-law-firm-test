import './App.css'
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation(); // Usa la función t para obtener las traducciones y i18n para cambiar el idioma
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
    terminos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "telefono" && !/^\d*$/.test(value)) return; // Solo números

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar si algún campo está vacío
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.mensaje.trim()) {
      alert(t('alertaCampos'));
      return;
    }

    if (!formData.terminos) {
      alert(t('alertaTerminos'));
      return;
    }

    alert(t('alertaEnvio'));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage); // Cambiamos el idioma usando la función changeLanguage
  };

  return (
    <>
      <div className="relative w-full min-h-screen bg-cover bg-center bg-custom flex items-center pt-5 lg:pt-0">
        <div className="absolute inset-0 bg-[#012858] opacity-50 z-0"></div>

        <section className="flex items-end lg:items-center justify-center w-full min-h-screen relative z-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-[90%] max-w-5xl border-t-3 border-white">

            <div className="order-2 lg:order-1">
              <img
                src="src/assets/stock.png"
                className="relative mx-auto lg:absolute md:bottom-0 lg:left-0 w-md h-md xl:w-lg xl:h-lg"
                alt="Imagen"
              />
            </div>

            <div className="order-1 lg:order-2 lg:col-span-2 pt-8">

              <p className='text-white text-lg font-semibold leading-none' dangerouslySetInnerHTML={{ __html: t('titulo') }}></p>

              <p className='mt-5 text-white'>
                {t('subtitulo')}
              </p>

              <form onSubmit={handleSubmit} className='bg-[#012858] rounded-2xl p-6 flex justify-center items-center flex-col gap-5 mt-6 w-[500px] max-w-[90%] mx-auto'>
                <h3 className='uppercase text-white leading-none'>{t('leyenda')}</h3>

                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre || ""}
                  onChange={handleChange}
                  className="bg-white p-1 text-sm w-full"
                  placeholder={t('nombre')}
                />

                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="bg-white p-1 text-sm w-full"
                  placeholder={t('telefono')}
                />

                <textarea
                  rows={5}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="bg-white p-1 text-sm w-full"
                  placeholder={t('mensaje')}
                ></textarea>

                <hr className="border-white border-1 w-full" />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-8 h-8 text-blue-600 bg-gray-200 border-gray-400 rounded-none focus:ring-blue-500"
                    name="terminos"
                    checked={formData.terminos}
                    onChange={handleChange}
                  />

                  <p className='text-white leading-none text-xs text-start ps-3'>
                    <span dangerouslySetInnerHTML={{ __html: t('terminos') }} />
                  </p>
                </div>

                <button className='bg-[#ff0000] uppercase w-40 px-2 py-3 text-xs text-white hover:bg-[#d80000] transition-colors cursor-pointer'>{t('enviar')}</button>
              </form>

            </div>

          </div>
        </section>

        {/* Select para cambiar el idioma */}
        <div className="absolute top-5 right-5 z-10">
          <select onChange={handleLanguageChange} className="bg-white p-2 rounded">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

      </div>
    </>
  )
}

export default App
