import { CallToActionBlock } from '../CallToAction';
import { ContentBlock } from '../Content';
import { SpacerBlock } from '../Spacer';
import { StickyContentBlock } from '../StickyContent';
import { CTAGridBlock } from '../CTAGrid';
import { MediaBlock } from '../MediaBlock';
import { MediaCollageBlock } from '../MediaCollage';
import { MediaContentCollageBlock } from '../MediaContentCollage';
import { MediaGridBlock } from '../MediaGrid';
import { MediaSliderBlock } from '../MediaSlider';
import { StatisticsBlock } from '../Statistics';
import { MediaStatCollageBlock } from '../MediaStatCollage';
import { StudySliderBlock } from '../StudySlider';

export type BlockTypes = {
	content: 'content';
	spacer: 'spacer';
	callToAction: 'call-to-action';
	stickyContent: 'sticky-content';
	ctaGrid: 'cta-grid';
	mediaBlock: 'media-block';
	mediaCollage: 'media-collage';
	mediaContentCollage: 'media-content-collage';
	mediaGrid: 'media-grid';
	mediaSlider: 'media-slider';
	statistics: 'statistics';
	mediaStatCollage: 'media-stat-collage';
	studySlider: 'study-slider';
};

export const BLOCKS_MAP = {
	content: ContentBlock,
	spacer: SpacerBlock,
	'call-to-action': CallToActionBlock,
	'sticky-content': StickyContentBlock,
	'cta-grid': CTAGridBlock,
	'media-block': MediaBlock,
	'media-collage': MediaCollageBlock,
	'media-content-collage': MediaContentCollageBlock,
	'media-grid': MediaGridBlock,
	'media-slider': MediaSliderBlock,
	statistics: StatisticsBlock,
	'media-stat-collage': MediaStatCollageBlock,
	'study-slider': StudySliderBlock,
};
