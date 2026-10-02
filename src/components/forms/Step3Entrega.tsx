export default function Step3Entrega() {
    return (
        <div className="flex flex-col gap-4 mt-6">
            <div className="flex gap-4 items-center">
                <div className="flex flex-col">
                    <label htmlFor="abreAs">Abre as</label>
                    <input
                        id="abreAs"
                        name="abreAs"
                        type="text"
                        className="w-22 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="fechaAs">Fecha as</label>
                    <input
                        id="fechaAs"
                        name="fechaAs"
                        type="text"
                        className="w-22 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col">
                    <label htmlFor="raioEntrega">Raio entrega (Km)</label>
                    <input
                        id="raioEntrega"
                        name="raioEntrega"
                        type="text"
                        className="w-22 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="tempoEntrega">Tempo de entrega (min)</label>
                    <input
                        id="tempoEntrega"
                        name="tempoEntrega"
                        type="text"
                        className="w-20 h-12 rounded-lg border border-black px-4 focus:outline-none focus:ring-2"
                    />
                </div>
            </div>
        </div>
    );
}