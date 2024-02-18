import React from 'react'
import Link from 'next/link'

import { Footer, SocialMedia } from '../../../../payload/payload-types'
import { fetchFooter, fetchSocialMedia } from '../../../_api/fetchGlobals'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null
  let socialMedia: SocialMedia | null = null

  try {
    footer = await fetchFooter();
    socialMedia = await fetchSocialMedia();
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className={classes.footer}>
      Footer
      <nav className={classes.nav}>
        {navItems.map(({ link }, i) => {
          // return <CMSLink key={i} {...link} />
          return <p>{link.label}</p>
        })}
      </nav>
    </footer>
  )
}
