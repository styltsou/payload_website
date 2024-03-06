import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

import type { Config } from '../../payload/payload-types';
import { API_URL } from './shared';
import { payloadToken } from './token';

const collections = ['pages', 'studies'];

export const fetchDoc = async <T>(args: {
	collection: keyof Config['collections'];
	slug?: string;
	id?: string;
	draft?: boolean;
}): Promise<T> => {
	const { collection, slug, draft } = args || {};

	if (!collections.includes(collection))
		throw new Error(`Collection ${collection} not found`);

	let token: RequestCookie | undefined;

	if (draft) {
		const { cookies } = await import('next/headers');
		token = cookies().get(payloadToken);
	}

	const doc: T = await fetch(
		`${API_URL}/api/${collection}?where[slug][equals]=${slug}&draft=${draft}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				...(token?.value && draft
					? { Authorization: `JWT ${token.value}` }
					: {}),
			},
			cache: 'no-store',
			next: { tags: [`${collection}_${slug}`] },
		},
	)
		?.then(res => res.json())
		?.then(res => {
			if (res.errors)
				throw new Error(res?.errors?.[0]?.message ?? 'Error fetching doc');
			return res?.docs?.[0];
		});

	return doc;
};
