import React from 'react';

import { Page } from '../../../payload/payload-types.js';
import { BLOCKS_MAP } from '../../_blocks/blocksMap';

export const Blocks: React.FC<{
	blocks: Page['layout'][0][];
}> = props => {
	const { blocks } = props;

	const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

	if (hasBlocks) {
		return (
			<>
				{blocks.map(block => {
					const { blockType } = block;

					if (blockType && blockType in BLOCKS_MAP) {
						const Block = BLOCKS_MAP[blockType];

						if (Block) {
							return (
								<section key={block.id}>
									<Block {...block} />
								</section>
							);
						}
					}

					return null;
				})}
			</>
		);
	}

	return null;
};
