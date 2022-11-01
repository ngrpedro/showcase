import React from "react";
import moca from "../../assets/organizze/moca.png";
import Button from "../../components/Button";
import Text from "../../components/Text";

const Hero = () => {
  return (
    <div className="bgImageHero flex flex-col md:flex-row 
                    items-center justify-center gap-16 py-8 px-6">
      <div className="space-y-[32px]">
        <div className="max-w-[474px] space-y-[16px]">
          <Text type="text-type-3xl">
            A gente organiza sua vida{" "}
            <span className="text-[#546BA6]">financeira</span>{" "}
            <span className="inline md:hidden">:)</span>
          </Text>
          <div className="max-w-md">
            <Text type="text-type-sm">
              Receba uma análise completa e um planejamento para{" "}
              <strong>atingir suas metas</strong> a curto, médio e longo prazo.
              Aproveite nosso desconto exclusivo para novos clientes!
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Button type={"button-type-primary"}>Quero saber mais</Button>
          <Button type={"button-type-secondary"}>Já tenho cadastro</Button>
        </div>
      </div>
      <div className="relative">
        <img src={moca} alt=""  className=""/>
      </div>
    </div>
  );
};

export default Hero;
