import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const opciones = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Experiencias', href: '/experencia', current: false },
  { name: 'Preguntas', href: '/pregunta', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-400 shadow-lg fixed top-0 left-0 right-0 z-50">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton
                  className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
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
                  {opciones.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-neutral-800 text-white' : 'text-gray-200 hover:bg-neutral-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      onClick={() => close()} // Cierra el menú cuando se hace clic
                    >
                      {item.name}
                    </Link>
                  ))}
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
              </div>
            </div>
          </div>

          {/* Menú hamburguesa para la versión móvil */}
          <DisclosurePanel className={`${open ? 'block' : 'hidden'} sm:hidden`}>
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {opciones.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-neutral-800 text-white' : 'text-gray-200 hover:bg-neutral-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  onClick={() => close()} // Cierra el menú cuando se hace clic
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
