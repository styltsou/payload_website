import { Fragment } from 'react';
import type { MegaMenu, SocialMedia } from '../../../../payload/payload-types';
import { fetchMegaMenu, fetchSocialMedia } from '../../../_api/fetchGlobals';
import { Header } from './Header';
import { MenuModal } from './MenuModal';

export async function MegaMenu() {
	let megaMenu: MegaMenu = null;
	let socialMedia: SocialMedia = null;

	try {
		megaMenu = await fetchMegaMenu();
		socialMedia = await fetchSocialMedia();
	} catch (err) {
		console.log(err);
	}

	return (
		<Fragment>
			<Header />
			<MenuModal menu={megaMenu} socialMedia={socialMedia} />
		</Fragment>
	);
}
