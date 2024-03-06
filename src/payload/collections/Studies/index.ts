import { CollectionConfig } from 'payload/types';
import slug from '../../fields/slug';

import { CallToAction } from '../../blocks/CallToAction';
import { CTAGrid } from '../../blocks/CTAGrid';
import { MediaCollage } from '../../blocks/MediaCollage';
import { MediaGrid } from '../../blocks/MediaGrid';
import { MediaContentCollage } from '../../blocks/MediaContentCollage';
import { MediaSlider } from '../../blocks/MediaSlider';
import { MediaStatCollage } from '../../blocks/MediaStatCollage';
import { Statistics } from '../../blocks/Statistics';
import { StickyContent } from '../../blocks/StickyContent';
import { Content } from '../../blocks/Content';
import { Spacer } from '../../blocks/Spacer';
import { MediaBlock } from '../../blocks/MediaBlock';
import { populatePublishedAt } from '../../hooks/populatePublishedAt';
import { adminsOrPublished } from '../../access/adminsOrPublished';
import { admins } from '../../access/admins';

export const Studies: CollectionConfig = {
	slug: 'studies',
	admin: {
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
		preview: doc => {
			return `${
				process.env.PAYLOAD_PUBLIC_SERVER_URL
			}/next/preview?url=${encodeURIComponent(
				`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/studies/${doc.slug}`,
			)}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
		},
	},
	hooks: {
		beforeChange: [populatePublishedAt],
		// afterChange: [reva]
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
			label: 'Title',
			required: true,
		},
		{
			name: 'featuredMedia',
			type: 'upload',
			label: 'Featured Media',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'previewMedia',
			label: 'Preview Media',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [
				{
					name: 'media',
					label: 'Media',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
		{
			name: 'client',
			type: 'text',
			label: 'Client',
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'location',
			type: 'text',
			label: 'Location',
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'categories',
			label: 'Categories',
			type: 'relationship',
			relationTo: 'categories',
			hasMany: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'layout',
			label: 'Layout',
			type: 'blocks',
			minRows: 1,
			blocks: [
				Content,
				MediaBlock,
				Spacer,
				CallToAction,
				CTAGrid,
				MediaCollage,
				MediaGrid,
				MediaSlider,
				MediaContentCollage,
				MediaStatCollage,
				Statistics,
				StickyContent,
			],
		},
		slug(),
	],
};
