'use client';
import { Modal, useModal } from '@faceless-ui/modal';
import { Grid, Cell } from '@faceless-ui/css-grid';

import { GridContainer } from '../../GridContainer';
import { LargeBody } from '../../../type/LargeBody';
import { CustomLink } from '../../../Link';
import { LetsTalk } from '../../../LetsTalk';

import classes from './index.module.scss';
import { MegaMenu, SocialMedia } from '../../../../../payload/payload-types';

interface Props {
	menu: MegaMenu;
	socialMedia: SocialMedia;
}

export const MENU_MODAL_SLUG = 'mega-menu';

export const MenuModal: React.FC<Props> = ({ menu, socialMedia }) => {
	const { closeModal } = useModal();

	return (
		<Modal slug={MENU_MODAL_SLUG} className={classes.menuModal}>
			<GridContainer>
				<Grid>
					<Cell cols={9} htmlElement="nav">
						{menu?.navigation?.map((navItem, i) => (
							<CustomLink
								key={navItem.id}
								{...navItem.link}
								className={classes.navItem}
							>
								<h3
									style={{ marginTop: i === 0 && 0 }}
									onClick={_ => closeModal(MENU_MODAL_SLUG)}
								>
									{navItem.link.label}
								</h3>
							</CustomLink>
						))}
					</Cell>
					<Cell cols={3}>
						{socialMedia?.links?.map((link, i) => (
							<LargeBody
								htmlElement="a"
								key={link.id}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={classes.socialMediaLink}
								style={{ marginTop: i === 0 && 0 }}
							>
								{link.label}
							</LargeBody>
						))}
					</Cell>
				</Grid>
			</GridContainer>
			<div
				className={classes.letsTalkWrapper}
				onClick={_ => closeModal(MENU_MODAL_SLUG)}
			>
				<LetsTalk />
			</div>
		</Modal>
	);
};
