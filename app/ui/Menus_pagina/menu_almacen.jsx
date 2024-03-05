const tabs = [
    { name: 'Inventario', href: 'http://localhost:3000/Almacen', current: true },
    { name: 'Modificar inventario', href: '#', current: false },
    { name: 'Ultimos ingresos de productos', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className=" rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className=" isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
            {tabs.map((tab, tabIdx) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                  tabIdx === 0 ? 'rounded-l-lg' : '',
                  tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                  'group relative flex w-30 mr-5 ml-5 items-center overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-slate-300 focus:z-10'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5'
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    )
  }
  