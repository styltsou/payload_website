import React from 'react';
import classes from './index.module.scss'

interface GridContainerProps {
  children: React.ReactNode;
}

export const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return <div className={classes.gridContainer}>{children}</div>
}