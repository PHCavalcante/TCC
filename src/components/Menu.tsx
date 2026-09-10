import { palette } from "../theme";
import Logo from "../assets/logo.png";
import { Link } from "@tanstack/react-router";

export default function Menu() {
    return (
        <div style={{
            backgroundColor: palette.light.accent
        }}
        className="flex w-76.5 h-screen flex-col items-center"
        >
        <img src={Logo} alt="Logo" />
        <span className="text-xl text-white">{"Placeholder"}</span>
        <div>
            <div>
                <img src="" alt="Dashboard"/>
                Dashboard
            </div>
            <div>
                <Link>Pedidos</Link>
            </div>
        </div>
        <button className="mt-auto mb-4 cursor-pointer">Sair</button>
        </div>
    );
}