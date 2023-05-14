import React, { forwardRef } from 'react';
import Icon from '../Icon';
import * as style from './style.module.scss';
import { ResizeHandle as ResizeHandleType } from 'react-resizable'

export type ResizeHandleProps = {
  handleAxis: ResizeHandleType,
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  onMouseUp: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void,
};

const ResizeHandle = forwardRef<HTMLDivElement>((props, ref) => {
  const { handleAxis } = props as ResizeHandleProps;

  return (
    <div className={`handle-${handleAxis} ${style.resizeHandle}`} ref={ref} {...props}>
      {/* <Icon icon="close" /> */}
    </div>
  )
});

export default ResizeHandle;