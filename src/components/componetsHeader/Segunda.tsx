import Image from "next/image";

export default function Segunda() {
  return (
    <div className="fixed top-12 w-full border border-b-black/20 bg-white text-white py-3">
      <div className="flex items-center justify-end gap-3 p-2.5 h-1 max-w-7xl  mx-auto">
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/693/PNG/512/Pinterest_Rounded_Solid_icon-icons.com_61557.png"
          alt="Pinterest"
          className="max-h-6 w-auto"
        />
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png"
          alt="Twitter"
          className="max-h-6 w-auto"
        />
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/693/PNG/512/Facebook_Rounded_Solid_icon-icons.com_61562.png"
          alt="Facebook"
          className="max-h-6 w-auto"
        />
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/791/PNG/512/YOUTUBE_icon-icons.com_65487.png"
          alt="YouTube"
          className="max-h-6 w-auto"
        />
        <Image
          width={32}
          height={32}
          src="https://images.icon-icons.com/791/PNG/512/instagram_f_icon-icons.com_65485.png"
          alt="Instagram"
          className="max-h-6 w-auto"
        />
      </div>
    </div>
  );
}

