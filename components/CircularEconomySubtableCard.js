export const CircularEconomySubtableCard = ({ item }) => {
  const { id, title, srcImage } = item
  const { small: src } = srcImage
  return (
        <div data-id={id} className='flex items-center cursor-pointer gap-x-8'>
            <img src={src} alt={title.toLowerCase()} />
            <p className='text-xl 2xl:text-2xl font-bold'>
                {title}
            </p>
        </div>
  )
}
