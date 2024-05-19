import { useState } from "react";
import { useForm } from "@formspree/react";

export default function Modal({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("mbjnpeav");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (state.succeeded && !formSubmitted) {
    setFormSubmitted(true);
    onClose();
    setShowSuccessModal(true);
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-10 inset-0 flex items-center justify-center overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={handleBackgroundClick}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="relative bg-[#363435] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-md w-full p-6">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-[#FEEED7]" id="modal-title">
                Оставьте заявку для обратной связи
              </h3>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="w-full px-4 py-2 rounded-xl bg-yellow-300 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Номер телефона"
                  required
                  className="w-full px-4 py-2 rounded-xl bg-yellow-300 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                <div className="flex justify-between">
                  <button
                    disabled={state.submitting}
                    type="submit"
                    className="mt-3 inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-gray-700 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Отправить
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Закрыть
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div
          className="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto"
          onClick={handleBackgroundClick}
        >
          <div className="fixed inset-0 bg-gray-900 opacity-75" aria-hidden="true"></div>
          <div className="relative bg-[#363435] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-md w-full p-6">
            <div className="text-center">
              <h3 className="text-xl leading-6 font-medium text-[#FEEED7]" id="modal-title">
                Спасибо!
              </h3>
              <div className="mt-2">
                <p className="text-sm text-[#FEEED7]">
                  Ваше сообщение было успешно отправлено.
                </p>
              </div>
            </div>
            <div className="mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:w-auto sm:text-sm"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
