import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar () {
  const router = useRouter()
  return (
    <div className="py-10">
      <div className='mx-auto w-10/12 max-w-screen-xl'>
        <div className='flex flex-col xl:flex-row items-center xl:justify-between gap-[21.25px]'>
          <div className='max-w-[490.23px] w-full'>
            <a href="/">
              <img className='max-h-[123.19px] h-full' src='/logo-economia-circular.png' alt='logo economia circular' />
            </a>
          </div>
          <nav className='2xl:max-w-[813px] w-full'>
            <ul className='grid grid-cols-2 gap-[14px] md:grid-cols-4'>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full ${router.pathname === '/sobre-economia' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/sobre-economia">
                  Sobre Economía Circular
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full ${router.pathname === '/mesa-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/mesa-de-informacion">
                  Mesa de Información de Economía Circular
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full ${router.pathname === '/sistema-de-consulta-de-informacion' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
                <Link href="/sistema-de-consulta-de-informacion">
                  Sistema de Consulta de Información - SIEC
                </Link>
              </li>
              <li className={`inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full ${router.pathname === '/reportes-de-economia-circular' && 'bg-blue-ocean bg-opacity-[0.1] text-blue-ocean font-bold'}`}>
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
