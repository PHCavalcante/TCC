export default function Step5Finalizacao() {
    return (
        <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col">
                <label htmlFor="logoDaPadaria">Logo da padaria</label>
                <input
                    id="logoDaPadaria"
                    name="logoDaPadaria"
                    type="file"
                    className="w-80 h-12 rounded-lg bg-black text-white px-4 py-2"
                    title="Selecione o arquivo de logo da padaria"
                    accept="image/*"
                    placeholder="Selecione o logo da padaria"
                    required

                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="bannerDaPadaria">Banner da padaria</label>
                <input
                    id="bannerDaPadaria"
                    name="bannerDaPadaria"
                    type="file"
                    className="w-80 h-12 rounded-lg bg-black text-white px-4 py-2"
                    title="Selecione o arquivo de banner da padaria"
                    accept="image/*"
                    placeholder="Selecione o banner da padaria"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="descricao">Descrição</label>
                <input
                    id="descricao"
                    name="descricao"
                    type="text"
                    className="w-80 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                />
            </div>
        </div>
    );
}