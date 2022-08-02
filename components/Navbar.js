
import { useRouter } from 'next/router'
import CustomLink from './CustomLink'

export default function Navbar () {
  const router = useRouter()
  return (
    <div className="pt-10">
      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='flex flex-col gap-y-4 xl:flex-row xl:justify-between items-center gap-x-12'>
          <div className='max-w-full w-96 lg:w-80'>
            <button>
              <CustomLink href="/">
                <img src='/images/logo-economia-circular.png' alt='logo economia circular' />
              </CustomLink>
            </button>
          </div>
          <nav className='lg:w-full xl:w-4/5 2xl:w-3/5'>
            <ul className='grid grid-cols-2 gap-2 lg:gap-x-2 lg:flex lg:flex-row lg:justify-between text-[15px]'>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/sobre-economia' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <CustomLink href="/sobre-economia">
                  <a>
                    Sobre Economía <br /> Circular
                  </a>
                </CustomLink>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/mesa-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <CustomLink href="/mesa-de-informacion">
                  <a>
                    Mesa de Información <br /> de Economía Circular
                  </a>
                </CustomLink>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/sistema-de-consulta-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <CustomLink href="/sistema-de-consulta-de-informacion">
                  <a>
                    Sistema de Consulta de <br /> Información - SIEC
                  </a>
                </CustomLink>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] lg:w-1/4 leading-tight cursor-pointer ${router.pathname === '/reportes-de-economia-circular' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <CustomLink href="/reportes-de-economia-circular">
                  <a>
                    Reportes de <br /> Economía Circular
                  </a>
                </CustomLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
