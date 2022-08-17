import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const SankeyDiagramCard = ({ item }) => {
  const { title, description, link } = item
  return (
    <div className='pt-[28.65px] pb-16 pl-[42px] pr-[45px] border-blue-ocean border-[3px] rounded-tr-[100px] max-w-[672px] relative'>
      <div className='space-y-4'>
        <div className='flex items-center gap-x-4'>
          <img src='/images/diagram-icon.svg' alt='diagram icon' />
          <h4 className='xl:text-lg text-blue-5'>
            Diagrama de Sankey
          </h4>
        </div>
        <h3 className='font-bold text-lg xl:text-xl'>
          {title}
        </h3>
        <ReactMarkdown className='text-sm' rehypePlugins={[rehypeRaw]}>
          {description}
        </ReactMarkdown>
      </div>
      <div className='absolute -bottom-[3px] -right-[3px]'>
        <a href={link} target='_blank' className='inline-flex items-center space-x-[12.83px] text-white font-bold xl:text-lg bg-pink py-[9px] px-[42.49px] rounded-tr-[20px] rounded-bl-[20px] hover:bg-pink-2 group duration-300' rel="noreferrer">
          <p>
            Ver más
          </p>
          <img className='w-[11.18px] h-[11.86px] group-hover:scale-150 duration-300' src='/images/link-arrow-icon.svg' alt='link arrow icon' />
        </a>
      </div>
    </div>
  )
}
