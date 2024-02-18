import dotenv from 'dotenv';
import path from 'path';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import redirects from '@payloadcms/plugin-redirects';
import seo from '@payloadcms/plugin-seo';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Categories from './collections/Categories';
import Users from './collections/Users';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import FormSubmissions from './collections/FormSubmissions';
import { Studies } from './collections/Studies';

import { MegaMenu } from './globals/MegaMenu';
import { Footer } from './globals/Footer';
import { SocialMedia } from './globals/SocialMedia';
import { Settings } from './globals/Settings';

import { seed } from './endpoints/seed';

dotenv.config({
	path: path.resolve(__dirname, '../../.env'),
});

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
		components: {},
		webpack: config => ({
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					dotenv: path.resolve(__dirname, './dotenv.js'),
					[path.resolve(__dirname, './endpoints/seed')]: path.resolve(
						__dirname,
						'./emptyModuleMock.js',
					),
				},
			},
		}),
	},
	editor: slateEditor({}),
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
	collections: [Pages, Media, Studies, Categories, Users, FormSubmissions],
	globals: [MegaMenu, Footer, SocialMedia, Settings],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
	csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
	endpoints: [
		// The seed endpoint is used to populate the database with some example data
		// You should delete this endpoint before deploying your site to production
		{
			path: '/seed',
			method: 'get',
			handler: seed,
		},
	],
	plugins: [
		redirects({
			collections: ['pages'],
		}),
		nestedDocs({
			collections: ['categories'],
		}),
		seo({
			collections: ['pages', 'studies'],
			generateTitle: ({ doc }) => `Payload CMS Test Website | ${(doc as any)?.title?.value}`,
			uploadsCollection: 'media',
		}),
		payloadCloud(),
	],
});
