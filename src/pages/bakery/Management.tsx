import Menu from "../../components/Menu";
import { palette } from "../../theme";

export default function Management() {
    return (
        <div className="flex">
            <Menu />
            <div className="flex flex-col ml-14.75">
                <h1 className="font-bold text-3xl mt-11.25 mb-24" style={{ color: palette.light.accent }}>Gerência</h1>
            </div>
        </div>
    );
}