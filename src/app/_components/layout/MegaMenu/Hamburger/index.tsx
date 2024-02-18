'use client';
import React from 'react';
import { useModal } from '@faceless-ui/modal';
import classes from './index.module.scss';

import { MENU_MODAL_SLUG } from '../../../Modals/slugs';

export const Hamburger: React.FC = () => {
  const { isModalOpen, toggleModal } = useModal();

  const isActive = isModalOpen(MENU_MODAL_SLUG);

  return (
    <button className={classes.menuButton} onClick={_ => toggleModal(MENU_MODAL_SLUG)}>
      <div className={classes.burger} >
        {isActive ? 'c' : 'm'}
      </div>
    </button>
  );
};
