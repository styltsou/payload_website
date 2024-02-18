import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types.js'

import { CallToActionBlock } from '../../_blocks/CallToAction'
import { ContentBlock } from '../../_blocks/Content'

import { toKebabCase } from '../../_utilities/toKebabCase'
import { BackgroundColor } from '../BackgroundColor'
import { VerticalPadding, VerticalPaddingOptions } from '../VerticalPadding'

const blockComponents = {
  cta: CallToActionBlock,
  content: ContentBlock,
}

export const Blocks: React.FC<{
  blocks: (Page['layout'][0])[]
}> = props => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            const prevBlock = blocks[index - 1]

            if (Block) {
              return (
                <div>
                  <VerticalPadding>
                    {/* @ts-expect-error */}
                    <Block id={toKebabCase(blockName)} {...block} />
                  </VerticalPadding>
                </div>
              )
            }
          }

          return null
        })}
      </Fragment>
    )
  }

  return null
}
