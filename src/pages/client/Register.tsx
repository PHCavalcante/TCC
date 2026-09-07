import logo from "../../assets/logo.png";
import { palette } from "../../theme";
import Separator from "../../components/Separator";

export default function Login() {
  return (
    <div className="flex flex-col h-full items-center px-9.5">
      <div className="flex flex-col mt-9.5 items-center">
        <img src={logo} alt="Logo" className="select-none" draggable={false} />
        <span className="text-xl" style={{ color: palette.light.accent }}>
          {"Placeholder"}
        </span>
      </div>
      <h1 className="text-2xl font-bold mt-10">Crie sua conta</h1>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
      </div>
      <button
        className="w-80 h-12 text-white rounded-lg mt-6 hover:bg-blue-600 transition-colors"
        style={{ backgroundColor: palette.light.accent }}
      >
        Criar Conta
      </button>
      <Separator />
      <div className="mt-4 text-sm">
        <span className="text-gray-600">Já possui conta? </span>
        <a href="/client/login" className="font-semibold">
          Faça login
        </a>
      </div>
    </div>
  );
}
