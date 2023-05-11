import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { SecectorsAndCascadeRouterMetaData } from './SecectorsAndCascade/router-data';
import { StandardTagsRouterMetaData } from './StandardTags/router-data';
import { GoogleFontsRouterMetaData } from './GoogleFonts/router-data';
import { ColorsCssRouterMetaData } from './ColorsCss/router-data';
import { ImageFileRouterMetaData } from './ImageFile/router-data';
import { BackgroundsRouterMetaData } from './Backgrounds/router-data';
import { BoxModelRouterMetaData } from './BoxModel/router-data';
import { ArrayRenderingRouterMetaData } from './ArrayRendering/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SecectorsAndCascadeRouterMetaData,
  StandardTagsRouterMetaData,
  GoogleFontsRouterMetaData,
  ColorsCssRouterMetaData,
  ImageFileRouterMetaData,
  BackgroundsRouterMetaData,
  BoxModelRouterMetaData,
  ArrayRenderingRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
