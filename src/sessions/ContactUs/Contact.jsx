import React from "react";
import contact from "../../assets/organizze/contact.png";
import Button from "../../components/Button";
import Text from "../../components/Text";

const Contact = () => {
  return (
    <div className="py-8 px-6 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-10">
        <Text type="text-type-2xl">
          Simplifique suas finanças e atinja suas metas
        </Text>
        <img src={contact} alt="" />
      </div>

      <div className="p-12 bg-[#A4AEC8] rounded-[10px] space-y-16">
        <div className="space-y-4">
          <Text type="text-type-md">Preencha seus dados</Text>
          <Text type="text-type-sm">
            E receba gratuitamente todas as informações por e-mail.
          </Text>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            className="py-4 px-6 bg-[#D6D6D6] rounded-[10px] w-full"
            placeholder="Como você quer ser chamado?"
          />
          <input
            type="text"
            className="py-4 px-6 bg-[#D6D6D6] rounded-[10px] w-full"
            placeholder="Qual seu endereço de e-mail?"
          />
          <input
            type="text"
            className="py-4 px-6 bg-[#D6D6D6] rounded-[10px] w-full"
            placeholder="Agora, é só escolher sua senha :)"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Button type={"button-type-primary"}>Quero saber mais</Button>
          <Button type={"button-type-secondary"}>Já tenho cadastro</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
