import Head from 'next/head'
import { CircularEconomyReport as Report } from '../../components/CircularEconomyReport'
import { SankeyDiagramCard } from '../../components/SankeyDiagramCard'
import { LogoDatasketch } from '../../components/LogoDatasketch'
import data from '../../data/reports.json'

export async function getStaticPaths () {
  return {
    paths: [{ params: { id: 'cuarto-reporte' } }, { params: { id: 'quinto-reporte' } }],
    fallback: false
  }
}

export async function getStaticProps (context) {
  const id = context.params.id
  const report = data.filter(item => item.titleReportLink.replace(' ', '-').toLowerCase() === id)
  return {
    props: { report } // will be passed to the page component as props
  }
}

export default function CircularEconomyReport ({ report }) {
  const { titleReportLink, date, webinarLink, description, sankeyDiagramData } = report[0]
  return (
    <>
      <Head>
        <title>Reporte de Economía Circular - {titleReportLink} | DANE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mx-auto w-10/12 max-w-screen-lim'>
        <div className='py-12 lg:py-16 xl:py-20'>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-y-8 gap-x-12'>
            <div className='lg:w-1/2 max-w-[710px]'>
              <div className='space-y-[56px]'>
                <div className='max-w-[593px]'>
                  <div className='space-y-[29.5px]'>
                    <div>
                      <h2 className='text-blue-ocean text-2xl xl:text-[32px]'>
                        <span className='font-bold'>{titleReportLink}</span> de Economía Circular
                      </h2>
                      <p className='italic text-grey-dark'>
                        Publicado el {new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(new Date(date))}
                      </p>
                    </div>
                    <p>
                      {description}
                    </p>
                  </div>
                </div>
                <Report item={report[0]} />
              </div>
            </div>
            <div className='lg:w-1/2 self-end max-w-[593px]'>
              <div className='space-y-[30px]'>
                <h3 className='font-bold text-blue-dark lg:text-xl xl:text-2xl'>
                  Diagramas de Sankey
                </h3>
                <div className='space-y-4'>
                  <p>
                    Un diagrama de Sankey es la representación gráfica de información sobre cualquier proceso de transferencia entre dos o más unidades que intercambian materiales, energía, dinero, entre otros. La lógica del diagrama es conectar los flujos por medio de flechas que conectan procesos en nodos o etapas, desde un emisor hacia un receptor.
                  </p>
                  <p>
                    El Segundo Reporte, presenta 6 diagramas de Sankey que representan los flujos de la Cuenta Satélite Ambiental - CSA, 5 representados en flujos físicos, para temáticas como energía, agua, bosque y materiales (residuos sólidos y emisiones al aire), y uno, en flujos monetarios que muestra el financiamiento y gasto del gobierno en actividades ambientales. Para el Quinto Reporte, se actualiza el período de referencia del diagrama de Sankey de flujos de productos energéticos.
                  </p>
                </div>
                <div className='inline-flex justify-between bg-blue-ocean bg-opacity-[0.08] pl-[13.41px] pr-[26.96px] pt-[14.66px] pb-[14.25px] max-w-[386.28px] w-full'>
                  <div className='flex space-x-[11.45px] items-center'>
                    <img src='/images/webinar-icon.svg' alt='webinar icon' />
                    <p className='xl:text-[19px]'>
                      Video instructivo
                    </p>
                  </div>
                  <a href={webinarLink} target="_blank" className='flex space-x-[11.19px] items-center' rel="noreferrer">
                    <p className='text-pink font-bold xl:text-lg'>
                      Consultar
                    </p>
                    <img src='/images/arrow-reports-right.svg' alt='arriw icon' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#FBFBFB' }}>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <img src='/images/reporte-prueba.jpg' alt='reporte prueba' />
        </div>
      </div>

      <div className='py-8 lg:py-12 xl:py-[54px]'>
        <div className='mx-auto w-10/12 max-w-screen-lim'>
          <div className='space-y-[68px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-x-[54px] xl:gap-y-[42px]'>
              {
                sankeyDiagramData.map((item, index) => <SankeyDiagramCard key={`sankey-${index + 1}`} item={item} />)
              }
            </div>
            <LogoDatasketch />
          </div>
        </div>
      </div>
    </>
  )
}
