import Head from 'next/head'
import { IndicatorCountryCard } from '../components/IndicatorCountryCard'
import { CircularEconomyReport } from '../components/CircularEconomyReport'
import { LogoDatasketch } from '../components/LogoDatasketch'
import TimeLine from '../components/TimeLine'
import reportsData from '../data/reports.json'
import timeLineData from '../data/timeLine.json'

const indicatorCountriesData = [
  {
    bgImage: '/images/union-europea.jpg',
    country: 'Unión Europea',
    link: 'https://ec.europa.eu/eurostat/web/circular-economy/indicators',
    classNames: ''
  },
  {
    bgImage: '/images/espania.jpg',
    country: 'España',
    link: 'https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/economia-circular/estrategia/',
    classNames: ''
  },
  {
    bgImage: '/images/francia.jpg',
    country: 'Francia',
    link: 'https://www.ecologie.gouv.fr/leconomie-circulaire',
    classNames: ''
  },
  {
    bgImage: '/images/holanda.jpg',
    country: 'Holanda',
    link: 'https://www.rijksoverheid.nl/onderwerpen/circulaire-economie/nederland-circulair-in-2050',
    classNames: ''
  },
  {
    bgImage: '/images/china.jpg',
    country: 'China',
    link: 'https://en.ndrc.gov.cn/',
    classNames: ''
  },
  {
    bgImage: '/images/OCDE.jpg',
    country: 'OECD',
    link: [
      'https://www.oecd.org/environment/waste/recircle.htm',
      'https://www.oecd.org/regional/cities/circular-economy-cities.htm',
      'https://www.oecd.org/cfe/cities/InventoryCircularEconomyIndicators.pdf'
    ],
    classNames: ''
  },
  {
    bgImage: '/images/americas.jpg',
    country: 'Plataforma de Economía Circular de las Américas',
    link: 'https://www.pec-americas.com/',
    classNames: 'md:col-start-1 md:col-end-3 xl:col-start-2 xl:col-end-3'
  }
]

