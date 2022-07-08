import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {
  const router = useRouter()
  return (
    <div className="pt-10">
      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='flex flex-col gap-y-4 xl:flex-row xl:justify-between items-center'>
          <div className='xl:w-3/12'>
            <button>
              <Link href="/">
                <img className='max-h-[123.19px]' src='/logo-economia-circular.png' alt='logo economia circular' />
              </Link>
            </button>
          </div>
          <nav className='xl:w-8/12'>
            <ul className='grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:flex-row lg:justify-between'>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight ${router.pathname === '/sobre-economia' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/sobre-economia">
                  Sobre Economía Circular
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight ${router.pathname === '/mesa-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/mesa-de-informacion">
                  Mesa de Información de Economía Circular
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight ${router.pathname === '/sistema-de-consulta-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/sistema-de-consulta-de-informacion">
                  Sistema de Consulta de Información - SIEC
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black lg:w-1/4 leading-tight ${router.pathname === '/reportes-de-economia-circular' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/reportes-de-economia-circular">
                  Reportes de Economía Circular
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
