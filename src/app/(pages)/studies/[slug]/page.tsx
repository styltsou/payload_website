import { fetchDocs } from '../../../_api/fetchDocs';
import { fetchDoc } from '../../../_api/fetchDoc';
import { draftMode } from 'next/headers';
import { Study } from '../../../../payload/payload-types';

export default async function Page({ params: { slug } }) {}

export async function generateStaticParams() {
	try {
		const studies: Study[] = await fetchDocs('studies');

		return studies?.map(study => study.slug);
	} catch (err) {
		return [];
	}
}

export async function generateMetadata({ params: { slug } }) {}
