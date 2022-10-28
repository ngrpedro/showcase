import { CalendarPlus, ChartBar, CheckCircle, FileDoc, Question, SketchLogo } from "phosphor-react";
import React from "react";
import Text from "../components/Text";

const CardSession = () => {
  return (
    <div
      className="bg-[#EDEDED] py-16 px-6 grid grid-cols-2 
                      lg:grid-cols-3 gap-4 md:gap-14"
    >
      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6"
      >
        <Question size={28} weight="bold" />
        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Suporte 24 horas</Text>
          <Text type="text-type-sm">
            Clientes Organizze têm acesso a suporte 24/7 através de multicanais.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6"
      >
        <FileDoc size={28} weight="bold" />
        <div className="space-y-2 md:space-y-4">
          <Text type="text-type-md">Material simplificado</Text>
          <Text type="text-type-sm">
            Material desenvolvido em liguagem simplificada e assertiva.
          </Text>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center 
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6"
      >
        <CheckCircle size={28} weight="bold" />
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
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6"
      >
        <div className="rounded-full p-2 bg-[#f6bab0] shadow-md">
          <CalendarPlus size={28} weight="bold" />
        </div>
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
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6"
      >
        <ChartBar size={28} weight="bold" />
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
                  text-center gap-2 md:gap-6 card-border px-2 py-4 md:p-6"
      >
        <SketchLogo size={28} weight="bold" />
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
