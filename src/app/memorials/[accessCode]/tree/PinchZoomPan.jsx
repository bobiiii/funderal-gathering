import React, { useEffect, useRef, memo } from 'react';
import classNames from 'classnames';
import { create } from 'pinch-zoom-pan';

  

export const PinchZoomPan = memo(function PinchZoomPan({
  min,
  max,
  captureWheel,
  className,
  style,
  children,
}) {
  const root = useRef(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const canvas = create({ element, minZoom: min, maxZoom: max, captureWheel });
    return canvas.destroy;
  }, [min, max, captureWheel]);


  const css = {
    root: {
      position: 'relative',
      transform: 'translateZ(0)',
      overflow: 'hidden',
    },
    point: {
      position: 'absolute',
      width: 0,
      height: 0,
      transform: 'translate(0, 0) scale(1)',
      transformOrigin: 'center',
      willChange: 'transform',
    },
    canvas: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    },
  };


  return (
    <div ref={root} className={classNames(className, css.root)} style={style}>
      <div className={css.point}>
        <div className={css.canvas}>
          {children}
        </div>
      </div>
    </div>
  );
});
