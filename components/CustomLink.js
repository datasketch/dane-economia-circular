import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CustomLink ({ children, ...restProps }) {
  const [target, setTarget] = useState('_self')
  useEffect(() => {
    const isIframe = window.self !== window.top
    if (isIframe) setTarget('_top')
  }, [])
  return (
    <Link {...restProps} target={target}>
      {children}
    </Link>
  )
}
