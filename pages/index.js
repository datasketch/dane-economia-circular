import Head from 'next/head'
import CustomLink from '../components/CustomLink'

export default function Home () {
  return (
    <>
      <Head>
        <title>Economía Circular | DANE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='pt-10'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-8'>
            <div className='lg:w-6/12'>
              <div className='bg-banner-siec bg-cover bg-center h-[256px] overflow-hidden rounded-tr-[80px]'>
                <div className='grid place-items-center h-full px-[44px] py-[65px]'>
                  <p className='max-w-[435px] text-white'>
                    Encuentre información estadística relacionada con la medición de la Economía Circular en Colombia, el Sistema de Información de Economía Circular – SIEC y los indicadores que se encuentran en los reportes semestrales.
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-5/12'>
              <div className='max-w-[411px]'>
                <div className='space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-[38px]'>
                  <h2 className='font-bold text-2xl 2xl:text-[32px] text-blue-ocean'>
                    Sistema de Consulta de Información de Economía Circular - SIEC
                  </h2>
                  <p>
                    Encuentre información estadística relacionada con la medición de la Economía Circular en Colombia.
                  </p>
                  <CustomLink href="/sistema-de-consulta-de-informacion">
                    <a className='inline-flex items-center gap-x-[21.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 duration-300 group'>
                      <span>
                        Consultar
                      </span>
                      <img className='group-hover:scale-150 duration-300' src='/images/link-arrow-icon.svg' alt='link arrow icon' />
                    </a>
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 3xl:pt-[107px] 3xl:pb-[82.5px]'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='text-center'>
            <h2 className='text-2xl 2xl:text-[32px] text-blue-ocean'>
              <span className='font-bold'>Datos </span>de interés
            </h2>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8 mt-8 lg:mt-10 2xl:mt-[48px] gap-x-12 xl:gap-x-20'>
            <div className='lg:w-6/12 order-2 lg:order-1'>
              <div>
                <iframe className='aspect-square' src="/charts/disponibilidad_reservas.html" width="100%"></iframe>
              </div>
            </div>
            <div className='lg:w-6/12 order-1 lg:order-2'>
              <div className=''>
                <div className='space-y-6 2xl:space-y-[34px]'>
                  <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                    Disponibilidad de reservas mineras
                  </h3>
                  <div>
                    <h4 className='2xl:text-lg'>
                      Total nacional
                    </h4>
                    <p>
                      2005-2020<sup>p</sup>
                    </p>
                  </div>
                  <p>
                    Este indicador relaciona la extracción y las reservas mineras probadas de cada recurso, lo cual permite conocer la disponibilidad del activo en un horizonte de tiempo.
                  </p>
                  <p>
                    Disponibilidad de reservas mineras para 2020<sup>p</sup>:
                  </p>
                  <div className='flex justify-between max-w-[473px]'>
                    <div className='max-w-[100px] w-full'>
                      <div className='text-center font-bold space-y-2'>
                        <h4 className='2xl:text-lg'>
                          Carbón
                        </h4>
                        <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                        <p className='text-3xl 2xl:text-[40px] pt-2'>
                          114
                        </p>
                      </div>
                    </div>
                    <div className='max-w-[100px] w-full'>
                      <div className='text-center font-bold space-y-2'>
                        <h4 className='2xl:text-lg'>
                          Gas natural
                        </h4>
                        <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                        <p className='text-3xl 2xl:text-[40px] pt-2'>
                          7
                        </p>
                      </div>
                    </div>
                    <div className='max-w-[100px] w-full'>
                      <div className='text-center font-bold space-y-2'>
                        <h4 className='2xl:text-lg'>
                          Petróleo
                        </h4>
                        <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                        <p className='text-3xl 2xl:text-[40px] pt-2'>
                          6
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='text-grey-dark italic'>
                    <p>
                      <span className='font-bold'>Fecha:</span> 27 de julio de 2021
                    </p>
                    <p>
                      <span className='font-bold'>Fuente:</span> Cuenta Ambiental y Económica de Activos de los Recursos Minerales y Energéticos (CAE-ARME)
                    </p>
                    <p>
                      <span className='font-bold'>P:</span> Provisional
                    </p>
                  </div>
                  <CustomLink href="/sistema-de-consulta-de-informacion#app">
                    <a className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 duration-300 group'>
                      <span>
                        Explorar datos
                      </span>
                      <img className='group-hover:scale-150 duration-300' src='/images/link-arrow-icon.svg' alt='link arrow icon' />
                    </a>
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='bg-blue-4 relative overflow-hidden rounded-tr-[80px] pt-[36.18px] pb-[25.46px] lg:pt-[89.5px] lg:pb-[29.5px] text-white space-y-8 2xl:space-y-0'>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-y-8 lg:gap-y-0 text-center lg:text-left relative z-10'>
            <div className='lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 order-2 lg:order-1'>
              <div className='mt-[154.64px] lg:mt-0 max-w-[267px] mx-auto lg:mx-0'>
                <div>
                  <p className='2xl:text-lg'>
                    Residuos sólidos utilizados en reciclaje y nueva utilización
                  </p>
                  <p className='font-bold text-xl 2xl:text-2xl'>
                    3.127.844
                  </p>
                  <p className='text-sm'>
                    Toneladas
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:mt-0 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 order-1 lg:order-2'>
              <div className='max-w-[211px] mx-auto lg:ml-auto lg:mr-0'>
                <div className='lg:text-right space-y-3 2xl:space-y-[22.5px]'>
                  <h4 className='text-xl 2xl:text-2xl font-bold'>
                    Tasa de reciclaje y nueva utilización en 2019<sup>p</sup>
                  </h4>
                  <div className='bg-white h-0.5'>&nbsp;</div>
                  <p className='text-[32px] 2xl:text-[40px]'>
                    11.8%
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 order-3'>
              <div className='max-w-[267px] mx-auto lg:mx-0'>
                <div>
                  <p className='2xl:text-lg'>
                    Oferta de residuos sólidos y productos residuales
                  </p>
                  <p className='font-bold text-xl 2xl:text-2xl'>
                    26.456.711
                  </p>
                  <p className='text-sm'>
                    Toneladas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-11/12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0'>
              <div className='italic'>
                <p>
                  <span className='font-bold'>Fecha:</span> 6 de agosto de 2021
                </p>
                <p>
                  <span className='font-bold'>Fuente:</span> Cuenta ambiental y económica de flujos de materiales - Residuos sólidos (CAEFM-RS)
                </p>
                <p>
                  <span className='font-bold'>P:</span> Provisional
                </p>
              </div>
              <CustomLink href="/sistema-de-consulta-de-informacion#app">
                <a className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-white text-pink border-pink border font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink hover:text-white duration-300 group'>
                  <span>
                    Explorar datos
                  </span>
                  <img className='group-hover:scale-150 group-hover:brightness-0 group-hover:invert-[1] duration-300' src='/images/link-arrow-icon-pink.svg' alt='link arrow icon' />
                </a>
              </CustomLink>
            </div>
          </div>
          <div className='absolute top-1/3 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src='/images/reciclaje-icon.svg' alt='reciclaje icon' />
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 2xl:pt-[107px] 2xl:pb-[82.5px]'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8 mt-8 lg:mt-10 2xl:mt-[48px] gap-x-12 xl:gap-x-20'>
            <div className='lg:w-6/12'>
              <div className=''>
                <div className='space-y-6 2xl:space-y-[34px]'>
                  <div className='space-y-2'>
                    <h3 className='font-bold text-xl 3xl:text-2xl text-blue-dark'>
                      Desacoplamiento en la generación de emisiones
                    </h3>
                    <div>
                      <p>
                        Total nacional.
                      </p>
                      <p>
                        Índices en base 100 = 2005
                      </p>
                      <p>
                        2005-2019<sup>p</sup>
                      </p>
                    </div>
                  </div>
                  <p>
                    Durante 2019<sup>p</sup>, en el punto representado por la flecha, se observa la mayor divergencia entre la generación de emisiones y el valor agregado, que puede interpretarse como el nivel más alto de productivo.
                  </p>
                  <div className='text-grey-dark italic'>
                    <p>
                      <span className='font-bold'>Fecha:</span> 1 de diciembre de 2021
                    </p>
                    <p>
                      <span className='font-bold'>Fuente:</span> Cuenta ambiental y económica de flujos de materiales - Emisiones al aire (CAEFM - EA)
                    </p>
                    <p>
                      <span className='font-bold'>P:</span> Provisional
                    </p>
                  </div>
                  <CustomLink href="/sistema-de-consulta-de-informacion#app">
                    <a className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 duration-300 group'>
                      <span>
                        Explorar datos
                      </span>
                      <img className='group-hover:scale-150 duration-300' src='/images/link-arrow-icon.svg' alt='link arrow icon' />
                    </a>
                  </CustomLink>
                </div>
              </div>
            </div>
            <div className='lg:w-6/12'>
              <div>
                <iframe className='aspect-square' src="/charts/indices_base.html" width="100%"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='bg-banner-edificaciones bg-cover bg-center 2xl:pt-[102px] p-10 2xl:pb-[37.92px] 2xl:px-0 overflow-hidden rounded-tr-[80px] text-white space-y-8'>
          <div className='max-w-[942.55px] mx-auto'>
            <div className='flex flex-col items-center lg:flex-row lg:justify-between font-bold gap-y-8 lg:gap-y-0'>
              <div className='max-w-[371px] w-full'>
                <div className='space-y-[27.21px]'>
                  <h3 className='text-xl 2xl:text-2xl text-center'>
                    Porcentaje de edificaciones culminadas que cuentan con algún sistema de ahorro de <span className='text-blue-light'>agua</span>
                  </h3>
                  <div className='flex gap-x-[29.27px] items-center justify-center'>
                    <div className='max-w-[106.81px] w-full'>
                      <img src='/images/water-icon.svg' alt='water icon' />
                    </div>
                    <div className='max-w-[124px] w-full'>
                      <h4 className='text-3xl 2xl:text-[40px]'>
                        50.1%
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='max-w-[384px] w-full'>
                <div className='space-y-[27.21px]'>
                  <h3 className='text-xl 2xl:text-2xl text-center'>
                    Porcentaje de edificaciones culminadas que cuentan con algún sistema de ahorro de <span className='text-yellow'>energía</span>
                  </h3>
                  <div className='flex gap-x-[29.27px] items-center justify-center'>
                    <div className='max-w-[106.81px] w-full'>
                      <img src='/images/energy-icon.svg' alt='energy icon' />
                    </div>
                    <div className='max-w-[124px] w-full'>
                      <h4 className='text-3xl 2xl:text-[40px]'>
                        59.3%
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-11/12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0'>
              <div className='italic'>
                <p>
                  <span className='font-bold'>Fuente:</span> Censo de edificaciones 2021
                </p>
                <p>
                  <span className='font-bold'>Período:</span> IV trimestre del 2021
                </p>
              </div>
              <CustomLink href="/sistema-de-consulta-de-informacion#app">
                <a className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-white text-pink border-pink border font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink hover:text-white duration-300 group'>
                  <span>
                    Explorar datos
                  </span>
                  <img className='group-hover:scale-150 group-hover:brightness-0 group-hover:invert-[1] duration-300' src='/images/link-arrow-icon-pink.svg' alt='link arrow icon' />
                </a>
              </CustomLink>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 2xl:pt-[107px] 2xl:pb-[82.5px]'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-8 lg:mt-10 2xl:mt-[48px] gap-y-8'>
            <div className='lg:w-6/12 order-2 lg:order-1'>
              <div>
                {/* <iframe className='aspect-square' src="/charts/mapa_dpto.html" width="100%"></iframe> */}
                <div>
                  <img src='/images/mapa-home.png' alt='map home' />
                </div>
                <div className='text-grey-dark italic text-center'>
                  <p>
                    <span className='font-bold'>Fuente:</span> Encuesta Nacional de Calidad de Vida
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-5/12 order-1 lg:order-2'>
              <div className='max-w-[603px]'>
                <div className='space-y-10 lg:space-y-12'>
                  <div className='space-y-[17.5px]'>
                    <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                      Hogares que realizan al menos una práctica para reducir el consumo de agua o energía
                    </h3>
                    <p>
                      Por departamento 2020
                    </p>
                    <p>
                      Los hogares que se ubican en Bogotá DC, Antioquia y Valle del Cauca realizan un mayor esfuerzo en la disminución de los consumos de agua y energía.
                    </p>
                  </div>
                  <div className='space-y-[17.5px]'>
                    <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                      Porcentaje de hogares que clasifican la basura, según la edad del jefe de hogar
                    </h3>
                    <div className='space-y-[24.4px] py-6'>
                      <div className='space-y-4'>
                        <p>
                          A nivel nacional
                        </p>
                        <div className="table">
                          <div className="table-row bg-blue-ocean text-white font-bold">
                            <div className="table-cell text-color-secondary p-4">Grupo de edad</div>
                            <div className="table-cell text-color-primary p-4">Porcentaje</div>
                          </div>
                          <div className="table-row bg-blue-ocean bg-opacity-[0.08]">
                            <div className="table-cell text-color-secondary p-4">18 a 28 años</div>
                            <div className="table-cell text-color-primary p-4">35.7</div>
                          </div>
                          <div className="table-row">
                            <div className="table-cell text-color-secondary p-4">29 a 59 años</div>
                            <div className="table-cell text-color-primary p-4">50.2</div>
                          </div>
                          <div className="table-row bg-blue-ocean bg-opacity-[0.08]">
                            <div className="table-cell text-color-secondary p-4">60 años y más</div>
                            <div className="table-cell text-color-primary p-4">50.3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-10 2xl:space-y-[54.69px]'>
                      <div className='text-grey-dark italic'>
                        <p>
                          <span className='font-bold'>Fuente:</span> Encuesta de Calidad de Vida - ECV 2020
                        </p>
                      </div>
                      <CustomLink href="/sistema-de-consulta-de-informacion#app">
                        <a className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 duration-300 group'>
                          <span>
                            Explorar datos
                          </span>
                          <img className='group-hover:scale-150 duration-300' src='/images/link-arrow-icon.svg' alt='link arrow icon' />
                        </a>
                      </CustomLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-blue-ocean bg-opacity-[0.06] py-12 lg:py-16 2xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='space-y-[56.64px] 2xl:space-y-[66.61px]'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center relative space-y-[60.03px] lg:space-y-0 lg:space-x-8'>
              <div className='lg:w-5/12 relative z-10'>
                <div className='max-w-[503px]'>
                  <div className='space-y-6 lg:space-y-8 2xl:space-y-[35.47px]'>
                    <h2 className='text-blue-ocean text-2xl 2xl:text-[32px]'>
                      <span className='font-bold'>Explora </span>
                      todos los indicadores
                    </h2>
                    <p>
                      Herramienta que permite cruzar una serie de variables relacionadas a la Economía Circular con el fin de generar visualizaciones de datos. Los indicadores que miden aspectos de Economía Circular, se encuentran divididos en cuatro componentes: Demanda de activos ambientales y servicios ecosistémicos, Conservación o pérdida de valor de los materiales en el sistema productivo, Presión en los ecosistemas por la disposición de residuos y factores que facilitan la Economía Circular. A su vez, los indicadores interactúan con variables como la cantidad, el tiempo, las prácticas en los hogares, el consumo de recursos, entre otros.
                    </p>
                    <CustomLink href="/sistema-de-consulta-de-informacion#app">
                      <a className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 duration-300 group'>
                        <span>
                          Explorar datos
                        </span>
                        <img className='group-hover:scale-150 duration-300' src='/images/link-arrow-icon.svg' alt='link arrow icon' />
                      </a>
                    </CustomLink>
                  </div>
                </div>
              </div>
              <div className='lg:w-6/12 relative z-10'>
                <div>
                  <img className='w-full' src='/images/app-DANE.png' alt='app DANE' />
                </div>
              </div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2'>
                <img src='/images/sticky-icon.svg' alt='sticky icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
