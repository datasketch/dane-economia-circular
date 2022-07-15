import Link from 'next/link'

export const CircularEconomyReport = ({ item, isLastReport = false, showLinkButton = false }) => {
  const { title, titleReportLink, reportLink, presentationLink, attachmentsLink, webinarLink, date, srcImage } = item
  return (
        <div className='border-[3px] border-blue-ocean rounded-tr-[100px] relative pt-[45.57px] pb-[29.83px] pl-[47px] pr-[49.41px]'>
            <div className='flex flex-col items-center xl:flex-row xl:justify-between gap-y-6 xl:gap-x-8'>
                <div className='max-w-[184px] w-full'>
                    <img src={srcImage} alt={title + ' image'} />
                </div>
                <div className='max-w-[385px] w-full'>
                    <div>
                        <h4 className='font-bold 2xl:text-lg'>
                            {title}
                        </h4>
                        <ul className='mt-[2.6px]'>
                            <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='/pdf-icon.svg' alt='pdf icon' />
                                    <p>
                                        {titleReportLink}
                                    </p>
                                </div>
                                <div>
                                    <a href={reportLink} target="_blank" rel="noreferrer">
                                        <img src='/download-icon.svg' alt='download icon' />
                                    </a>
                                </div>
                            </li>
                            <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='/pdf-icon.svg' alt='pdf icon' />
                                    <p>
                                        Presentación
                                    </p>
                                </div>
                                <div>
                                    <a href={presentationLink} download target="_blank" rel="noreferrer">
                                        <img src='/download-icon.svg' alt='download icon' />
                                    </a>
                                </div>
                            </li>
                            <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='/anexes-icon.svg' alt='anexes icon' />
                                    <p>
                                        Anexos
                                    </p>
                                </div>
                                <div>
                                    <a href={attachmentsLink} download>
                                        <img src='/download-icon.svg' alt='download icon' />
                                    </a>
                                </div>
                            </li>
                            <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center'>
                                <div className='flex justify-between items-center space-x-[11.83px]'>
                                    <img src='/webinar-icon.svg' alt='webinar icon' />
                                    <p>
                                        Webinar presentación
                                    </p>
                                </div>
                                <div className='transform -translate-x-2'>
                                    <a href={webinarLink} download target="_blank" rel="noreferrer">
                                        <img src='/arrow-reports-right.svg' alt='arriw icon' />
                                    </a>
                                </div>
                            </li>
                        </ul>
                        {
                            showLinkButton && (
                                <Link href={`/reportes-de-economia-circular/${titleReportLink.replace(' ', '-').toLowerCase()}`}>
                                    <a className='inline-block mt-4 py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px]'>
                                        Leer más
                                    </a>
                                </Link>
                            )
                        }
                        <p className='text-right text-grey-dark italic mt-[18.17px]'>
                            Publicado el {new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' }).format(new Date(date))}
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
