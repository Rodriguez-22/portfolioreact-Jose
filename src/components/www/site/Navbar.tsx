import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const opciones = [
  { name: 'Inicio', href: '/', current: true, download: false },
  { name: 'Experiencias', href: '/experencia', current: false, download: false },
  { name: 'Preguntas', href: '/pregunta', current: false, download: false },
  { name: 'Contacto', href: '/contacto', current: false, download: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <>
      {/* Barra de Navegación Fija */}
      <Disclosure as="nav" className="bg-blue-400 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=gray&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                {opciones.map((item) =>
                  item.download ? (
                    <a
                      key={item.name}
                      href={item.href}
                      download
                      className="text-gray-200 hover:bg-neutral-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-neutral-800 text-white' : 'text-gray-200 hover:bg-neutral-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-neutral-900 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="flex rounded-full bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/img/jose.jpg"
                      alt=""
                    />
                  </MenuButton>
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Espacio reservado para la barra fija */}
      <div className="pt-20"></div> {/* Ajusta este valor si la barra tiene mayor altura */}

      {/* Contenido Principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Bienvenido a mi Portafolio Profesional</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soy un desarrollador de software con experiencia en diversas tecnologías web y móviles. En este portafolio podrás explorar mis proyectos, habilidades y experiencias previas, donde mi enfoque siempre ha sido ofrecer soluciones innovadoras y de alto rendimiento.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Mi pasión por la tecnología y la constante búsqueda de mejora me han permitido desarrollar una sólida base en programación, bases de datos y frameworks modernos.
          </p>
        </div>
      </div>
    </>
  );
}
