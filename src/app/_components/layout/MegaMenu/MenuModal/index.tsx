'use client';
import { Modal } from '@faceless-ui/modal';

import { MegaMenu, SocialMedia } from '../../../../../payload/payload-types';

import { GridContainer } from '../../GridContainer';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { MENU_MODAL_SLUG } from '../../../Modals/slugs';

import classes from './index.module.scss';

interface Props {
  menu: MegaMenu;
  socialMedia: SocialMedia;
}

export const MenuModal: React.FC<Props> = ({ menu, socialMedia }) => {
  return (
    <Modal slug={MENU_MODAL_SLUG} className={classes.menuModal}>
      <GridContainer>
        <Grid>
          <Cell cols={8}>
            {menu?.navigation?.map(navItem => (
              <p key={navItem.id}>{navItem.link.label}</p>
            ))}
          </Cell>
          <Cell cols={3}>socials</Cell>
        </Grid>
      </GridContainer>
    </Modal>
  );
};
