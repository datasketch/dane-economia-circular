import getConfig from 'next/config'
import Link from 'next/link'
import React, { Children, useEffect, useState } from 'react'

const { publicRuntimeConfig } = getConfig()

export default function CustomLink ({ children, ...restProps }) {
  const child = Children.only(children)
  const [target, setTarget] = useState('_self')
  const [href, setHref] = useState(restProps.href)
  const { parentDomain } = publicRuntimeConfig

  useEffect(() => {
    const isEmbeded = window.self !== window.top
    if (isEmbeded) {
      setTarget('_top')
    }
    if (parentDomain && isEmbeded) {
      setHref(prevState => `${parentDomain}${prevState}`)
    }
  }, [])

  return (
    <Link {...restProps} href={href}>
      {React.cloneElement(child, {
        ...child.props,
        target
      })}
    </Link>
  )
}
