import location from "../../assets/location.svg";
import { useEffect, useState } from 'react';
import { useLocalizacao } from "../../utils/GetLocation";
import { palette } from "../../theme";
import background from "../../assets/background.png";

export default function Home() {
  const { coordenadas, enderecoCompleto, rua, erro, carregando, pegarLocalizacao, buscarCep } = useLocalizacao();
  const [cep, setCep] = useState("");
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      setPermissionDenied(permissionStatus.state === 'denied');
    };
    checkPermission();
    pegarLocalizacao();
  }, []);

  if (carregando) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <p>Obtendo localização...</p>
      </div>
    );
  }
  console.log("Permission Denied:", permissionDenied);
  if (permissionDenied) {
    return (
      <div className="h-full w-full relative">
        <img src={background} className="h-full w-full absolute z-0" alt="Background" />
        <div className="flex flex-col h-full items-center justify-center z-10 relative">
          <h1 className="font-bold mt-10.75">BEM VINDO</h1>
          <div className="h-full flex flex-col items-center">
            <img className="mt-32" src={location} width={56} height={79} alt="Ícone Localização" />
            <div className="bg-white rounded-2xl p-4 mt-32 shadow-md text-center">
              <h2 className="font-bold">Por favor, habilite o acesso a localização</h2>
              <p>O acesso a localização é importante para descobrir padarias próximas a você</p>
            </div>
            <button onClick={() => pegarLocalizacao()} className="mt-auto mb-8 rounded-lg py-2 px-4 text-white cursor-pointer" style={{ backgroundColor: palette.light.accent }}>Permitir</button>
          </div>
        </div>
      </div>
    );
  }

  if (erro && !enderecoCompleto) {
    return (
      <div className="flex flex-col h-full items-center justify-center px-6 gap-4">
        <p className="text-center">{erro}</p>
        <form
          className="flex flex-col gap-3 w-full max-w-xs"
          onSubmit={(e) => {
            e.preventDefault();
            buscarCep(cep);
          }}
        >
          <input
            type="text"
            inputMode="numeric"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
            className="border rounded-lg px-4 py-2 text-center outline-none"
          />
          <button
            type="submit"
            className="text-white rounded-lg px-4 py-2"
            style={{ backgroundColor: palette.light.accent }}
          >
            Buscar endereço
          </button>
        </form>
      </div>
    );
  }

  if (!coordenadas && !enderecoCompleto) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <p>Localização não disponível.</p>
      </div>
    );
  }

  if (coordenadas) {
    console.log(`Latitude: ${coordenadas.lat}, Longitude: ${coordenadas.lng}`);
  }

  return (
  <div className="flex flex-col h-full">
    <div className="flex items-center text-center pt-10 self-center gap-1.5 px-4">
      <img src={location} alt="Localização" className="w-5 h-5 shrink-0" />
      <p className="wrap-break-word">{rua ?? "Localização não disponível"}</p>
    </div>

    {/* <div className="flex flex-col mx-5 my-auto gap-8 overflow-y-auto">
      <h1 className="text-lg font-bold">Padarias Próximas</h1>
      <div className="flex flex-col gap-6">
        <BakeryCard />
        <BakeryCard />
        <BakeryCard />
      </div>
    </div> */}
  </div>
  );
}
