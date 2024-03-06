'use client';
{
	/* eslint-disable @next/next/no-img-element */
}

import React from 'react';
import Link from 'next/link';
import { useModal } from '@faceless-ui/modal';

import { Logo } from '../../../icons/Logo';
import { MENU_MODAL_SLUG } from '../MenuModal';
import { Hamburger } from './Hamburger';

import { cn } from '../../../../_utilities/cn';
import classes from './index.module.scss';

export function Header() {
	const { isModalOpen, toggleModal, closeModal } = useModal();

	const isActive = isModalOpen(MENU_MODAL_SLUG);

	return (
		<header className={classes.header}>
			<Link
				className={classes.logoBox}
				href="/"
				onClick={_ => isActive && closeModal(MENU_MODAL_SLUG)}
			>
				<Logo className={classes.logo} />
			</Link>
			<button
				type="button"
				className={cn(classes.menuButton, isActive && classes.active)}
				onClick={_ => toggleModal(MENU_MODAL_SLUG)}
			>
				<Hamburger isActive={isActive} />
			</button>
		</header>
	);
}
