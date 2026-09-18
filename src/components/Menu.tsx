import { palette } from "../theme";
import Logo from "../assets/logo.png";
import { Link } from "@tanstack/react-router";
import dashboardLogo from "../assets/dashboard.svg"
import ordersLogo from "../assets/orders.svg";
import exit from "../assets/exit.svg";
import { useLocation } from "@tanstack/react-router";
import manager from "../assets/manager.svg";
import catalog from "../assets/catalog.svg";

function logOut() {
    if (confirm("Você tem certeza que deseja sair?")) {
        // implementar a lógica de logout
    }
}

export default function Menu() {
    const location = useLocation();
    return (
        <div style={{
            backgroundColor: palette.light.accent
        }}
        className="flex min-w-76.5 h-screen flex-col items-center shadow-[4px_0px_4px_0px_#00000055]"
        >
        <img src={Logo} alt="Logo" className="mt-4" />
        <span className="text-xl text-white">{"Placeholder"}</span>
        <div className="mt-20">
            <div style={{ backgroundColor: location.pathname === "/bakery/dashboard" ? palette.light.primary : "transparent" }} className="flex w-61.5 items-center gap-3.5 text-white text-[20px] font-bold px-4 py-2 rounded-lg mb-4">
                <img src={dashboardLogo} alt="Dashboard"/>
                <Link to={"/bakery/dashboard"} viewTransition>Dashboard</Link>
            </div>
            <div style={{ backgroundColor: location.pathname === "/bakery/orders" ? palette.light.primary : "transparent" }} className="flex items-center gap-3.5 text-white text-[20px] font-bold px-4 py-2 rounded-lg mb-4">
                <img src={ordersLogo} alt="Pedidos"/>
                <Link to={"/bakery/orders"} viewTransition>Pedidos</Link>
            </div>
              <div style={{ backgroundColor: location.pathname === "/bakery/management" ? palette.light.primary : "transparent" }} className="flex items-center gap-3.5 text-white text-[20px] font-bold px-4 py-2 rounded-lg mb-4">
                <img src={manager} alt="Gerência"/>
                <Link to={"/bakery/management"} viewTransition>Gerência</Link>
            </div>
              <div style={{ backgroundColor: location.pathname === "/bakery/catalog" ? palette.light.primary : "transparent" }} className="flex items-center gap-3.5 text-white text-[20px] font-bold px-4 py-2 rounded-lg mb-4">
                <img src={catalog} alt="Catálogo"/>
                <Link to={"/bakery/catalog"} viewTransition>Catálogo</Link>
            </div>
        </div>
        <button onClick={logOut} className="mt-auto mb-4 cursor-pointer flex items-center gap-3.5 text-white text-[20px] font-bold px-4 py-2 rounded-lg">
            <img src={exit} alt="botão sair" />    
            Sair
        </button>
        </div>
    );
}