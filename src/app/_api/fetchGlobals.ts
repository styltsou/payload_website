import type { MegaMenu, Footer, SocialMedia } from '../../payload/payload-types';
import { MEGA_MENU, FOOTER, SOCIAL_MEDIA } from '../_graphql/globals';
import { GRAPHQL_API_URL } from './shared';

export async function fetchMegaMenu(): Promise<MegaMenu> {
	if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');

	const megaMenu = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-store',
		body: JSON.stringify({
			query: MEGA_MENU,
		}),
	})
		?.then(res => {
			if (!res.ok) throw new Error('Error fetching doc');
			return res.json();
		})
		?.then(res => {
			if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching header');
			return res.data?.MegaMenu;
		});

	return megaMenu;
}

export async function fetchFooter(): Promise<Footer> {
	if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');

	const footer = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: FOOTER,
		}),
	})
		.then(res => {
			if (!res.ok) throw new Error('Error fetching doc');
			return res.json();
		})
		?.then(res => {
			if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching footer');
			return res.data?.Footer;
		});

	return footer;
}

export async function fetchSocialMedia(): Promise<SocialMedia> {
	if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found');

	const socialMedia = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: SOCIAL_MEDIA,
		}),
	})
		.then(res => {
			if (!res.ok) throw new Error('Error fetching doc');
			return res.json();
		})
		?.then(res => {
			if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching footer');
			return res.data?.SocialMedia;
		});

	return socialMedia;
}

export const fetchGlobals = async (): Promise<{
	megaMenu: MegaMenu;
	footer: Footer;
	socialMedia: SocialMedia;
}> => {
	// initiate requests in parallel, then wait for them to resolve
	// this will eagerly start to the fetch requests at the same time
	// see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
	const megaMenuData = fetchMegaMenu();
	const footerData = fetchFooter();
	const socialMediaData = fetchSocialMedia();

	const [megaMenu, footer, socialMedia]: [MegaMenu, Footer, SocialMedia] = await Promise.all([
		await megaMenuData,
		await footerData,
		await socialMediaData,
	]);

	return {
		megaMenu,
		footer,
		socialMedia,
	};
};
