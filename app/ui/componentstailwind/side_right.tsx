const incentives = [
    {
      name: 'Sistema de reservas',
      description: "Sistema de reservas,  ",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: 'Atención al cliente 24/7',
      description: 'Whatsapp para nuevas funcionalidades',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'Gestiona tus procesos',
      description: "Recepción, organización de eventos, gestión de alimentos y bebidas, tours, carros entre otros",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
      name: 'Ofertas',
      description: "Prueba gratis la app por un mes",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
  ]
  
  export default function Sideright() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div key={incentive.name}>
                <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  