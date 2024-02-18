'use client'

import React from 'react'
import Link from 'next/link'

import { MegaMenu as MegaMenuType } from '../../../../../../payload/payload-types'
import { CMSLink } from '../../../../Link'

import classes from './index.module.scss'

export const Navigation: React.FC<{ megaMenu: MegaMenuType }> = ({ megaMenu }) => {
  const navItems = megaMenu?.navigation || []

  return (
    <nav
      className={classes.nav}
    >
      {navItems.map(({ link }, i) => {
        // return <CMSLink key={i} {...link} appearance="none" />
        return <p>{link.label}</p>
      })}
    </nav>
  )
}
