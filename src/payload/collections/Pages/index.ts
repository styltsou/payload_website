import type { CollectionConfig } from 'payload/types';

import { admins } from '../../access/admins';
import { adminsOrPublished } from '../../access/adminsOrPublished';

import { CallToAction } from '../../blocks/CallToAction';
import { CTAGrid } from '../../blocks/CTAGrid';
import { ImageCollage } from '../../blocks/ImageCollage';
import { ImageGrid } from '../../blocks/ImageGrid';
import { ImageContentCollage } from '../../blocks/ImageContentCollage';
import { ImageSlider } from '../../blocks/ImageSlider';
import { ImageStatCollage } from '../../blocks/ImageStatCollage';
import { Statistics } from '../../blocks/Statistics';
import { StickyContent } from '../../blocks/StickyContent';
import { StudySlider } from '../../blocks/StudySlider';
import { Content } from '../../blocks/Content';
import { Spacer } from '../../blocks/Spacer';
import { Image } from '../../blocks/Image';

import hero from '../../fields/hero';
import slug from '../../fields/slug';

import { populatePublishedAt } from '../../hooks/populatePublishedAt';
import { revalidatePage } from './hooks/revalidatePage';

export const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
		preview: doc => {
			return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
				`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
			)}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
		},
	},
	hooks: {
		beforeChange: [populatePublishedAt],
		afterChange: [revalidatePage],
	},
	versions: {
		drafts: true,
	},
	access: {
		read: adminsOrPublished,
		update: admins,
		create: admins,
		delete: admins,
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'publishedAt',
			type: 'date',
			admin: {
				position: 'sidebar',
			},
		},
		{
			type: 'tabs',
			tabs: [
				{
					label: 'Hero',
					fields: [hero],
				},
				{
					label: 'Content',
					fields: [
						{
							name: 'layout',
							type: 'blocks',
							minRows: 1,
							blocks: [
								Content,
								Image,
								Spacer,
								CallToAction,
								CTAGrid,
								ImageCollage,
								ImageGrid,
								ImageSlider,
								ImageContentCollage,
								ImageStatCollage,
								Statistics,
								StickyContent,
								StudySlider,
							],
						},
					],
				},
			],
		},
		slug(),
	],
};
