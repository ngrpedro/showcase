import React from "react";
import Text from "../../components/Text";

const CardSession = () => {
  return (
    <div
      className="py-16 px-6 md:p-16 grid grid-cols-2 
                      lg:grid-cols-3 gap-4 md:gap-14"
    >
      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6 cursor-pointer bg-white hover:bg-transparent hover:shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
          />
        </svg>

        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Suporte 24 horas</Text>
          <Text type="text-type-sm">
            Clientes Organizze têm acesso a suporte 24/7 através de multicanais.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6  cursor-pointer bg-white hover:bg-transparent hover:shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>

        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Material simplificado</Text>
          <Text type="text-type-sm">
            Material desenvolvido em liguagem simplificada e assertiva.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6  cursor-pointer bg-white hover:bg-transparent hover:shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>

        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Estratégias validadas</Text>
          <Text type="text-type-sm">
            Com estratégias simples e validadas, vamos te ajudar a conquistar
            seus objetivos.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6  cursor-pointer bg-white hover:bg-transparent hover:shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>

        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Planejamos metas</Text>
          <Text type="text-type-sm">
            Você recebe um planejamento para atingir metas a curto, médio e
            longo prazo.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6  
                  cursor-pointer bg-white hover:bg-transparent hover:shadow-lg transition-colors"
      >
        <div className="p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Análise financeira</Text>
          <Text type="text-type-sm">
            Acompanhe seus avanços na análise financeira que te enviamos
            periodicamente.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6  cursor-pointer bg-white hover:bg-transparent hover:shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>

        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md"> Time de profissionais</Text>
          <Text type="text-type-sm">
            Para te oferecer o melhor, todos os profissionais da Organizze são
            especialistas em finanças.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CardSession;
