import { Breakpoints, BreakpointsOptions } from './createBreakpoints';
import { Mixins, MixinsOptions } from './createMixins';
import { Palette, PaletteOptions } from './createPalette';
import { Typography, TypographyOptions } from './createTypography';
import { Shadows } from './shadows';
import { Shape, ShapeOptions } from './shape';
import { Spacing, SpacingOptions } from './createSpacing';
import { Transitions, TransitionsOptions } from './transitions';
import { ZIndex, ZIndexOptions } from './zIndex';
import { Overrides } from './overrides';
import { ComponentsProps } from './props';

export type Direction = 'ltr' | 'rtl';

export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  mixins?: MixinsOptions;
  overrides?: Overrides;
  palette?: PaletteOptions;
  props?: ComponentsProps;
  shadows?: Shadows;
  spacing?: SpacingOptions;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
}

export interface BaseTheme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  palette: Palette;
  shadows: Shadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

export interface Theme extends BaseTheme {
  overrides?: Overrides;
  props?: ComponentsProps;
}

export default function createMuiTheme(options?: ThemeOptions, ...args: object[]): Theme;
