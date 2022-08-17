export const IndicatorCountryCard = ({ item }) => {
  const { bgImage, country, link, classNames } = item
  return (
    <div className={`bg-cover bg-center max-w-[463.7px] h-[401.07px] w-full rounded-tr-[50px] overflow-hidden relative mx-auto ${classNames} group`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${bgImage}"` }}>
      <div className='absolute left-0 bottom-0 bg-white bg-opacity-90 group-hover:bg-blue-dark group-hover:bg-opacity-90 rounded-tr-[50px] overflow-hidden w-full pt-[30px] pb-[34.26px] text-center duration-300 h-[83px] group-hover:h-1/2'>
        <div className="space-y-6 group-hover:space-y-0">
          <h4 className='font-bold text-blue-dark group-hover:text-blue-6'>
            {country}
          </h4>
          <div className="mx-auto w-11/12">
            {
              !Array.isArray(link)
                ? (
                  <a href={link} target='_blank' className='block italic text-blue-ocean underline group-hover:text-white duration-300' rel="noreferrer">
                    {link}
                  </a>
                  )
                : (
                  <div className="space-y-2">
                    {link.map((item, idx) => {
                      return (
                        <a key={`link-${idx + 1}`} href={item} target='_blank' className='block italic text-blue-ocean underline group-hover:text-white duration-300 truncate' rel="noreferrer">
                          {item}
                        </a>
                      )
                    })}
                  </div>
                  )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
