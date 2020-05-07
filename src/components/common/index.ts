import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  border,
  color,
  position,
  flexbox,
  styleFn,
  SpaceProps,
  LayoutProps,
  BorderProps,
  ColorProps,
  PositionProps,
  FlexboxProps,
  FlexProps,
} from 'styled-system';

const boxStyleUtils: Array<styleFn> = [space, layout, color, position, border];

interface BoxProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    ColorProps,
    PositionProps {}

export const Box: React.ComponentType<BoxProps> = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  ...boxStyleUtils,
);

export const Flex: React.ComponentType<BoxProps & FlexProps> = styled.div(
  {
    display: 'flex',
  },
  flexbox,
  ...boxStyleUtils,
);

export const Spacer = styled.div(space);
