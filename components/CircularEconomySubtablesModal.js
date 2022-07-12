export const CircularEconomySubtablesModal = ({ item, selected, setSelected }) => {
  const { title = '', list = [], results = [], srcImage } = item
  const closeModal = () => {
    setSelected(false)
  }
  return (
        <>
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full duration-500 ${selected ? 'scale-100 visible opacity-100' : 'scale-0 invisible opacity-0'}`}>
                <div className='mx-auto w-11/12 max-w-[1104px] h-[75vh]'>
                    <div className='bg-blue-dark p-8 xl:pt-[55px] xl:pb-[64px] xl:pl-[80.98px] xl:pr-[126px] h-[75vh] lg:h-full overflow-y-auto relative'>
                        <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-x-12 gap-y-8'>
                            <div className='max-w-[271.91px] w-full self-center lg:self-start'>
                                <img className="max-w-full w-[271.91px] h-[337px]" src={srcImage?.small} alt={`${title.toLowerCase()} image`} />
                            </div>
                            <div className='max-w-[555px] w-full'>
                                <div className='text-white space-y-[38px]'>
                                    <div className='space-y-[17px]'>
                                        <h3 className='text-blue-6 font-bold text-xl xl:text-2xl'>
                                            Submesa de {title.toLowerCase()}
                                        </h3>
                                        <ul className='space-y-4'>
                                            {
                                                list.map((item, index) => {
                                                  return (<li key={`list-${index + 1}`} className='flex space-x-[12.63px] items-start'>
                                                        <img src='arrow-right-blue-medium.svg' alt='arrow right' />
                                                        <p>
                                                            {item}
                                                        </p>
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className='space-y-[17px]'>
                                        <h3 className=' font-bold text-xl xl:text-2xl'>
                                            Resultados
                                        </h3>
                                        <ul className='space-y-4'>
                                            {
                                                results.map((item, index) => {
                                                  return typeof item !== 'object'
                                                    ? (<li key={`results-${index + 1}`} className='flex space-x-[12.63px] items-start'>
                                                            <img src='arrow-right-blue-medium.svg' alt='arrow right' />
                                                            <p>
                                                                {item}
                                                            </p>
                                                        </li>)
                                                    : (
                                                            <li className="space-y-4" key={`results-${index + 1}`}>
                                                                <div>
                                                                    <p>
                                                                        {item.title}
                                                                    </p>
                                                                </div>
                                                                <ul className="mx-auto w-10/12 list-inside list-disc space-y-2">
                                                                    {
                                                                        item.results.map((result, idx) => {
                                                                          return (
                                                                                <li key={`result-${idx + 1}`} className='flex space-x-[12.63px] items-start'>
                                                                                    <img className="w-3" src='arrow-right-blue-medium.svg' alt='arrow right' />
                                                                                    <p>
                                                                                        {result}
                                                                                    </p>
                                                                                </li>
                                                                          )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </li>
                                                      )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeModal} className='absolute top-4 right-4'>
                            <img src='/close-modal.png' alt='close modal' />
                        </button>
                    </div>
                </div>
            </div>
            <div onClick={closeModal} className={`fixed top-0 left-0 w-full h-screen bg-rich-black bg-opacity-[0.45] z-20 cursor-pointer duration-500 ${selected ? 'visible opacity-100' : 'invisible opacity-0'}`}>&nbsp;</div>
        </>
  )
}
