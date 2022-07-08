import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {
  const router = useRouter()
  return (
    <div className="pt-10">
      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='flex flex-col gap-y-4 xl:flex-row xl:justify-between items-center gap-x-12'>
          <div className='max-w-full w-96 lg:w-80'>
            <button>
              <Link href="/">
                <img src='/logo-economia-circular.png' alt='logo economia circular' />
              </Link>
            </button>
          </div>
          <nav className='lg:w-full xl:w-4/5 2xl:w-3/5'>
            <ul className='grid grid-cols-2 gap-2 lg:gap-x-2 lg:flex lg:flex-row lg:justify-between text-[15px]'>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/sobre-economia' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/sobre-economia">
                  <span>
                    Sobre Economía <br /> Circular
                  </span>
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/mesa-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/mesa-de-informacion">
                  <span>
                    Mesa de Información <br /> de Economía Circular
                  </span>
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/sistema-de-consulta-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/sistema-de-consulta-de-informacion">
                  <div>
                    Sistema de Consulta de <br /> Información - SIEC
                  </div>
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/reportes-de-economia-circular' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/reportes-de-economia-circular">
                  <div>
                    Reportes de <br /> Economía Circular
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
