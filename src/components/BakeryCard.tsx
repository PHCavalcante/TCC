import heart from "../assets/heart.svg";

type BakeryCardProps = {
    name?: string;
    address?: string;
    distance?: string;
    rating?: number;
};

export default function BakeryCard({ name, address, distance, rating }: BakeryCardProps){
    return (
        <div className="flex gap-6.25 items-center">
            <button className="flex gap-4 items-center text-left">
                <img src="https://placecats.com/300/200" alt="Imagem da Padaria" className="w-24 h-24 object-cover select-none rounded-lg" draggable={false} />
                <div>
                    <h2>{"Padaria Exemplo"}</h2>
                    <span className="text-sm text-gray-600">Avenidade Placeholder - <span className="font-bold">{"1.5 km"}</span></span>
                    {/* e as estrelas*/}
                </div>
            </button>
            <button>
                <img src={heart} alt="Favorito" className="w-5 h-5 select-none" draggable={false} />
            </button>
        </div>
    );
}