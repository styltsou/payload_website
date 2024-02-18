import { CollectionConfig } from 'payload/types';
import slug from '../../fields/slug';

import { CallToAction } from '../../blocks/CallToAction';
import { CTAGrid } from '../../blocks/CTAGrid';
import { ImageCollage } from '../../blocks/ImageCollage';
import { ImageGrid } from '../../blocks/ImageGrid';
import { ImageContentCollage } from '../../blocks/ImageContentCollage';
import { ImageSlider } from '../../blocks/ImageSlider';
import { ImageStatCollage } from '../../blocks/ImageStatCollage';
import { Statistics } from '../../blocks/Statistics';
import { StickyContent } from '../../blocks/StickyContent';
import { Content } from '../../blocks/Content';
import { Spacer } from '../../blocks/Spacer';
import { Image } from '../../blocks/Image';

export const Studies: CollectionConfig = {
	slug: 'studies',
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Title',
			required: true,
		},
		{
			name: 'featuredImage',
			type: 'upload',
			label: 'Featured Image',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'previewImages',
			label: 'Preview Images',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [
				{
					name: 'image',
					label: 'Image',
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
			],
		},
		slug(),
	],
};
