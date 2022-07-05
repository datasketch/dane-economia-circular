import Head from 'next/head'
import { CircularEconomyReport as Report } from '../components/CircularEconomyReport'
import { SankeyDiagramCard } from '../components/SankeyDiagramCard'

export default function CircularEconomyReport () {
  const circularEconomyReportNames = [
    {
      title: 'Primer reporte de Economía Circular',
      titleReportLink: 'Primer reporte',
      reportLink: '#',
      presentationLink: '#',
      attachmentsLink: '#',
      webinarLink: '#',
      date: new Date(2020, 8, 5)
    },
    {
      title: 'Segundo reporte de Economía Circular',
      titleReportLink: 'Segundo reporte',
      reportLink: '#',
      presentationLink: '#',
      attachmentsLink: '#',
      webinarLink: '#',
      date: new Date(2020, 12, 11)
    },
    {
      title: 'Tercer reporte de Economía Circular',
      titleReportLink: 'Tercer reporte',
      reportLink: '#',
      presentationLink: '#',
      attachmentsLink: '#',
      webinarLink: '#',
      date: new Date(2021, 7, 28)
    },
    {
      title: 'Cuarto reporte de Economía Circular',
      titleReportLink: 'Cuarto reporte',
      reportLink: '#',
      presentationLink: '#',
      attachmentsLink: '#',
      webinarLink: '#',
      date: new Date(2021, 12, 2)
    }
  ]

  const sankeyDiagramData = [
    {
      title: 'Flujo de materiales de residuos sólidos y productos residuales:',
      description: 'Presenta para 2018p el flujo de toneladas de residuos sólidos producidos por los hogares, las actividades económicas y el resto del mundo en los procesos de produccion, consumo y acumulacion; la utilizacion de dichos materiales segun componente; y finalmente, la recirculacion de materiales.',
      link: '#'
    },
    {
      title: 'Flujo de materiales de residuos sólidos y productos residuales:',
      description: 'Presenta para 2018p el flujo de toneladas de residuos sólidos producidos por los hogares, las actividades económicas y el resto del mundo en los procesos de produccion, consumo y acumulacion; la utilizacion de dichos materiales segun componente; y finalmente, la recirculacion de materiales.',
      link: '#'
    },
    {
      title: 'Flujo de materiales de residuos sólidos y productos residuales:',
      description: 'Presenta para 2018p el flujo de toneladas de residuos sólidos producidos por los hogares, las actividades económicas y el resto del mundo en los procesos de produccion, consumo y acumulacion; la utilizacion de dichos materiales segun componente; y finalmente, la recirculacion de materiales.',
      link: '#'
    },
    {
      title: 'Flujo de materiales de residuos sólidos y productos residuales:',
      description: 'Presenta para 2018p el flujo de toneladas de residuos sólidos producidos por los hogares, las actividades económicas y el resto del mundo en los procesos de produccion, consumo y acumulacion; la utilizacion de dichos materiales segun componente; y finalmente, la recirculacion de materiales.',
      link: '#'
    },
    {
      title: 'Flujo de materiales de residuos sólidos y productos residuales:',
      description: 'Presenta para 2018p el flujo de toneladas de residuos sólidos producidos por los hogares, las actividades económicas y el resto del mundo en los procesos de produccion, consumo y acumulacion; la utilizacion de dichos materiales segun componente; y finalmente, la recirculacion de materiales.',
      link: '#'
    },
    {
      title: 'Flujo de materiales de residuos sólidos y productos residuales:',
      description: 'Presenta para 2018p el flujo de toneladas de residuos sólidos producidos por los hogares, las actividades económicas y el resto del mundo en los procesos de produccion, consumo y acumulacion; la utilizacion de dichos materiales segun componente; y finalmente, la recirculacion de materiales.',
      link: '#'
    }
  ]
  return (
        <>
            <Head>
                <title>Reporte de Economía Circular - Cuarto reporte | DANE</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='mx-auto w-10/12 max-w-screen-xl'>
                <div className='py-12 lg:py-16 xl:py-20'>
                    <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-x-12 xl:gap-x-[170px]'>
                        <div className='max-w-[710px] w-full'>
                            <div className='space-y-[56px]'>
                                <div className='max-w-[593px]'>
                                    <div className='space-y-[29.5px]'>
                                        <div>
                                            <h2 className='text-blue-ocean text-2xl xl:text-[32px]'>
                                                <span className='font-bold'>Cuarto reporte</span> de Economía Circular
                                            </h2>
                                            <p className='italic text-grey-dark'>
                                                Publicado el 02 de diciembre de 2021
                                            </p>
                                        </div>
                                        <p>
                                            Este Cuarto Reporte de Economía Circular consolida información estadística de 3 entidades en 35 indicadores categorizados en 4 componentes que facilitan la compresión y el análisis del modelo económico circular, y su relación e impacto con el ambiente y los recursos naturales. También incluye 4 diagramas de Sankey.
                                        </p>
                                    </div>
                                </div>
                                <Report item={circularEconomyReportNames[circularEconomyReportNames.length - 1]} />
                            </div>
                        </div>
                        <div className='max-w-[593px] w-full self-end'>
                            <div className='space-y-[30px]'>
                                <h3 className='font-bold text-blue-dark lg:text-xl xl:text-2xl'>
                                    Diagramas de Sankey
                                </h3>
                                <div className='space-y-4'>
                                    <p>
                                        Un diagrama de Sankey es la representación gráfica de información sobre cualquier proceso de transferencia entre dos o más unidades que intercambian materiales, energía, dinero, entre otros. La lógica del diagrama es conectar los flujos por medio de flechas que conectan procesos en nodos o etapas, desde un emisor hacia un receptor.
                                    </p>
                                    <p>
                                        El Segundo Reporte, presenta 6 diagramas de Sankey que representan los flujos de la Cuenta Satélite Ambiental - CSA, 5 representados en flujos físicos, para temáticas como energía, agua, bosque y materiales (residuos sólidos y emisiones al aire), y uno, en flujos monetarios que muestra el financiamiento y gasto del gobierno en actividades ambientales. Para el Tercer Reporte, se actualiza el periodo de referencia del diagrama de Sankey de flujos de productos energéticos y flujo de troncos de madera.
                                    </p>
                                </div>
                                <div className='inline-flex justify-between bg-blue-ocean bg-opacity-[0.08] pl-[13.41px] pr-[26.96px] pt-[14.66px] pb-[14.25px] max-w-[386.28px] w-full'>
                                    <div className='flex space-x-[11.45px] items-center'>
                                        <img src='webinar-icon.svg' alt='webinar icon' />
                                        <p className='xl:text-[19px]'>
                                            Video instructivo
                                        </p>
                                    </div>
                                    <a href='#' className='flex space-x-[11.19px] items-center'>
                                        <p className='text-pink font-bold xl:text-lg'>
                                            Consultar
                                        </p>
                                        <img src='/arrow-reports-right.svg' alt='arriw icon' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#FBFBFB' }}>
                <div className='mx-auto w-10/12 max-w-screen-xl'>
                    <img src='/reporte-prueba.jpg' alt='reporte prueba' />
                </div>
            </div>

            <div className='py-8 lg:py-12 xl:py-[54px]'>
                <div className='mx-auto w-10/12 max-w-screen-xl'>
                    <div className='space-y-[68px]'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-x-[54px] xl:gap-y-[42px]'>
                            {
                                sankeyDiagramData.map((item, index) => <SankeyDiagramCard key={`sankey-${index + 1}`} item={item} />)
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
