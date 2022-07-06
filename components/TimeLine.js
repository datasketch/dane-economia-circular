export const TimeLine = ({ item, color, directionList }) => {
  const { year, list } = item
  return (
        <div className="relative py-80">
            {
                directionList === 'top' &&
                (
                    <ul className={'absolute top-0 left-0 border-blue-dark border-l-[3px] h-1/2 pl-[15.21px] space-y-[19px]'}>
                        {list.map((item, index) => {
                          return (
                                <li key={`list-${index + 1}`} className="min-w-[167px] text-sm relative">
                                    {item}
                                    <div className="absolute top-2.5 -left-4 w-[9px] bg-blue-dark h-[3px]">&nbsp;</div>
                                </li>
                          )
                        })}
                    </ul>
                )
            }
            <div className={`w-[78px] h-[78px] rounded-full grid place-items-center bg-${color} relative z-10`}>
                <p className="font-bold text-white text-xl xl:text-2xl">
                    {year}
                </p>
            </div>
            {
                directionList === 'bottom' &&
                (
                    <ul className={'absolute bottom-0 left-0 border-blue-ocean border-l-[3px] h-1/2 pl-[15.21px] space-y-[19px] flex flex-col-reverse'}>
                        {list.map((item, index) => {
                          return (
                                <li key={`list-${index + 1}`} className="min-w-[167px] text-sm relative">
                                    {item}
                                    <div className="absolute top-2.5 -left-4 w-[9px] bg-blue-ocean h-[3px]">&nbsp;</div>
                                </li>
                          )
                        })}
                    </ul>
                )
            }
        </div>
  )
}
