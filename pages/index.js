import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Economía circular | DANE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='py-10'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='flex flex-col xl:flex-row items-center xl:justify-between gap-[21.25px]'>
            <div className='max-w-[490.23px] w-full'>
              <img className='max-h-[123.19px] h-full' src='/logo-economia-circular.png' alt='logo economia circular' />
            </div>
            <div className='2xl:max-w-[813px] w-full'>
              <div className='grid grid-cols-2 gap-[14px] md:grid-cols-4'>
                <div className='pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full'>
                  <p className>
                    Sobre Economía Circular
                  </p>
                </div>
                <div className='pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full'>
                  <p className>
                    Mesa de Información de Economía Circular
                  </p>
                </div>
                <div className='pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full'>
                  <p className>
                    Sistema de Consulta de Información - SIEC
                  </p>
                </div>
                <div className='pt-[6px] pb-[11px] pl-[10px] border-l border-black max-w-[184px] lg:w-full'>
                  <p className>
                    Reportes de Economía Circular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1318px] gap-[44px]'>
            <div className='max-w-[733px] w-full'>
              <div className='bg-banner-siec bg-cover bg-center h-[256px] overflow-hidden rounded-tr-[80px]'>
                <div className='grid place-items-center h-full px-[44px] py-[65px]'>
                  <p className='max-w-[435px] text-white'>
                    Encuentre información estadística relacionada con la medición de la Economía Circular en Colombia, el Sistema de Información de Economía Circular – SIEC y los indicadores que se encuentran en los reportes semestrales.
                  </p>
                </div>
              </div>
            </div>
            <div className='max-w-[411px] w-full'>
              <div className='space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-[38px]'>
                <h2 className='font-bold text-2xl 2xl:text-[32px] text-blue-ocean'>
                  Sistema de Consulta de Información de Economía Circular - SIEC
                </h2>
                <p>
                  Encuentre información estadística relacionada con la medición de la Economía Circular en Colombia.
                </p>
                <a href='#' className='inline-flex items-center gap-x-[21.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                  <span>
                    Consultar
                  </span>
                  <img src='/link-arrow-icon.svg' alt='link arrow icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 2xl:pt-[107px] 2xl:pb-[82.5px]'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='text-center'>
            <h2 className='text-2xl 2xl:text-[32px] text-blue-ocean'>
              <span className='font-bold'>Datos</span>
              de interés
            </h2>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-[42.47px] gap-x-8 mt-8 lg:mt-10 2xl:mt-[48px]'>
            <div className='lg:max-w-[735.82px] w-full order-2 lg:order-1'>
              <div>
                <img src='/data-interest-graphic.svg' />
              </div>
            </div>
            <div className='max-w-[603px] w-full order-1 lg:order-2'>
              <div className='space-y-6 2xl:space-y-[34px]'>
                <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                  Disponibilidad de reservas mineras
                </h3>
                <p>
                  Este indicador relaciona la extracción y las reservas mineras probadas de cada recurso, y permite conocer la disponibilidad del activo en un horizonte de tiempo. La mayor o menor disponibilidad está sujeta a los cambios en el activo que se puedan dar durante el año como descubrimientos, extracciones, pérdidas por catástrofes y las reconsideraciones y cambios en clasificaciones.
                </p>
                <p>
                  Disponibilidad de reservas mineras del 2019:
                </p>
                <div className='flex justify-between max-w-[473px]'>
                  <div className='max-w-[100px] w-full'>
                    <div className='text-center font-bold space-y-2'>
                      <h4 className='2xl:text-lg'>
                        Carbón
                      </h4>
                      <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                      <p className='text-3xl 2xl:text-[40px] pt-2'>
                        73
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
                        8
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
                    <span className='font-bold'>Fecha:</span> de publicación de los datos
                  </p>
                  <p>
                    <span className='font-bold'>Fuente:</span> Datos de la fuentes de los datos
                  </p>
                </div>
                <a href='#' className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                  <span>
                    Explorar datos
                  </span>
                  <img src='/link-arrow-icon.svg' alt='link arrow icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-10/12 max-w-screen-xl'>
        <div className='bg-banner-tasa-reciclaje bg-cover bg-center h-[689.65px] lg:h-[504.65px] relative'>

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src='/reciclaje-icon.svg' alt='reciclaje icon' />
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 2xl:pt-[107px] 2xl:pb-[82.5px]'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-[42.47px] gap-x-8 mt-8 lg:mt-10 2xl:mt-[48px]'>
            <div className='max-w-[537px] w-full'>
              <div className='space-y-6 2xl:space-y-[34px]'>
                <div className='space-y-2'>
                  <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                    Desacoplamiento en la generación de emisiones
                  </h3>
                  <div>
                    <p>
                      Índices en base 100 = 20025
                    </p>
                    <p>
                      2005-2019P
                    </p>
                  </div>
                </div>
                <p>
                  Durante 2019P, en el punto representado por la flecha, se observa la mayor divergencia entre la generación de emisiones y el valor agregado, que puede interpretarse como el nivel más alto de productivo.
                </p>
                <div className='text-grey-dark italic'>
                  <p>
                    <span className='font-bold'>Fecha:</span> de publicación de los datos
                  </p>
                  <p>
                    <span className='font-bold'>Fuente:</span> Datos de la fuentes de los datos
                  </p>
                </div>
                <a href='#' className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                  <span>
                    Explorar datos
                  </span>
                  <img src='/link-arrow-icon.svg' alt='link arrow icon' />
                </a>
              </div>
            </div>
            <div className='max-w-[814.24px] w-full'>
              <div>
                <img src='/desacoplamiento-graphic.svg' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 2xl:pt-[107px] 2xl:pb-[82.5px]'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-[42.47px] gap-x-8 mt-8 lg:mt-10 2xl:mt-[48px]'>
            <div className='lg:max-w-[549.45px] w-full order-2 lg:order-1'>
              <div>
                <img className='mx-auto lg:mx-0' src='/map-graphic.svg' />
              </div>
            </div>
            <div className='max-w-[603px] w-full order-1 lg:order-2'>
              <div className='space-y-10 lg:space-y-12 xl:space-y-16 2xl:space-y-20'>
                <div className='space-y-[17.5px]'>
                  <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                    Hogares que tienen prácticas para reducir el consumo de agua y energía
                  </h3>
                  <p>
                    Por departamento 2020
                  </p>
                  <p>
                    Lo hogares que se ubican en Huila, Caldas y el Archipiélago de San Andrés, Providencia y Santa Catalina son los que, en porcentaje, realizan un mayor esfuerzo en la disminución de los consumos de agua y energía.
                  </p>
                  <div className='text-grey-dark italic'>
                    <p>
                      <span className='font-bold'>Fuente:</span> Datos de la fuentes de los datos
                    </p>
                  </div>
                </div>
                <div className='space-y-[17.5px]'>
                  <h3 className='font-bold text-xl 2xl:text-2xl text-blue-dark'>
                    Grupos de edad tienen prácticas para reducir el consumo de agua y energía
                  </h3>
                  <p>
                    A nivel nacional
                  </p>
                  <div className='space-y-[24.4px] py-6'>
                    <div className='flex justify-between max-w-[473px]'>
                      <div className='max-w-[100px] w-full'>
                        <div className='text-center font-bold space-y-2'>
                          <h4 className='2xl:text-lg'>
                            Rango
                          </h4>
                          <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                          <p className='text-3xl 2xl:text-[40px] pt-2'>
                            12%
                          </p>
                        </div>
                      </div>
                      <div className='max-w-[100px] w-full'>
                        <div className='text-center font-bold space-y-2'>
                          <h4 className='2xl:text-lg'>
                            Rango
                          </h4>
                          <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                          <p className='text-3xl 2xl:text-[40px] pt-2'>
                            12%
                          </p>
                        </div>
                      </div>
                      <div className='max-w-[100px] w-full'>
                        <div className='text-center font-bold space-y-2'>
                          <h4 className='2xl:text-lg'>
                            Rango
                          </h4>
                          <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                          <p className='text-3xl 2xl:text-[40px] pt-2'>
                            12%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between max-w-[473px]'>
                      <div className='max-w-[100px] w-full'>
                        <div className='text-center font-bold space-y-2'>
                          <h4 className='2xl:text-lg'>
                            Rango
                          </h4>
                          <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                          <p className='text-3xl 2xl:text-[40px] pt-2'>
                            12%
                          </p>
                        </div>
                      </div>
                      <div className='max-w-[100px] w-full'>
                        <div className='text-center font-bold space-y-2'>
                          <h4 className='2xl:text-lg'>
                            Rango
                          </h4>
                          <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                          <p className='text-3xl 2xl:text-[40px] pt-2'>
                            12%
                          </p>
                        </div>
                      </div>
                      <div className='max-w-[100px] w-full'>
                        <div className='text-center font-bold space-y-2'>
                          <h4 className='2xl:text-lg'>
                            Rango
                          </h4>
                          <div className='w-[88.03px] h-[2px] bg-black mx-auto'>&nbsp;</div>
                          <p className='text-3xl 2xl:text-[40px] pt-2'>
                            12%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-10 2xl:space-y-[54.69px]'>
                    <div className='text-grey-dark italic'>
                      <p>
                        <span className='font-bold'>Fuente:</span> Fuente: DANE. Encuesta de Calidad de Vida - ECV 2020.
                      </p>
                    </div>
                    <a href='#' className='inline-flex items-center gap-x-[11.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                      <span>
                        Explorar datos
                      </span>
                      <img src='/link-arrow-icon.svg' alt='link arrow icon' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-blue-ocean bg-opacity-[0.06] py-12 lg:py-16 2xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='space-y-[56.64px] 2xl:space-y-[66.61px]'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center relative space-y-[60.03px] lg:space-y-0 lg:space-x-8'>
              <div className='max-w-[503px] w-full z-10'>
                <div className='space-y-6 lg:space-y-8 2xl:space-y-[35.47px]'>
                  <h2 className='text-blue-ocean text-2xl 2xl:text-[32px]'>
                    <span className='font-bold'>Explora </span>
                    todos los indicadores
                  </h2>
                  <p>
                    Herramienta que permite cruzar una serie de variables relacionadas a la Economía Circular con el fin de generar visualizaciones de datos. Los indicadores que miden aspectos de Economía Circular, se encuentran divididos en cuatro categorías: Extracción de reservas mineras; Consumo y uso; Producción de bienes y servicios; y Cierre y optimización en ciclos de vida de los materiales y productos. A su vez, los indicadores interactuan con variables como la cantidad, el tiempo, las prácticas en los hogares, el consumo de recursos, entre otros.
                  </p>
                  <a href='#' className='inline-flex items-center gap-x-[21.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                    <span>
                      Explorar datos
                    </span>
                    <img src='/link-arrow-icon.svg' alt='link arrow icon' />
                  </a>
                </div>
              </div>
              <div className='max-w-[734.5px] w-full z-10'>
                <div>
                  <img src='/app-DANE.png' alt='app DANE' />
                </div>
              </div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2'>
                <img src='/sticky-icon.svg' alt='sticky icon' />
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='bg-blue-ocean bg-opacity-[0.18] p-4 pr-6 lg:py-[21px] lg:px-[37px] rounded-tr-[40px] overflow-hidden w-[155px] lg:w-[261px]'>
                <img className='mx-auto' src='/logo-datasketch.svg' alt='logo datasketch' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
