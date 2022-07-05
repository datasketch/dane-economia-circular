export const CircularEconomyReport = ({ item, isLastReport = false }) => {
  const { title, titleReportLink, reportLink, presentationLink, attachmentsLink, webinarLink, date } = item
  console.log(title)
  return (
        <div className='border-[3px] border-blue-ocean rounded-tr-[100px] pt-[45.57px] pb-[29.83px] pl-[47px] pr-[49.41px] relative'>
            <div className='flex flex-col items-center xl:flex-row xl:justify-between gap-y-6 xl:gap-x-8'>
                <div className='max-w-[184px] w-full'>
                    <div>
                        <img src='/reporte-prueba.png' alt='reporte prueba' />
                    </div>
                </div>
                <div className='max-w-[385px] w-full'>
                    <div>
                        <h4 className='font-bold 2xl:text-lg'>
                            {title}
                        </h4>
                        <ul className='mt-[2.6px]'>
                            <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='pdf-icon.svg' alt='pdf icon' />
                                    <p>
                                        {titleReportLink}
                                    </p>
                                </div>
                                <a className="inline-flex space-x-[11.45px] items-center max-w-[136.69px] w-full" href={reportLink} download={titleReportLink}>
                                    <p className='text-pink font-bold xl:text-lg'>
                                        Descargar
                                    </p>
                                    <img src='/download-icon.svg' alt='download icon' />
                                </a>
                            </li>
                            <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='pdf-icon.svg' alt='pdf icon' />
                                    <p>
                                        Presentación
                                    </p>
                                </div>
                                <a className="inline-flex space-x-[11.45px] items-center max-w-[136.69px] w-full" href={presentationLink} download={`Presentación ${titleReportLink}`}>
                                    <p className='text-pink font-bold xl:text-lg'>
                                        Descargar
                                    </p>
                                    <img src='/download-icon.svg' alt='download icon' />
                                </a>
                            </li>
                            <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='anexes-icon.svg' alt='anexes icon' />
                                    <p>
                                        Anexos
                                    </p>
                                </div>
                                <a className="inline-flex space-x-[11.45px] items-center max-w-[136.69px] w-full" href={attachmentsLink} download={`Anexos ${titleReportLink}`}>
                                    <p className='text-pink font-bold xl:text-lg'>
                                        Descargar
                                    </p>
                                    <img src='/download-icon.svg' alt='download icon' />
                                </a>
                            </li>
                            <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='webinar-icon.svg' alt='webinar icon' />
                                    <p>
                                        Webinar presentación
                                    </p>
                                </div>
                                <a className="inline-flex justify-between space-x-[11.45px] items-center max-w-[136.69px] w-full" href={webinarLink}>
                                    <p className='text-pink font-bold xl:text-lg'>
                                        Consultar
                                    </p>
                                    <img className="transform -translate-x-2" src='/arrow-reports-right.svg' alt='arriw icon' />
                                </a>
                            </li>
                        </ul>
                        <p className='text-right text-grey-dark italic mt-[18.17px]'>
                            Publicado el {new Intl.DateTimeFormat('es-CO', { dateStyle: 'full' }).format(date)}
                        </p>
                    </div>
                </div>
            </div>
            {isLastReport &&
                <div className='absolute -top-6 -left-[3px] inline-block bg-blue-ocean text-white font-bold text-sm pt-[13px] pb-[10px] pl-[47px] pr-[46px] rounded-tr-[20px] overflow-hidden'>
                    <p>
                        Último reporte
                    </p>
                </div>
            }
        </div>
  )
}
