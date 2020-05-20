import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  border,
  color,
  position,
  flexbox,
  typography,
  styleFn,
  SpaceProps,
  LayoutProps,
  BorderProps,
  ColorProps,
  PositionProps,
  FlexboxProps,
  FlexProps,
  TypographyProps,
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

export const Flex: React.ComponentType<
  BoxProps & FlexProps & FlexboxProps
> = styled.div(
  {
    display: 'flex',
  },
  flexbox,
  ...boxStyleUtils,
);

// somehow it won't work if only `ColorProps` assigned
export const Spacer: React.ComponentType<SpaceProps & ColorProps> = styled.div(
  space,
);

export const Article: React.ComponentType<
  BoxProps & TypographyProps
> = styled.article(typography, ...boxStyleUtils);

export const H1: React.ComponentType<
  BoxProps & TypographyProps
> = styled.h1(typography, ...boxStyleUtils);

export const Text: React.ComponentType<
  BoxProps & TypographyProps
> = styled.span(typography, ...boxStyleUtils);

export const Paragraph: React.ComponentType<
  BoxProps & TypographyProps
> = styled.p(typography, ...boxStyleUtils);
