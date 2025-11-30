import React from 'react';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <i className="fa-solid fa-xmark text-2xl"></i>
                </button>

                <div className="p-8 md:p-12 text-gray-800">
                    <h2 className="text-3xl font-heading font-bold mb-6 text-brand-dark">Política de Privacidad</h2>

                    <div className="prose prose-blue max-w-none">
                        <p className="mb-4">Última actualización: {new Date().toLocaleDateString()}</p>

                        <h3 className="text-xl font-bold mb-2 mt-6">1. Responsable del Tratamiento</h3>
                        <p className="mb-4">
                            Antonio José Alonso Gómez es el responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web.
                        </p>

                        <h3 className="text-xl font-bold mb-2 mt-6">2. Datos que Recopilamos</h3>
                        <p className="mb-4">
                            Recopilamos únicamente los datos necesarios para gestionar tu solicitud, que pueden incluir:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Dirección de correo electrónico (para la lista de espera y contacto).</li>
                            <li>Datos de navegación y cookies (para mejorar tu experiencia).</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-2 mt-6">3. Finalidad del Tratamiento</h3>
                        <p className="mb-4">
                            Tratamos tus datos para:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Gestionar tu inscripción en nuestra lista de espera.</li>
                            <li>Enviarte información sobre el lanzamiento de nuestros productos.</li>
                            <li>Responder a tus consultas.</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-2 mt-6">4. Legitimación</h3>
                        <p className="mb-4">
                            La base legal para el tratamiento de tus datos es tu consentimiento explícito al suscribirte a nuestra lista de espera o al aceptar el uso de cookies.
                        </p>

                        <h3 className="text-xl font-bold mb-2 mt-6">5. Destinatarios</h3>
                        <p className="mb-4">
                            No cedemos tus datos a terceros, salvo obligación legal o proveedores de servicios necesarios para el funcionamiento de la web (como servicios de hosting o email marketing), quienes tratarán los datos según nuestras instrucciones.
                        </p>

                        <h3 className="text-xl font-bold mb-2 mt-6">6. Tus Derechos</h3>
                        <p className="mb-4">
                            Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos reconocidos por el RGPD. Puedes ejercerlos enviando un email a través de nuestro formulario de contacto.
                        </p>

                        <h3 className="text-xl font-bold mb-2 mt-6">7. Cookies</h3>
                        <p className="mb-4">
                            Utilizamos cookies propias y de terceros para analizar el uso de nuestra web y mejorar nuestros servicios. Puedes configurar tu navegador para rechazar las cookies.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;
