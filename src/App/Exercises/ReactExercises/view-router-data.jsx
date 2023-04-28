import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';
import { CountClicksRouterMetaData } from './CountClicks/router-data';
import { Exercise3RouterMetaData } from './Exercise3/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
  CountClicksRouterMetaData,
  Exercise3RouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
