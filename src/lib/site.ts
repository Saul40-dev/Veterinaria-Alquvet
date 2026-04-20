export const SITE = {
  name: "Clínica Veterinaria ALQUVET",
  shortName: "ALQUVET",
  location: "Carabayllo",
  tagline: "Cuidamos a quienes más amas.",
  phone: "(01) 681 2395",
  phoneTel: "+5116812395",
  whatsappNumber: "+51 918 819 129",
  whatsappRaw: "51918819129",
  whatsappMessage:
    "Hola ALQUVET, me gustaría agendar una cita para mi mascota. ¿Me podrían ayudar?",
  address: "Av. Mariano Condorcanqui, Mz. O, Lote 41, Carabayllo 15318, Lima, Perú",
  hours: [
    { days: "Lunes a Sábado", time: "9:00 AM – 8:00 PM" },
    { days: "Domingos y feriados", time: "9:00 AM – 1:45 PM" },
  ],
  social: {
    instagram: {
      handle: "@alquvet_carabayllo",
      url: "https://www.instagram.com/alquvet_carabayllo/",
    },
    facebook: {
      handle: "Clínica Veterinaria Alquvet | Carabayllo",
      url: "https://www.facebook.com/p/Cl%C3%ADnica-Veterinaria-Alquvet-100088104228815/",
    },
  },
};

export const whatsappUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappRaw}?text=${text}`;
};
