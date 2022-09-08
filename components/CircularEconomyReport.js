import CustomLink from './CustomLink'

export const CircularEconomyReport = ({ item, isLastReport = false, showLinkButton = false, showBorder = 'true' }) => {
  const { title, titleReportLink, reportLink, presentationLink, attachmentsLink, date, srcImage, mipeaDocumentLink, mipeaExcelLink, webinarLink } = item
  return (
    <div className={`${showBorder && 'border-[3px] border-blue-ocean rounded-tr-[100px] relative pt-9 pb-6 px-12 hover:border-pink duration-300'}`}>
      <div className={`flex flex-col items-center xl:flex-row ${showBorder && 'xl:justify-betweengap-y-6 xl:gap-x-8'}`}>
        <div className={`w-full ${showBorder ? 'max-w-[184px]' : 'max-w-[201.77px]'}`}>
          <img className='mb-5' src={srcImage} alt={title + ' image'} />
          {
            showLinkButton && (
              <CustomLink href={`/reportes-de-economia-circular/${titleReportLink.replace(' ', '-').toLowerCase()}`}>
                <a className='inline-flex items-center gap-x-[21.83px] py-[11.5px] pl-[43.99px] pr-[37.99px] bg-pink text-white font-bold text-[14px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 duration-300 group'>
                  <span>
                    Ver más
                  </span>
                  <img className='group-hover:scale-150 duration-300' src='/images//link-arrow-icon.svg' alt='link arrow icon' />
                </a>
              </CustomLink>
            )
          }
        </div>
        <div className={`w-full ${showBorder ? 'max-w-[385px]' : 'max-w-[470.9px]'}`}>
          <div>
            {
              showBorder && (
                <h4 className='font-bold 2xl:text-lg'>
                  {title}
                </h4>
              )
            }
            <ul className='mt-[2.6px] space-y-2 sm:space-y-0'>
              <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center flex-col sm:flex-row gap-y-2'>
                <div className='flex justify-between items-center space-x-[11.83px] flex-col sm:flex-row gap-y-2'>
                  <img src='/images/pdf-icon.svg' alt='pdf icon' />
                  <p>
                    {titleReportLink}
                  </p>
                </div>
                <div className={`${!showBorder && 'flex items-center space-x-3.5'}`}>
                  {
                    !showBorder && (
                      <p className='font-bold text-sm text-pink hidden xl:block'>
                        Descargar
                      </p>
                    )
                  }
                  <a href={reportLink} target="_blank" rel="noreferrer">
                    <img src='/images/download-icon.svg' alt='download icon' />
                  </a>
                </div>
              </li>
              <li className='bg-blue-ocean bg-opacity-[0.08] py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center flex-col sm:flex-row gap-y-2'>
                <div className='flex justify-between items-center space-x-[11.83px] flex-col sm:flex-row gap-y-2'>
                  <img src='/images/pdf-icon.svg' alt='pdf icon' />
                  <p>
                    Presentación
                  </p>
                </div>
                <div className={`${!showBorder && 'flex items-center space-x-3.5'}`}>
                  {
                    !showBorder && (
                      <p className='font-bold text-sm text-pink hidden xl:block'>
                        Descargar
                      </p>
                    )
                  }
                  <a href={presentationLink} target="_blank" rel="noreferrer">
                    <img src='/images/download-icon.svg' alt='download icon' />
                  </a>
                </div>
              </li>
              <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center flex-col sm:flex-row gap-y-2'>
                <div className='flex justify-between items-center space-x-[11.83px] flex-col sm:flex-row gap-y-2'>
                  <img src='/images/anexes-icon.svg' alt='anexes icon' />
                  <p>
                    Anexos
                  </p>
                </div>
                <div className={`${!showBorder && 'flex items-center space-x-3.5'}`}>
                  {
                    !showBorder && (
                      <p className='font-bold text-sm text-pink hidden xl:block'>
                        Descargar
                      </p>
                    )
                  }
                  <a href={attachmentsLink} target="_blank" rel="noreferrer">
                    <img src='/images/download-icon.svg' alt='download icon' />
                  </a>
                </div>
              </li>
              {
                mipeaDocumentLink && (
                  <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center flex-col sm:flex-row gap-y-2'>
                    <div className='flex justify-between items-center space-x-[11.83px] flex-col sm:flex-row gap-y-2'>
                      <img src='/images/pdf-icon.svg' alt='pdf icon' />
                      <p className='text-sm'>
                        Anexo. Matriz insumo producto <br /> extendida ambientalmente (documento)
                      </p>
                    </div>
                    <div className={`${!showBorder && 'flex items-center space-x-3.5'}`}>
                      {
                        !showBorder && (
                          <p className='font-bold text-sm text-pink hidden xl:block'>
                            Descargar
                          </p>
                        )
                      }
                      <a href={mipeaDocumentLink} target="_blank" rel="noreferrer">
                        <img src='/images/download-icon.svg' alt='download icon' />
                      </a>
                    </div>
                  </li>
                )
              }
              {
                mipeaExcelLink && (
                  <li className='bg-blue-ocean bg-opacity-[0.08]  py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center flex-col sm:flex-row gap-y-2'>
                    <div className='flex justify-between items-center space-x-[11.83px] flex-col sm:flex-row gap-y-2'>
                      <img src='/images/anexes-icon.svg' alt='anexes icon' />
                      <p className='text-sm'>
                        Anexo. Matriz insumo producto <br /> extendida ambientalmente (Excel)
                      </p>
                    </div>
                    <div className={`${!showBorder && 'flex items-center space-x-3.5'}`}>
                      {
                        !showBorder && (
                          <p className='font-bold text-sm text-pink hidden xl:block'>
                            Descargar
                          </p>
                        )
                      }
                      <a href={attachmentsLink} download target="_blank" rel="noreferrer">
                        <img src='/images/download-icon.svg' alt='download icon' />
                      </a>
                    </div>
                  </li>
                )
              }
              <li className='py-[7.82px] pl-[13.08px] pr-[27.5px] flex justify-between items-center flex-col sm:flex-row gap-y-2'>
                <div className='flex justify-between items-center space-x-[11.83px] flex-col sm:flex-row gap-y-2'>
                  <img src='/images/webinar-icon.svg' alt='webinar icon' />
                  <p>
                    Webinar presentación
                  </p>
                </div>
                <div className={`transform md:-translate-x-3 ${!showBorder && 'flex items-center space-x-5'}`}>
                  {
                    !showBorder && (
                      <p className='font-bold text-sm text-pink hidden xl:block'>
                        Consultar
                      </p>
                    )
                  }
                  <a href={webinarLink} target="_blank" rel="noreferrer">
                    <img src='/images/arrow-reports-right.svg' alt='arrow right' />
                  </a>
                </div>
              </li>
            </ul>
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
