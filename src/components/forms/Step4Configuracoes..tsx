export default function Step4Configuracoes() {
    return (
         <div className="flex flex-col gap-4 mt-6">
           <div className="flex flex-col">
          <label htmlFor="chavePix">Chave PIX</label>
          <input
            id="chavePix"
            name="chavePix"
            type="text"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
         {/* <div className="flex flex-col">
          <label htmlFor="telefone">Telefone/Whatsapp</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
         <div className="flex flex-col">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
          />
        </div> */}
      </div>
    );
}