export default function About () {
  return (
    <>
      <Head>
        <title>Sobre Economía Circular | DANE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='space-y-[104.72px]'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8'>
              <div className='lg:w-5/12'>
                <div className='space-y-9 2xl:space-y-[45.83px]'>
                  <h2 className='text-blue-ocean font-bold text-2xl 2xl:text-[32px]'>
                    La Economía Circular en Colombia
                  </h2>
                  <div className='space-y-6 2xl:space-y-8'>
                    <p>
                      Es un sistema de producción y consumo que promueve la eficiencia en el uso de materiales, agua y energía; teniendo en cuenta la capacidad de recuperación de los ecosistemas y el uso circular de los flujos de materiales a través de la implementación de innovaciones tecnológicas, alianzas y colaboraciones entre actores, y el impulso de modelos de negocio que respondan a los fundamentos del desarrollo sostenible.
                    </p>
                    <p>
                      Colombia se ha propuesto en el Plan Nacional de Desarrollo 2018-2022, en su Pacto por la Sostenibilidad, acelerar la transición hacia el modelo de Economía Circular como base para la reducción, la reutilización y el reciclaje de residuos y materiales; así como  el uso eficiente de recursos, agua y energía.
                    </p>
                    <p>
                      Para su implementación el Ministerio de Ambiente y Desarrollo Sostenible – MADS en 2018 formuló la Estrategia Nacional de Economía Circular – ENEC, mediante la que establece los instrumentos para la consecución de las metas de corto y mediano plazo del país en la materia.
                    </p>
                    <p>
                      La Economía Circular, comprende varias categorías, las cuales pueden variar conforme se avance en su implementación. Algunos de los temas relacionados con la Economía Circular son:
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:w-6/12 xl:w-5/12'>
                <img className='mx-auto' src='/images/grafica-circular.png' alt='grafica circular' />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-12'>
              <div className='space-y-5'>
                <h4 className='font-bold 2xl:text-lg text-blue-2'>
                  Recursos naturales
                </h4>
                <ul className='space-y-4'>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-dark.svg' alt='arrow right' />
                    <p>
                      Agua
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-dark.svg' alt='arrow right' />
                    <p>
                      Energía
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-dark.svg' alt='arrow right' />
                    <p>
                      Minerales
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-dark.svg' alt='arrow right' />
                    <p>
                      Madera
                    </p>
                  </li>
                </ul>
              </div>
              <div className='space-y-5'>
                <h4 className='font-bold 2xl:text-lg text-blue-3'>
                  Producción y consumo
                </h4>
                <ul className='space-y-4'>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-light.svg' alt='arrow right' />
                    <p>
                      Ecodiseño
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-light.svg' alt='arrow right' />
                    <p>
                      Remanufacturar
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-light.svg' alt='arrow right' />
                    <p>
                      Maquinaria y equipos P+I
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-light.svg' alt='arrow right' />
                    <p>
                      Simbiosis industrial
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-light.svg' alt='arrow right' />
                    <p>
                      REP: Responsabilidad extendida del productor
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-light.svg' alt='arrow right' />
                    <p>
                      Reparación
                    </p>
                  </li>
                </ul>
              </div>
              <div className='space-y-5'>
                <h4 className='font-bold 2xl:text-lg text-blue-green'>
                  Residuos
                </h4>
                <ul className='space-y-4'>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-green.svg' alt='arrow right' />
                    <p>
                      Sólidos
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-green.svg' alt='arrow right' />
                    <p>
                      Líquidos
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-green.svg' alt='arrow right' />
                    <p>
                      Gaseosos
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-blue-green.svg' alt='arrow right' />
                    <p>
                      Gestión de residuos
                    </p>
                  </li>
                </ul>
              </div>
              <div className='space-y-5'>
                <h4 className='font-bold 2xl:text-lg text-green'>
                  Empleos
                </h4>
                <ul className='space-y-4'>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-green.svg' alt='arrow right' />
                    <p>
                      Ambientales
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-green.svg' alt='arrow right' />
                    <p>
                      Verdes
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-green.svg' alt='arrow right' />
                    <p>
                      Circulares
                    </p>
                  </li>
                </ul>
              </div>
              <div className='space-y-5'>
                <h4 className='font-bold 2xl:text-lg text-purple'>
                  Emprendimiento
                </h4>
                <ul className='space-y-4'>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-purple.svg' alt='arrow right' />
                    <p>
                      Eco-innovación
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-purple.svg' alt='arrow right' />
                    <p>
                      Financiación e incentivos
                    </p>
                  </li>
                  <li className='flex space-x-[12.63px]'>
                    <img src='/images/arrow-right-purple.svg' alt='arrow right' />
                    <p>
                      Nuevos modelos de negocio para la Economía Circular
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-blue-ocean bg-opacity-[0.06] overflow-x-scroll'>
        <div className='mx-auto w-11/12 max-w-screen-lim'>
          <div className='space-y-7'>
            <h3 className='text-blue-dark font-bold text-xl 2xl:text-2xl'>
              Recorrido histórico de normas relacionadas a la Economía Circular
            </h3>
            <div className='scroll flex items-baseline'>
              {
                timeLineData.map((item, index) => <TimeLine key={`time-${index + 1}`} year={item.year} data={item.data} direction={index === 0 || index % 2 === 0 ? 'top' : 'bottom'} />)
              }
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8'>
            <div className='lg:w-5/12'>
              <div className='space-y-[42px]'>
                <h2 className='text-blue-ocean text-2xl 2xl:text-[32px]'>
                  <span className='font-bold'>Reportes </span>
                  de Economía Circular
                </h2>
                <p>
                  Tienen el objetivo de brindar información relacionada a la Economía Circular en Colombia, abordando el robustecimiento de su política pública y la forma de tomar decisiones al respecto. En los reportes se publicaron los indicadores agrupados en cuatro componentes mediante diagramas y visualizaciones. Adicionalmente, en los reportes se encuentran los avances y flujos de la Cuenta Satelite Ambiental, el Sistema de Información de Economía Circular y las Submesas de Información de Economía Circular.
                </p>
                <a href='/reportes-de-economia-circular' className='inline-flex items-center gap-x-[21.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                  <span>
                    Consultar
                  </span>
                  <img src='/images//link-arrow-icon.svg' alt='link arrow icon' />
                </a>
              </div>
            </div>
            <div className='lg:w-6/12'>
              <CircularEconomyReport item={reportsData[reportsData.length - 1]} isLastReport={true} showLinkButton={true} />
            </div>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-11/12 max-w-screen-lim'>
          <div className='space-y-[71.84px]'>
            <div className='max-w-[518px] mx-auto'>
              <h2 className='text-2xl 2xl:text-[32px] text-center text-blue-ocean'>
                <span className='font-bold'>Indicadores de países líderes</span> en la medición de Economía Circular
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[38.3px] gap-y-[44.93px]'>
              {
                indicatorCountriesData.map((item, index) => <IndicatorCountryCard key={`indicator-${index + 1}`} item={item} />)
              }
            </div>
            <LogoDatasketch />
          </div>
        </div>
      </div>
    </>
  )
}
