import Menu from "../../components/Menu";
import { palette } from "../../theme";
import add from "../../assets/add.svg";

export default function Catalog() {
    const items = []; // placeholder
    return (
        <div className="flex">
            <Menu />
            <div className="flex w-full flex-col ml-14.75 mr-14.75">
                <div className="flex mt-11.25 mb-24 items-center justify-between">
                    <h1 className="font-bold text-3xl" style={{ color: palette.light.accent }}>Catálogo</h1>
                    {items.length > 0 && <button className="flex gap-2.5 items-center text-white font-bold py-2 px-4 rounded-lg cursor-pointer shadow-md" style={{ backgroundColor: palette.light.accent }}>
                        <img src={add} alt="Adicionar Item" />
                        Adicionar Item
                    </button>}
                </div>
                {items.length === 0 && <div className="flex flex-col items-center gap-2.5">
                    <p className="text-center text-xl font-bold mt-50">Nenhum item no catálogo.</p>
                    <p className="text-center text-lg">O estabelecimento ficará indisponível até que itens sejam adicionados.</p>
                    <button className="flex gap-2.5 items-center text-white font-bold py-2 px-4 rounded-lg cursor-pointer shadow-md" style={{ backgroundColor: palette.light.accent }}>
                        <img src={add} alt="Adicionar Item" />
                        Adicionar Item
                    </button>
                </div>}
            </div>
        </div>
    );
}