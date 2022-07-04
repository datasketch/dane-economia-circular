function Navbar () {
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
              <li>
                <a className="inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full" href="/sobre-economia">
                  Sobre Economía Circular
                </a>
              </li>
              <li>
                <a className="inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full" href="#">
                  Mesa de Información de Economía Circular
                </a>
              </li>
              <li>
                <a className="inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full" href="#">
                  Sistema de Consulta de Información - SIEC
                </a>
              </li>
              <li>
                <a className="inline-block pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full" href="#">
                  Reportes de Economía Circular
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
