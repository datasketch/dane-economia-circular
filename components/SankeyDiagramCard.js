export const SankeyDiagramCard = ({ item }) => {
  const { title, description, link } = item
  return (
        <div className='pt-[28.65px] pl-[42px] pr-[45px] h-[342px] border-blue-ocean border-[3px] rounded-tr-[100px] relative'>
            <div className='space-y-4'>
                <div className='flex items-center gap-x-4'>
                    <img src='/diagram-icon.svg' alt='diagram icon' />
                    <h4 className='xl:text-lg text-blue-5'>
                        Diagrama de Sankey
                    </h4>
                </div>
                <h3 className='font-bold text-lg xl:text-xl'>
                    {title}
                </h3>
                <p className='text-sm'>
                    {description}
                </p>
            </div>
            <div className='absolute -bottom-[3px] -right-[3px]'>
                <a href={link} target='_blank' className='inline-flex items-center space-x-[12.83px] text-white font-bold xl:text-lg bg-pink py-[9px] px-[42.49px] rounded-tr-[20px] rounded-bl-[20px]' rel="noreferrer">
                    <p>
                        Ver más
                    </p>
                    <img className='w-[11.18px] h-[11.86px]' src='/link-arrow-icon.svg' alt='link arrow icon' />
                </a>
            </div>
        </div>
  )
}
