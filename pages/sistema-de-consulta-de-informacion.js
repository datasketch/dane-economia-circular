import Head from 'next/head'
import { LogoDatasketch } from '../components/LogoDatasketch'

export default function InformationQuerySystem () {
  const scrollNavigation = (e) => {
    e.preventDefault()
    const id = e.target.closest('a').getAttribute('href')
    const element = document.querySelector(id)
    element.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
  return (
    <>
      <Head>
        <title>Sistema de Consulta de Información - SIEC | DANE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 gap-x-[111px]'>
            <div className='lg:w-1/2'>
              <div className='space-y-8 xl:space-y-[65px]'>
                <h2 className='text-blue-ocean text-2xl 3xl:text-[32px] max-w-[556px]'>
                  <span className='font-bold'>Sistema de Consulta de Información</span> de Economía Circular - SIEC
                </h2>
                <div className='space-y-[31px]'>
                  <p>
                    El SIEC es el conjunto articulado de elementos ( entidades públicas y privadas que son productoras o usuarias de información, las políticas, normas, procesos técnicos y la infraestructura involucrada en la gestión de la información relacionada con la Economía Circular), que interactúan entre sí para recopilar, consolidar y difundir la información estadística relacionada con la Economía Circular; con la finalidad de facilitar la toma de decisiones en materia de política pública y evidenciar la transición del país hacia este modelo de producción y consumo circular.
                  </p>
                  <p>
                    El objetivo del SIEC es integrar la información estadística, que cumpla con los requisitos de calidad, con el fin de disponerla de manera adecuada para que pueda ser utilizada como insumo para la toma de decisiones y en la evaluación de la política pública sobre Economía Circular
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2'>
              <div className='space-y-8 xl:space-y-[78px]'>
                <a onClick={scrollNavigation} href='#siec' className='bg-pink text-white gap-y-4 pt-[39px] pb-[35px] pl-[75px] pr-[75.47px] inline-flex flex-col lg:flex-row space-x-[31.58px] items-center rounded-tr-[20px] rounded-bl-[20px] overflow-hidden'>
                  <p className='font-bold xl:text-lg'>
                    Explora los datos del SIEC
                  </p>
                  <img src='/images/arrow-down.svg' alt='arrow down icon' />
                </a>
                <ul className='space-y-4'>
                  <h3 className='text-blue-dark font-bold text-xl 3xl:text-2xl'>
                    Objetivos específicos del SIEC
                  </h3>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue.svg' alt='arrow right' />
                    <p>
                      Consolidar la información estadística en materia de Economía Circular.
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue.svg' alt='arrow right' />
                    <p>
                      Disponer y facilitar de manera periódica el acceso de la información sobre Economía Circular para consulta pública y toma de decisiones.
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue.svg' alt='arrow right' />
                    <p>
                      Contribuir a la construcción y apropiación del conocimiento sobre la Económica Circular en el país.
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue.svg' alt='arrow right' />
                    <p>
                      Responder a las demandas de información sobre Economía Circular en los ámbitos nacional e internacional.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-blue-ocean bg-opacity-[0.06]'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='space-y-[30px]'>
            <div className='text-center max-w-[600px] mx-auto'>
              <h2 className='font-bold text-xl 2xl:text-[24px]'>
                La información e indicadores publicados a través del Sistema de Consulta de información – SIEC, se clasifican en los siguientes componentes:
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-12'>
              <div>
                <div>
                  <div>
                    <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-blue-green inline-grid place-items-center'>
                      <span className='text-white font-bold text-3xl 2xl:text-[40px]'>A</span>
                    </div>
                    <div className='h-0.5 w-[90%] ml-auto bg-blue-green -mt-[2.4px]'>&nbsp;</div>
                  </div>
                  <div className='py-4 pl-4 space-y-4'>
                    <h3 className='font-bold'>
                      Demanda de activos ambientales y servicios ecosistémicos
                    </h3>
                    <p>
                      Contiene el flujo de materiales y servicios originados en el ambiente y que son extraídos o utilizados para el desarrollo de las actividades económicas.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-green-2 inline-grid place-items-center'>
                      <span className='text-white font-bold text-3xl 2xl:text-[40px]'>B</span>
                    </div>
                    <div className='h-0.5 w-[90%] ml-auto bg-green-2 -mt-[2.4px]'>&nbsp;</div>
                  </div>
                  <div className='py-4 pl-4 space-y-4'>
                    <h3 className='font-bold'>
                      Conservación o pérdida de valor de los materiales en el sistema productivo
                    </h3>
                    <p>
                      Contiene las prácticas de producción o consumo que retornan o reducen los materiales utilizados. Entre ellos, se encuentran el ahorro y uso eficiente de agua, energía y materiales; la simbiosis industrial o la recirculación de materiales.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-green-3 inline-grid place-items-center'>
                      <span className='text-white font-bold text-3xl 2xl:text-[40px]'>C</span>
                    </div>
                    <div className='h-0.5 w-[90%] ml-auto bg-green-3 -mt-[2.4px]'>&nbsp;</div>
                  </div>
                  <div className='py-4 pl-4 space-y-4'>
                    <h3 className='font-bold'>
                      Presión en los ecosistemas por la disposición de residuos
                    </h3>
                    <p>
                      Contiene las externalidades ocasionadas por los residuos sólidos, líquidos o gaseosos que son descartados, descargados o emitidos al ambiente.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-purple-2 inline-grid place-items-center'>
                      <span className='text-white font-bold text-3xl 2xl:text-[40px]'>D</span>
                    </div>
                    <div className='h-0.5 w-[90%] ml-auto bg-purple-2 -mt-[2.4px]'>&nbsp;</div>
                  </div>
                  <div className='py-4 pl-4 space-y-4'>
                    <h3 className='font-bold'>
                      Factores que facilitan la Economía Circular
                    </h3>
                    <p>
                      Contiene instrumentos de gestión y empleo que utilizan los diferentes sectores y la sociedad, que favorecen la transición hacia una Economía Circular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='xl:px-[104px] xl:py-[72px] rounded-tr-[140px] border-blue-ocean border-[3px] overflow-hidden px-4 lg:px-8 py-12'>
            <div className='space-y-[60px]'>
              <div className='space-y-5'>
                <h3 className='text-blue-dark font-bold text-xl 3xl:text-2xl'>
                  Ecosistema de datos del sistema
                </h3>
                <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 gap-x-[61px]'>
                  <div className='lg:w-1/2'>
                    <p>
                      El Ecosistema de datos está conformado por subsistemas de actores: productores y usuarios, que interactúan en torno a los datos y la información sobre Economía Circular, en un contexto institucional y de política pública
                    </p>
                  </div>
                  <div className='lg:w-1/2'>
                    <p>
                      Frente a la estructura del ecosistema de datos del SIEC se pueden identificar tres grupos de actores: i) usuarios; ii) productores y iii) aquellos que cumplen un doble rol. Junto a este grupo de actores se encuentran los flujos de la oferta y demanda de estadísticas e indicadores sobre Economía Circular, así como de los lineamientos, normas y estándares definidos para los procesos de producción y calidad de los productos estadísticos.
                    </p>
                  </div>
                </div>
              </div>
              <div className='space-y-5'>
                <h3 className='text-blue-dark font-bold text-xl 3xl:text-2xl'>
                  Entidades involucradas en el SIEC
                </h3>
                <div className='flex flex-col lg:flex-row lg:flex-wrap text-white'>
                  <div className='lg:w-1/2 bg-blue-dark px-8 py-12 xl:px-0'>
                    <div className='max-w-[444px] mx-auto'>
                      <div className='space-y-2'>
                        <h4 className='font-bold text-lg 3xl:text-xl'>
                          Usuarios del SIEC
                        </h4>
                        <p>
                          Son las entidades consumidoras de los datos e información que se encuentra en el sistema. Los usuarios no generan información, ni coordinan ningún aspecto relacionado con el SIEC.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/2 bg-blue-ocean px-8 py-12 xl:px-0'>
                    <div className='max-w-[444px] mx-auto'>
                      <div className='space-y-2'>
                        <h4 className='font-bold text-lg 3xl:text-xl'>
                          Productores del SIEC
                        </h4>
                        <p>
                          Son las entidades generadoras de la información estadística que alimenta al sistema. Se incluyen las entidades encargadas de la coordinación del SIEC.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src='/images/SIEC.jpg' alt='SIEC' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='bg-blue-ocean pt-[105px] pb-[89.57px] relative'>
          <div className='space-y-[30.1px]'>
            <div className='max-w-[514px] mx-auto text-center text-white space-y-[15px]'>
              <h2 className='text-xl 3xl:text-2xl font-bold'>
                Proceso para ser parte del SIEC
              </h2>
              <p className='3xl:text-lg'>
                Las entidades que produzcan información oficial y deseen incluirla en el SIEC, deben realizar los siguientes pasos:
              </p>
            </div>
            <div className='mx-auto w-10/12'>
              <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 gap-x-[79.4px] text-white'>
                <div className='lg:w-1/3'>
                  <div className='space-y-[16.16px]'>
                    <div className='lg:-ml-6'>
                      <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-blue-dark inline-grid place-items-center'>
                        <span className='text-white font-bold text-3xl 2xl:text-[40px]'>1</span>
                      </div>
                      <div className='h-[2.5px] w-11/12 ml-auto bg-blue-dark -mt-[3px]'>&nbsp;</div>
                    </div>
                    <div className='space-y-[20.16px]'>
                      <h3 className='text-xl xl:text-2xl font-bold'>
                        Contacto
                      </h3>
                      <p>
                        Las entidades que producen información sobre Economía Circular, contactan al DANE, informando su interés de hacer parte del sistema.
                      </p>
                      <a className='inline-block italic' href='mailto:sen@dane.gov.co'>
                        Correo electrónico de contacto: sen@dane.gov.co
                      </a>
                      <p>
                        El DANE contactará las entidades que produzcan información estadística sobre Economía Circular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <div className='space-y-[16.16px]'>
                    <div className='lg:-ml-6'>
                      <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-blue-dark inline-grid place-items-center'>
                        <span className='text-white font-bold text-3xl 2xl:text-[40px]'>2</span>
                      </div>
                      <div className='h-[2.5px] w-11/12 ml-auto bg-blue-dark -mt-[3px]'>&nbsp;</div>
                    </div>
                    <div className='space-y-[20.16px]'>
                      <h3 className='text-xl xl:text-2xl font-bold'>
                        Verificación de la información
                      </h3>
                      <p>
                        La entidad solicitante expone la información al DANE.
                      </p>
                      <p>
                        El DANE verifica que la información estadística, sea estadística oficial.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3'>
                  <div className='space-y-[16.16px]'>
                    <div className='lg:-ml-6'>
                      <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-blue-dark inline-grid place-items-center'>
                        <span className='text-white font-bold text-3xl 2xl:text-[40px]'>3</span>
                      </div>
                      <div className='h-[2.5px] w-11/12 ml-auto bg-blue-dark -mt-[3px]'>&nbsp;</div>
                    </div>
                    <div className='space-y-[20.16px]'>
                      <h3 className='text-xl xl:text-2xl font-bold'>
                        Preparación y entrega de información
                      </h3>
                      <p>
                        La entidad productora consolida y entrega los cuadros de salida y metadatos de la información según parámetros establecidos por el DANE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute -top-12 left-1/2 transform -translate-x-1/2'>
            <img src='/images/arrow-scroll-down.svg' alt='arrow scroll down' />
          </div>
        </div>
      </div>

      <div id='siec' className='mx-auto w-10/12 max-w-screen-lim'>
        <div id='app' className='py-12 lg:py-16 xl:py-20'>
          <div className='space-y-[53px]'>
            <div className='max-w-[567.62px] mx-auto text-center'>
              <div className='space-y-5'>
                <h3 className='text-blue-dark font-bold text-xl xl:text-2xl'>
                  Explora los datos del SIEC
                </h3>
                <p className='xl:text-lg'>
                  Esta es una herramienta que te permite consultar información estadística, generar visualizaciones y descargarlas.
                </p>
                <details>
                  <summary className='inline-flex items-center space-x-[10.44px] bg-pink text-white font-bold text-sm pt-[13px] pb-[10px] px-[40.85px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden cursor-pointer'>
                    <p>
                      Cómo utilizar esta herramienta
                    </p>
                    <img className='w-[11.86px] h-[11.18px]' src='/images/arrow-down.svg' alt='arrow down' />
                  </summary>
                  <div className='mt-6 text-lg text-left'>
                    <p>La herramienta de visualización de datos desarrollada por Datasketch permitirá a los usuarios de la plataforma explorar cada uno de los indicadores, así como sus formas de visualización según los filtros y variables seleccionadas.  La estructura de la herramienta de visualización consiste en dos paneles, uno relacionado con la selección de indicadores y variables, y otro de visualización de datos. Cada una de las gráficas se podrá descargar en distintos formatos y se podrá seleccionar cada uno de los compromisos de acuerdo al tipo de indicador seleccionado.</p>
                    <ul className='mt-6'>
                      <li>
                        <p>1. Podrás seleccionar uno de los indicadores de Economía Circular  dispuestos, así como los filtros que los configuran, ya sea los datos de  interés o variables como el año, los grupos de división industrial, el  sector, el tipo de actividad, el tipo de emisión, entre otros.</p>
                        <img className='mt-5' src="/images/gif-1.gif" alt="" />
                      </li>
                      <li className='mt-12'>
                        <p>2. Es posible descargar las visualizaciones en formato JPEG, PDF, PNG y  HTML</p>
                        <img className='mt-5' src="/images/gif-2.gif" alt="" />
                      </li>
                      <li className='mt-12'>
                        <p>3. Es posible descargar los datos en formato CSV, XLSX y JSON</p>
                        <img className='mt-5' src="/images/gif-3.gif" alt="" />
                      </li>
                      <li className='mt-12'>
                        <p>4. Las visualizaciones están disponibles a través de gráficas o tablas de datos.</p>
                        <img className='mt-5' src="/images/gif-4.gif" alt="" />
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div>
              <iframe className='w-full mx-auto h-screen' src='https://datasketch.shinyapps.io/daneApp/' />
            </div>
            <LogoDatasketch />
          </div>
        </div>
      </div>
    </>
  )
}
