import logo from "../../assets/logo.png";
import { palette } from "../../theme";
import { Link } from "@tanstack/react-router";
import Step1Dados from "../../components/forms/Step1Dados";
import { useState } from "react";
import Step2Endereco from "../../components/forms/Step2Endereco";
import Step3Entrega from "../../components/forms/Step3Entrega";
import Step4Configuracoes from "../../components/forms/Step4Configuracoes.";
import Step5Finalizacao from "../../components/forms/Step5Finalizacao";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(Step1Dados);

   const steps = [
    <Step1Dados form={form} setForm={setForm} />,
    <Step2Endereco form={form} setForm={setForm} />,
    <Step3Entrega form={form} setForm={setForm} />,
    <Step4Configuracoes form={form} setForm={setForm} />,
    <Step5Finalizacao form={form} setForm={setForm} />,
  ];

  return (
    <div className="flex flex-col h-full items-center px-9.5">
      <div className="flex flex-col mt-9.5 items-center">
        <img src={logo} alt="Logo" className="select-none" draggable={false} />
        <span className="text-xl" style={{ color: palette.light.accent }}>
          {"Placeholder"}
        </span>
      </div>
      <h1 className="text-2xl font-bold mt-10">Registre sua padaria</h1>
       <div className="flex items-center justify-center mt-6">
        {steps.map((_, index) => (
          <div className="flex items-center" key={index}>
            <div
              className={`flex w-7 h-7 border rounded-full items-center content-center justify-center ${
                index <= currentStep ? "bg-black text-white" : ""
              }`}
            >
              {index + 1}
            </div>

            {index < steps.length - 1 && (
              <div
                className={`w-8 h-px bg-black ${
                  index < currentStep ? "active" : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
      {steps[currentStep]}
      <button
        className="w-80 h-10 text-white rounded-lg mt-6 hover:bg-blue-600 transition-colors"
        style={{ backgroundColor: palette.light.accent }}
        onClick={() => currentStep === steps.length - 1 ? null : setCurrentStep(s => s + 1)}
      >
        {currentStep === steps.length - 1 ? "Finalizar" : "Próximo"}
      </button>
      <div className="mt-4 text-sm py-10">
        <span className="text-gray-600">Já possui conta? </span>
        <Link to={"/bakery/login"} viewTransition>Faça Login</Link>
      </div>
    </div>
  );
}
