export const IndicatorCountryCard = ({ item }) => {
  const { bgImage, country, link } = item
  return (
        <div className='bg-cover bg-center max-w-[463.7px] h-[401.07px] w-full rounded-tr-[50px] overflow-hidden relative mx-auto' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${bgImage}"` }}>
            <div className='absolute left-0 bottom-0 bg-white bg-opacity-90 rounded-tr-[50px] overflow-hidden w-full pt-[30px] pb-[34.26px] text-center'>
                <h4 className='text-xl 2xl:text-2xl font-bold text-blue-dark'>
                    {country}
                </h4>
                <a href={link} target='_blank' className='italic text-blue-ocean underline' rel="noreferrer">
                    {link}
                </a>
            </div>
        </div>
  )
}