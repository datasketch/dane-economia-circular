import Link from 'next/link'
import React, { Children, useEffect, useState } from 'react'

export default function CustomLink ({ children, ...restProps }) {
  const child = Children.only(children)
  const [target, setTarget] = useState('_self')

  useEffect(() => {
    const isIframe = window.self !== window.top
    if (isIframe) setTarget('_top')
  }, [])

  return (
    <Link {...restProps}>
      {React.cloneElement(child, {
        ...child.props,
        target
      })}
    </Link>
  )
}
