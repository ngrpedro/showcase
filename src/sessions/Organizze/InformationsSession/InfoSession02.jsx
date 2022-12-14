import { Play } from "phosphor-react";
import React from "react";
import woman from "../../../assets/organizze/business-woman.png";
import Text from "../../../components/Text";

const InfoSession02 = () => {
  return (
    <div className="py-8 px-6 md:px-16 md:py-14 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-14">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="ml-[17px]">
          <img src={woman} alt="" className="w-full box-shadow-image-left" />
        </div>
        <a
          href="#"
          className="lg:hidden flex items-center justify-start gap-6 group hover:text-[#7185B9]
                      text-[#546BA6] font-bold text-lg leading-[30px]"
        >
          <div className="bg-[#546BA6] rounded-full p-2 group-hover:bg-[#7185B9] transition-colors">
            <Play size={28} className="text-white" />
          </div>
          <span>Confira nosso vídeo Institucional</span>
        </a>
      </div>
      <div className="space-y-[40px]">
        <div className="space-y-[40px]">
          <Text type="text-type-xl">
            Você merece viver com mais tranquilidade e menos preocupações
          </Text>
          <div className="max-w-md">
            <Text type="text-type-sm">
              Acredite: é mais fácil do que você imagina! E você conta com a
              orientação de profissionais especializados.
            </Text>
          </div>
        </div>
        <div className="">
          <a
            href="#"
            className="hidden lg:flex items-center justify-start gap-6
                      text-[#546BA6] font-bold text-lg leading-[30px]"
          >
            <div className="bg-[#546BA6] rounded-full p-2">
              <Play size={28} className="text-white" />
            </div>
            <span>Confira nosso vídeo Institucional</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSession02;
