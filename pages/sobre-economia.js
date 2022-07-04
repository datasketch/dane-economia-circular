import Head from 'next/head'
import { IndicatorCountryCard } from '../components/IndicatorCountryCard'

export default function About () {
  const indicatorCountryData = [
    {
      bgImage: 'https://economipedia.com/wp-content/uploads/union-europea-desde-sus-or%C3%ADgenes.jpg',
      country: 'Unión Europera',
      link: 'www.referenteinternacional.com'
    },
    {
      bgImage: 'https://cdn.mequieroir.com/wp-content/uploads/2019/10/bandera-spain.jpg',
      country: 'España',
      link: 'www.referenteinternacional.com'
    },
    {
      bgImage: 'https://cdnnmundo1.img.sputniknews.com/img/105981/00/1059810018_0:289:2730:1825_1920x0_80_0_0_51a0de321a6aaf89c9e21c3bba97a7f1.jpg',
      country: 'Francia',
      link: 'www.referenteinternacional.com'
    },
    {
      bgImage: 'https://www.agorarsc.org/wp-content/uploads/2018/07/48-holanda-1-960x640.jpg',
      country: 'Holanda',
      link: 'www.referenteinternacional.com'
    },
    {
      bgImage: 'https://images.ecestaticos.com/83_TV0kEY5WROX67YWZK4DfUJaw=/0x0:2272x1514/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8fa%2F968%2F3c4%2F8fa9683c42b1deecf3aba0f08ee1d55c.jpg',
      country: 'China',
      link: 'www.referenteinternacional.com'
    }
  ]
  return (
        <>
            <Head>
                <title>Sobre Economía Circular | DANE</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='py-12 lg:py-16 xl:py-20'>
                <div className='mx-auto w-10/12 max-w-screen-xl'>
                    <div className='space-y-[104.72px]'>
                        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8 gap-x-12'>
                            <div className='max-w-[610px] w-full'>
                                <div className='space-y-9 2xl:space-y-[45.83px]'>
                                    <h2 className='text-blue-ocean font-bold text-2xl 2xl:text-[32px]'>
                                        La Economía Circular en Colombia
                                    </h2>
                                    <div className='space-y-6 2xl:space-y-8'>
                                        <p>
                                            Sistema de producción y consumo que promueve la eficiencia en el uso de materiales, agua y energía; teniendo en cuenta la capacidad de recuperación de los ecosistemas y el uso circular de los flujos de materiales a través de la implementación de innovaciones tecnológicas, alianzas y colaboraciones entre actores, y el impulso de modelos de negocio que respondan a los fundamentos del desarrollo sostenible.
                                        </p>
                                        <p>
                                            Colombia se ha propuesto transitar hacia un modelo de Economía Circular. Es así como, el Plan Nacional de Desarrollo 2018-2022, en su Pacto por la Sostenibilidad, establece que se debe acelerar la transición hacia el modelo de Economía Circular como base para la reducción, la reutilización y el reciclaje de residuos y materiales; así como el uso eficiente de recursos, agua y energía.
                                        </p>
                                        <p>
                                            Para su implementación el Ministerio de Ambiente y Desarrollo Sostenible – MADS en 2018 formuló la Estrategia Nacional de Economía Circular – ENEC, mediante la que establece los instrumentos para la consecución de las metas de corto y mediano plazo del país en la materia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-[530px] w-full'>
                                <img src='/grafica-circular.png' alt='grafica circular' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-8 gap-x-12'>
                            <div className='space-y-5'>
                                <h4 className='font-bold 2xl:text-lg text-blue-2'>
                                    Recursos naturales
                                </h4>
                                <ul className='space-y-4'>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-dark.svg' alt='arrow right' />
                                        <p>
                                            Agua
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-dark.svg' alt='arrow right' />
                                        <p>
                                            Energía
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-dark.svg' alt='arrow right' />
                                        <p>
                                            Minerales
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-dark.svg' alt='arrow right' />
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
                                        <img src='arrow-right-blue-light.svg' alt='arrow right' />
                                        <p>
                                            Ecodiseño
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-light.svg' alt='arrow right' />
                                        <p>
                                            Remanufacturar
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-light.svg' alt='arrow right' />
                                        <p>
                                            Maquinaria y equipos P+I
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-light.svg' alt='arrow right' />
                                        <p>
                                            Simbiosis industria
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-light.svg' alt='arrow right' />
                                        <p>
                                            REP: Responsabilidad
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-light.svg' alt='arrow right' />
                                        <p>
                                            Extendida de Productos
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
                                        <img src='arrow-right-blue-green.svg' alt='arrow right' />
                                        <p>
                                            Sólidos
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-green.svg' alt='arrow right' />
                                        <p>
                                            Líquidos
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-green.svg' alt='arrow right' />
                                        <p>
                                            Gaseosos
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-blue-green.svg' alt='arrow right' />
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
                                        <img src='arrow-right-green.svg' alt='arrow right' />
                                        <p>
                                            Ambientales
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-green.svg' alt='arrow right' />
                                        <p>
                                            Verdes
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-green.svg' alt='arrow right' />
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
                                        <img src='arrow-right-purple.svg' alt='arrow right' />
                                        <p>
                                            Eco-innovación
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-purple.svg' alt='arrow right' />
                                        <p>
                                            Financiación e incentivos
                                        </p>
                                    </li>
                                    <li className='flex space-x-[12.63px]'>
                                        <img src='arrow-right-purple.svg' alt='arrow right' />
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

            <div className='py-12 lg:py-16 xl:py-20 bg-blue-ocean bg-opacity-[0.06]'>
                <div className='mx-auto w-10/12 max-w-screen-xl'>
                    <div className='space-y-[30px]'>
                        <div className='text-center'>
                            <h2 className='font-bold text-xl 2xl:text-[24px]'>
                                El DANE mide la Economía Circular a través de los siguientes componentes:
                            </h2>
                        </div>
                        <div className='flex flex-wrap lg:justify-between gap-y-8 gap-x-12'>
                            <div className='max-w-[295px] w-full'>
                                <div>
                                    <div>
                                        <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-blue-green inline-grid place-items-center'>
                                            <span className='text-white font-bold text-3xl 2xl:text-[40px]'>A</span>
                                        </div>
                                        <div className='h-0.5 w-[260px] ml-auto bg-blue-green -mt-[2.4px]'>&nbsp;</div>
                                    </div>
                                    <div className='py-4 pl-4 space-y-4'>
                                        <h3 className='font-bold'>
                                            Demanda de activos ambientales y servicios ecosistémicos
                                        </h3>
                                        <p>
                                            Flujo de materiales y servicios originados en el ambiente y que son extraídos o utilizados para el desarrollo de las actividades económicas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-[295px] w-full'>
                                <div>
                                    <div>
                                        <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-green-2 inline-grid place-items-center'>
                                            <span className='text-white font-bold text-3xl 2xl:text-[40px]'>B</span>
                                        </div>
                                        <div className='h-0.5 w-[260px] ml-auto bg-green-2 -mt-[2.4px]'>&nbsp;</div>
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
                            <div className='max-w-[295px] w-full'>
                                <div>
                                    <div>
                                        <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-green-3 inline-grid place-items-center'>
                                            <span className='text-white font-bold text-3xl 2xl:text-[40px]'>C</span>
                                        </div>
                                        <div className='h-0.5 w-[260px] ml-auto bg-green-3 -mt-[2.4px]'>&nbsp;</div>
                                    </div>
                                    <div className='py-4 pl-4 space-y-4'>
                                        <h3 className='font-bold'>
                                            Presión en los ecosistemas por la disposición de residuos
                                        </h3>
                                        <p>
                                            Contienes las externalidades ocasionadas por los residuos sólidos, líquidos o gaseosos que son descartados, descargados o emitidos al ambiente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-[295px] w-full'>
                                <div>
                                    <div>
                                        <div className='w-[73px] h-[73px] rounded-full overflow-hidden bg-purple-2 inline-grid place-items-center'>
                                            <span className='text-white font-bold text-3xl 2xl:text-[40px]'>D</span>
                                        </div>
                                        <div className='h-0.5 w-[260px] ml-auto bg-purple-2 -mt-[2.4px]'>&nbsp;</div>
                                    </div>
                                    <div className='py-4 pl-4 space-y-4'>
                                        <h3 className='font-bold'>
                                            Factores que facilitan la Economía Circular
                                        </h3>
                                        <p>
                                            Instrumentos de gestión y empleo que utilizan los diferentes sectores y la sociedad, que favorecen la transición hacia una Economía Circular.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-12 lg:py-16 xl:py-20'>
                <div className='mx-auto w-10/12 max-w-screen-xl'>
                    <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-x-12'>
                        <div className='max-w-[639px] w-full'>
                            <div className='space-y-[42px]'>
                                <h2 className='text-blue-ocean text-2xl 2xl:text-[32px]'>
                                    <span className='font-bold'>Reportes </span>
                                    de Economía Circular
                                </h2>
                                <p>
                                    Tienen el objetivo de brindar información relacionada a la Economía Circular en Colombia, abordando el robustecimiento de su política pública y la forma de tomar decisiones al respecto. En los reportes se publicaron los indicadores agrupados en cuatro categorías mediante diagramas y visualizaciones. Adicionalmente, en los reportes se encuentran los avances y flujos de la Cuenta Satelite Ambiental, el Sistema de Información de Economía Circular y las Submesas de Información de Economía Circular.
                                </p>
                                <a href='#' className='inline-flex items-center gap-x-[21.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                                    <span>
                                        Consultar
                                    </span>
                                    <img src='/link-arrow-icon.svg' alt='link arrow icon' />
                                </a>
                            </div>
                        </div>
                        <div className='max-w-[710px] w-full'>
                            <div className='border-[3px] border-blue-ocean rounded-tr-[100px] overflow-hidden relative pt-[45.57px] pb-[29.83px] pl-[47px] pr-[49.41px]'>
                                <div className='flex flex-col items-center xl:flex-row xl:justify-between gap-y-6 xl:gap-x-8'>
                                    <div className='max-w-[184px] w-full'>
                                        <div>
                                            <img src='/reporte-prueba.png' alt='reporte prueba' />
                                        </div>
                                    </div>
                                    <div className='max-w-[385px] w-full'>
                                        <div>
                                            <h4 className='font-bold 2xl:text-lg'>
                                                Cuarto reporte de Economía Circular
                                            </h4>
                                            <ul className='mt-[2.6px]'>
                                                <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                                    <div className='flex justify-between items-center space-x-[11.83px]'>
                                                        <img src='pdf-icon.svg' alt='pdf icon' />
                                                        <p>
                                                            Cuarto reporte
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <a href='#' download>
                                                            <img src='/download-icon.svg' alt='download icon' />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                                    <div className='flex justify-between items-center space-x-[11.83px]'>
                                                        <img src='pdf-icon.svg' alt='pdf icon' />
                                                        <p>
                                                            Presentación
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <a href='#' download>
                                                            <img src='/download-icon.svg' alt='download icon' />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                                    <div className='flex justify-between items-center space-x-[11.83px]'>
                                                        <img src='anexes-icon.svg' alt='anexes icon' />
                                                        <p>
                                                            Anexos
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <a href='#' download>
                                                            <img src='/download-icon.svg' alt='download icon' />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                                    <div className='flex justify-between items-center space-x-[11.83px]'>
                                                        <img src='webinar-icon.svg' alt='webinar icon' />
                                                        <p>
                                                            Webinar presentación
                                                        </p>
                                                    </div>
                                                    <div className='transform -translate-x-2'>
                                                        <a href='#' download>
                                                            <img src='/arrow-reports-right.svg' alt='arriw icon' />
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className='text-right text-grey-dark italic mt-[18.17px]'>
                                                Publicado el 02 de diciembre de 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-12 lg:py-16 xl:py-20 bg-blue-ocean bg-opacity-[0.06]'>
                <div className='mx-auto w-11/12 max-w-screen-xl'>
                    <h3 className='text-blue-dark font-bold text-xl 2xl:text-2xl'>
                        Recorrido histórico de normas relacionadas a la Economía Circular
                    </h3>
                </div>
            </div>

            <div className='py-12 lg:py-16 xl:py-20'>
                <div className='mx-auto w-11/12 max-w-screen-xl'>
                    <div className='space-y-[71.84px]'>
                        <div className='max-w-[518px] mx-auto'>
                            <h2 className='text-2xl 2xl:text-[32px] text-center text-blue-ocean'>
                                <span className='font-bold'>Indicadores de países líderes</span> en la medición de Economía Circular
                            </h2>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[38.3px] gap-y-[44.93px]'>
                            {
                                indicatorCountryData.map((item, index) => <IndicatorCountryCard key={`indicator-${index + 1}`} item={item} />)
                            }
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
