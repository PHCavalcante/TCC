import Menu from "../../components/Menu";
import { palette } from "../../theme";
import add from "../../assets/add.svg";

export default function Catalog() {
    return (
        <div className="flex">
            <Menu />
            <div className="flex w-full flex-col ml-14.75 mr-14.75">
                <div className="flex mt-11.25 mb-24 items-center justify-between">
                    <h1 className="font-bold text-3xl" style={{ color: palette.light.accent }}>Catálogo</h1>
                    <button className="flex gap-2.5 items-center text-white font-bold py-2 px-4 rounded-lg cursor-pointer" style={{ backgroundColor: palette.light.accent}}>
                        <img src={add} alt="Adicionar Item" />
                        Adicionar Item
                    </button>
                </div>
            </div>
        </div>
    );
}