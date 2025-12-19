import Image from "next/image";

export default function Primeira() {
  return (
    
    <div className="fixed top-0 left-0 w-full bg-black text-white flex justify-center py-2 ">
      <div className="itens-end">
      <div className="flex items-center gap-2">
        {/* Ícone esquerdo */}
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/3322/PNG/512/party_celebration_confetti_emoticon_emoji_icon_209641.png"
          alt="Ícone esquerdo"
        />

        {/* Texto */}
        <h1 className="text-4xl md:text-base text-amber-300 font-ariel-label whitespace-nowrap">
          Desbloquei as ofertas da Black Fralde
        </h1>

        {/* Ícone direito */}
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/3322/PNG/512/party_celebration_confetti_emoticon_emoji_icon_209641.png"
          alt="Ícone direito"
        />
      </div>
      </div>
    </div>
  );
}
