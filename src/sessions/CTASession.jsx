import React from "react";
import ctasession from "../assets/organizze/ctasession.png";
import Button from "../components/Button";
import Text from "../components/Text";

const CTASession = () => {
  return (
    <div className="py-8 px-6 md:p-16 grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-[40px]">
        <div className="space-y-[16px]">
          <Text type="text-type-3xl">
            É possível dobrar sua receita em{" "}
            <span className="text-[#546BA6]">poucos</span> meses!
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
        </div>
      </div>

      <div className="m-auto">
        <img src={ctasession} alt="" />
      </div>
    </div>
  );
};

export default CTASession;
