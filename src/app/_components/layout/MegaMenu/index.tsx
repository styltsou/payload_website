{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react';
import Link from 'next/link';

import { MegaMenu, SocialMedia } from '../../../../payload/payload-types';
import { fetchMegaMenu, fetchSocialMedia } from '../../../_api/fetchGlobals';
import { Logo } from '../../icons/Logo';

import classes from './index.module.scss';
import { Hamburger } from './Hamburger';
import { MenuModal } from './MenuModal';

export async function MegaMenu() {
  let megaMenu: MegaMenu | null = null;
  let socialMedia: SocialMedia | null = null;

  try {
    megaMenu = await fetchMegaMenu();
    // socialMedia = await fetchSocialMedia();
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    console.error(error)
  }

  return (
    <header className={classes.header}>
      <Link className={classes.logoBox} href="/">
        <Logo className={classes.logo} />
      </Link>
      <Hamburger />
      <MenuModal menu={megaMenu} socialMedia={socialMedia} />
    </header>
  );
}