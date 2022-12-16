import classNames from 'classnames'

export default function Timeline ({ year, data, direction }) {
  return (
    <div
      className={classNames('timeline relative flex-shrink-0 w-64', {
        'timeline-top': direction === 'top'
      })}
    >
      <div
        className={classNames('flex', {
          'flex-col-reverse': direction === 'top',
          'flex-col': direction === 'bottom'
        })}
      >
        <p className={classNames('w-[78px] h-[78px] font-bold text-xl 3xl:text-2xl rounded-full flex items-center justify-center text-white', {
          'bg-blue-dark': direction === 'top',
          'bg-blue-ocean': direction === 'bottom'
        })}>
          {year}
        </p>
        <ul
          className={classNames('pl-2 space-y-2', {
            'mt-4': direction === 'bottom',
            'mb-4': direction === 'top'
          })}
        >
          {data.map((item, index) => (
            <li key={index}>
              <span>-</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
