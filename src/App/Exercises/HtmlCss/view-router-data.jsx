import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { SecectorsAndCascadeRouterMetaData } from './SecectorsAndCascade/router-data';
import { StandardTagsRouterMetaData } from './StandardTags/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SecectorsAndCascadeRouterMetaData,
  StandardTagsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
