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
    if (window.self !== window.top) {
      setTarget('_top')
    }
    if (parentDomain) {
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
