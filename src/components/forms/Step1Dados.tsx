export default function Step1Dados() {
    return (
        <div className="flex flex-col gap-4 mt-6">
           <div className="flex flex-col">
          <label htmlFor="nomeDaPadaria">Nome da padaria</label>
          <input
            id="nomeDaPadaria"
            name="nomeDaPadaria"
            type="text"
            className="w-80 h-10 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
         <div className="flex flex-col">
          <label htmlFor="telefone">Telefone/Whatsapp</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className="w-80 h-10 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
         <div className="flex flex-col">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            className="w-80 h-10 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-80 h-10 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-80 h-10 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="w-80 h-10 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
      </div>
    );
}