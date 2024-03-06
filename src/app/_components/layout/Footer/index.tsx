import React from 'react';

import { Footer, SocialMedia } from '../../../../payload/payload-types';
import { fetchFooter, fetchSocialMedia } from '../../../_api/fetchGlobals';

import { Gutter } from '../Gutter';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { GridContainer } from '../GridContainer';
import { CustomLink } from '../../Link';
import { LetsTalk } from '../../LetsTalk';
import { ScrollToTop } from './ScrollToTop';

import classes from './index.module.scss';

export async function Footer() {
	let footer: Footer | null = null;
	let socialMedia: SocialMedia | null = null;

	try {
		footer = await fetchFooter();
		socialMedia = await fetchSocialMedia();
	} catch (error) {
		// When deploying this template on Payload Cloud, this page needs to build before the APIs are live
		// So swallow the error here and simply render the footer without nav items if one occurs
		// in production you may want to redirect to a 404  page or at least log the error somewhere
		console.error(error);
	}

	const navItems = footer?.navItems || [];
	const socialLinks = socialMedia?.links || [];

	return (
		<footer className={classes.footer}>
			<Gutter className={classes.bgWrapper} right>
				<div className={classes.background} />
			</Gutter>
			<GridContainer className={classes.contentGrid}>
				<Grid>
					<Cell cols={6} htmlElement="ul" className={classes.nav}>
						{navItems.map(navItem => (
							<li key={navItem.id}>
								<CustomLink {...navItem.link} className={classes.link}>
									{navItem.link.label}
								</CustomLink>
							</li>
						))}
					</Cell>
					<Cell cols={6}>
						<div className={classes.section}>
							<p style={{ marginTop: 0 }}>
								<a className={classes.link} href="mailto:inf@customwebsite.com">
									info@customwebsite.com
								</a>
							</p>
						</div>
						<div className={classes.section}>
							<p>
								3212 Main St. SE <br />
								New York,NY 68221
							</p>
						</div>
						<div className={classes.section}>
							<p>123-456-7890</p>
						</div>
						<ul className={classes.socialsList}>
							{socialLinks.map(link => (
								<li key={link.id}>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className={classes.link}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
						<p>&copy; {new Date().getFullYear()} Company Name</p>
					</Cell>
				</Grid>
			</GridContainer>
			<ScrollToTop />
			<div className={classes.letsTalkWrapper}>
				<LetsTalk className={classes.letsTalk} />
			</div>
		</footer>
	);
}
