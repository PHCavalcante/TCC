export default function Step2Endereco() {
    return (
        <div className="flex flex-col gap-4 mt-6">
            <div className="flex gap-4">
            <div className="flex flex-col">
                <label htmlFor="cep">CEP</label>
                <input
                    id="cep"
                    name="cep"
                    type="text"
                    className="w-22 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="rua">Rua</label>
                <input
                    id="rua"
                    name="rua"
                    type="text"
                    className="h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                />
            </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="complemento">Complemento</label>
                <input
                    id="complemento"
                    name="complemento"
                    type="text"
                    className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                />
            </div>
             <div className="flex flex-col">
                <label htmlFor="numero">Número</label>
                <input
                    id="numero"
                    name="numero"
                    type="text"
                    className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                />
            </div>
        </div>
    );
}