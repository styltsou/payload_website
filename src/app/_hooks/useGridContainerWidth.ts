import { useContext } from 'react';
import { GridContainerContext } from '../_providers/GridContainerProvider';

export const useGridContainerWidth = () => useContext(GridContainerContext);
