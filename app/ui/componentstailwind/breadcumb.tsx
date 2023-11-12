import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Gestor', href: '/', current: false },
]

export default function Breadcumb({name} : {name:string}) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-blue-700 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-text-blue-700" aria-hidden="true" />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-text-blue-700 hover:text-blue-500"
                aria-current={page.current ? 'page' : undefined}
              >
                {name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
