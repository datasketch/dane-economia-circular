import Head from 'next/head'
import { useState } from 'react'
import { CircularEconomySubtableCard } from '../components/CircularEconomySubtableCard'
import { CircularEconomySubtablesModal } from '../components/CircularEconomySubtablesModal'

export default function InformationTable () {
  const [result, setResult] = useState({})
  const [selected, setSelected] = useState(false)
  const circularEconomySubtableData = [
    {
      id: 0,
      title: 'Envases y Empaques',
      srcImage: {
        small: '/envases-empaques.svg',
        big: '/envases-empaques-big.svg'
      },
      list: ['Validación de la oferta y las necesidades de información con actores.', 'Mesas de trabajo entre el Ministerio de Ambiente y Desarrollo Sostenible-MADS y el DANE para revisar el listado de productos de envases y empaques a partir de la Encuesta Anual Manufacturera -EAM. El DANE realiza la validación de la información solicitada por el MADS para tener una línea base de envases y empaques, de acuerdo con los códigos CPC identificados.'],
      results: ['Validación de la oferta y las necesidades de información estadística con todos los integrantes de la submesa.', 'Identificación de los actuales y potenciales responsables de dar respuesta a las necesidades de información.', 'Identificación de productos de envases y empaques de acuerdo con los códigos de la Clasificación Central de Productos - CPC Versión 2.0 A.C.', 'Revisión del listado de productos de envases y empaques reportados en la Encuesta Anual Manufacturera.']
    },
    {
      id: 1,
      title: 'Flujos de agua',
      srcImage: {
        small: '/flujos-agua.svg',
        big: '/flujos-agua-big.svg' || '/flujos-agua.svg'
      },
      list: ['Validación de la oferta y las necesidades de información con actores.', 'Mesas de trabajo entre el Ministerio de Ambiente y Desarrollo Sostenible-MADS y el DANE para revisar el listado de productos de envases y empaques a partir de la Encuesta Anual Manufacturera -EAM. El DANE realiza la validación de la información solicitada por el MADS para tener una línea base de envases y empaques, de acuerdo con los códigos CPC identificados.'],
      results: ['Validación de la oferta y las necesidades de información estadística con todos los integrantes de la submesa.', 'Identificación de los actuales y potenciales responsables de dar respuesta a las necesidades de información.', 'Identificación de productos de envases y empaques de acuerdo con los códigos de la Clasificación Central de Productos - CPC Versión 2.0 A.C.', 'Revisión del listado de productos de envases y empaques reportados en la Encuesta Anual Manufacturera.']
    },
    {
      id: 2,
      title: 'Fuentes y flujos de energía',
      srcImage: {
        small: '/fuentes-flujos-energia.svg',
        big: '/fuentes-flujos-energia-big.svg' || '/fuentes-flujos-energia.svg'
      },
      list: ['Validación de la oferta y las necesidades de información con actores.', 'Mesas de trabajo entre el Ministerio de Ambiente y Desarrollo Sostenible-MADS y el DANE para revisar el listado de productos de envases y empaques a partir de la Encuesta Anual Manufacturera -EAM. El DANE realiza la validación de la información solicitada por el MADS para tener una línea base de envases y empaques, de acuerdo con los códigos CPC identificados.'],
      results: ['Validación de la oferta y las necesidades de información estadística con todos los integrantes de la submesa.', 'Identificación de los actuales y potenciales responsables de dar respuesta a las necesidades de información.', 'Identificación de productos de envases y empaques de acuerdo con los códigos de la Clasificación Central de Productos - CPC Versión 2.0 A.C.', 'Revisión del listado de productos de envases y empaques reportados en la Encuesta Anual Manufacturera.']
    },
    {
      id: 3,
      title: 'Materiales industriales y productos de consumo masivo',
      srcImage: {
        small: '/materiales-industriales.svg',
        big: '/materiales-industriales-big.svg' || '/materiales-industriales.svg'
      },
      list: ['Validación de la oferta y las necesidades de información con actores.', 'Mesas de trabajo entre el Ministerio de Ambiente y Desarrollo Sostenible-MADS y el DANE para revisar el listado de productos de envases y empaques a partir de la Encuesta Anual Manufacturera -EAM. El DANE realiza la validación de la información solicitada por el MADS para tener una línea base de envases y empaques, de acuerdo con los códigos CPC identificados.'],
      results: ['Validación de la oferta y las necesidades de información estadística con todos los integrantes de la submesa.', 'Identificación de los actuales y potenciales responsables de dar respuesta a las necesidades de información.', 'Identificación de productos de envases y empaques de acuerdo con los códigos de la Clasificación Central de Productos - CPC Versión 2.0 A.C.', 'Revisión del listado de productos de envases y empaques reportados en la Encuesta Anual Manufacturera.']
    },
    {
      id: 4,
      title: 'Materiales de construccion',
      srcImage: {
        small: '/materiales-construccion.svg',
        big: '/materiales-construccion-big.svg' || '/materiales-construccion.svg'
      },
      list: ['Validación de la oferta y las necesidades de información con actores.', 'Mesas de trabajo entre el Ministerio de Ambiente y Desarrollo Sostenible-MADS y el DANE para revisar el listado de productos de envases y empaques a partir de la Encuesta Anual Manufacturera -EAM. El DANE realiza la validación de la información solicitada por el MADS para tener una línea base de envases y empaques, de acuerdo con los códigos CPC identificados.'],
      results: ['Validación de la oferta y las necesidades de información estadística con todos los integrantes de la submesa.', 'Identificación de los actuales y potenciales responsables de dar respuesta a las necesidades de información.', 'Identificación de productos de envases y empaques de acuerdo con los códigos de la Clasificación Central de Productos - CPC Versión 2.0 A.C.', 'Revisión del listado de productos de envases y empaques reportados en la Encuesta Anual Manufacturera.']
    },
    {
      id: 5,
      title: 'Biomasa',
      srcImage: {
        small: '/biomasa.svg',
        big: '/biomasa-big.svg' || '/biomasa.svg'
      },
      list: ['Validación de la oferta y las necesidades de información con actores.', 'Mesas de trabajo entre el Ministerio de Ambiente y Desarrollo Sostenible-MADS y el DANE para revisar el listado de productos de envases y empaques a partir de la Encuesta Anual Manufacturera -EAM. El DANE realiza la validación de la información solicitada por el MADS para tener una línea base de envases y empaques, de acuerdo con los códigos CPC identificados.'],
      results: ['Validación de la oferta y las necesidades de información estadística con todos los integrantes de la submesa.', 'Identificación de los actuales y potenciales responsables de dar respuesta a las necesidades de información.', 'Identificación de productos de envases y empaques de acuerdo con los códigos de la Clasificación Central de Productos - CPC Versión 2.0 A.C.', 'Revisión del listado de productos de envases y empaques reportados en la Encuesta Anual Manufacturera.']
    }
  ]

  const showModal = (e) => {
    const id = e.target.closest('div').getAttribute('data-id')
    setResult(circularEconomySubtableData.find(item => item.id === +id))
    setSelected(true)
  }

  return (
        <>
            <Head>
                <title>Mesa de Información de Economía Circular | DANE</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='py-12 lg:py-16 xl:py-20'>
                <div className='mx-auto w-10/12 max-w-screen-lim'>
                    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8 gap-x-[108px]'>
                        <div className='lg:w-6/12'>
                            <div className='space-y-7'>
                                <h2 className='text-blue-ocean text-2xl 3xl:text-[32px]'>
                                    <span className='font-bold'>Mesa de información</span> de Economía Circular - MIEC
                                </h2>
                                <p>
                                    Se consolidó en mayo de 2019 en línea con la Estrategia Nacional de Economía Circular – ENEC y busca articular a las entidades del Sistema Estadístico Nacional – SEN para la identificación, fortalecimiento y generación de información relevante y oportuna requerida en la toma de decisiones y la evaluación de la política pública asociada a la Economía Circular. Desde 2021 se establecieron 6 submesas al articular la submesas de materiales industriales y la submesa de consumo masivo.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <div className='space-y-7'>
                                <p>
                                    En coherencia con las lineas prioritarias de la Estrategia Nacional de Economía Circular - ENEC, en un trabajo conjunto con el Ministerio de Ambiente y Desarrollo Sostenible, se identificó la necesidad de articular la submesa de materiales industriales y la submesa de consumo masivo. En este sentido para el 2021 se desarrollarán 6 submesas.
                                </p>
                                <p>
                                    El objetivo de las submesas de información es dentificar, organizar, producir y fortalecer la información estadística sobre *cada tema específico de la submesa* necesaria para la toma de decisiones, la formulación y evaluación de la política pública asociada a la economía circular.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-10/12 max-w-screen-lim'>
                <div className='bg-blue-4 text-white pt-[63px] pb-[80.51px] rounded-tr-[140px] overflow-hidden'>
                    <div className='space-y-[60px]'>
                        <div className='max-w-[556px] w-10/12 mx-auto text-center space-y-4'>
                            <h3 className='text-lg 2xl:text-[24px] font-bold'>
                                Submesas Economía Circular
                            </h3>
                            <p>
                                Para avanzar en la medición de la Economía Circular se establecieron las siguientes submesas de información:
                            </p>
                        </div>
                        <div className='mx-auto w-10/12'>
                            <div onClick={showModal} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 2xl:gap-y-[58px]'>
                                {
                                    circularEconomySubtableData.map((item, index) => <CircularEconomySubtableCard key={`circular-economy-${index + 1}`} item={item} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-12 lg:py-16 xl:py-[72px]'>
                <div className='mx-auto w-10/12 max-w-screen-lim'>
                    <div className='space-y-8'>
                        <div className='max-w-[437px] mx-auto text-center'>
                            <h3 className='3xl:text-lg font-bold'>
                                A través del desarrollo de las submesas se consolidarán los siguientes productos:
                            </h3>
                        </div>
                        <div className='mx-auto w-11/12'>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 3xl:gap-y-9 3xl:gap-x-[131px]'>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Inventario de operaciones estadísticas relacionadas con Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Inventario de registros administrativos relacionados con Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Batería de indicadores relevantes para la Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Inventario de requerimientos o necesidades de información estadística sobre Economía Circular.
                                    </p>
                                </div>
                                <div className='flex space-x-[12.63px]'>
                                    <img className='w-[22.63px] h-[24.01px]' src='arrow-right-purple.svg' alt='arrow right' />
                                    <p>
                                        Estrategia para dar respuesta a las necesidades de información estadística priorizadas.
                                    </p>
                                </div>
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

            <CircularEconomySubtablesModal item={result} selected={selected} setSelected={setSelected} />
        </>
  )
}
