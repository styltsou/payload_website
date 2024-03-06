import React from 'react';

import { Page } from '../../../payload/payload-types';
import { ContentAboveImage } from './heroTypes/ContentAboveImage';
import { ContentLeftOfImage } from './heroTypes/ContentLeftOfImage';
import { Minimal } from './heroTypes/Minimal';

const heroes = {
	contentAboveImage: ContentAboveImage,
	contentLeftOfImage: ContentLeftOfImage,
	minimal: Minimal,
};

export const Hero: React.FC<{ title: string; hero: Page['hero'] }> = props => {
	const { type } = props.hero || {};

	if (!type || type === 'none') return null;

	const HeroToRender = heroes[type];

	if (!HeroToRender) return null;

	return <HeroToRender title={props.title} hero={props.hero} />;
};
