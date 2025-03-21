import './App.css'
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
    terminos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "telefono" && !/^\d*$/.test(value)) return; // Solo permite números

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar si algún campo está vacío
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.mensaje.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!formData.terminos) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    alert("Formulario enviado correctamente");
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

              <p className='text-white text-lg font-semibold leading-none'>
                ¡Quieres ir a trabajar <span className='text-[#019b2a]'>legalmente en EE. UU.</span> como enfermera con la <span className='text-[#019b2a]'>visa TN</span> y disfrutar de oportunidades que <span className='text-[#019b2a]'>transformarán tu futuro</span>, regístrate.
              </p>

              <p className='mt-5 text-white'>
                Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.
              </p>

              <form onSubmit={handleSubmit} className='bg-[#012858] rounded-2xl p-6 flex justify-center items-center flex-col gap-5 mt-6 w-[500px] max-w-[90%] mx-auto'>
                <h3 className='uppercase text-white leading-none'>Tus datos</h3>

                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre || ""}
                  onChange={handleChange}
                  className="bg-white p-1 text-sm w-full"
                  placeholder='Nombre'
                />

                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="bg-white p-1 text-sm w-full"
                  placeholder='Teléfono'
                />

                <textarea
                  rows={5}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="bg-white p-1 text-sm w-full"
                  placeholder='Escribe tu mensaje...'
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
                    Al proporcionar mi número de teléfono a The Mendoza Law Firm, acepto y reconozco que The Mendoza Law. <a href='#' className='text-green-500'>Política de privacidad.</a> <a href='#' className='text-red-500'>Ver más</a>.
                  </p>

                </div>

                <button className='bg-[#ff0000] uppercase w-40 px-2 py-3 text-xs text-white hover:bg-[#d80000] transition-colors cursor-pointer'>Enviar</button>

              </form>

            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default App
