import React from 'react';
import { Metadata } from 'next';

import { Providers } from './_providers';
import { AdminBar } from './_components/AdminBar';
import { Noise } from './_components/Noise';
import { MegaMenu } from './_components/layout/MegaMenu';
import { Footer } from './_components/layout/Footer';
import { mergeOpenGraph } from './_utilities/mergeOpenGraph';
import { GeistSans } from 'geist/font/sans';
// Init theme is added in the head of the document if needed
// import { InitTheme } from './_providers/Theme/InitTheme'

import './_css/app.scss';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>
			<body className="paddingTop">
				<Providers>
					{/* <AdminBar /> */}
					{/* @ts-expect-error */}
					<MegaMenu />
					<Noise />
					{children}
					{/* @ts-expect-error */}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
	twitter: {
		card: 'summary_large_image',
		creator: '@payloadcms',
	},
	openGraph: mergeOpenGraph(),
};
