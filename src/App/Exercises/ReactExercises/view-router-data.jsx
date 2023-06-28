import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';
import { CountClicksRouterMetaData } from './CountClicks/router-data';
import { Exercise2RouterMetaData } from './Exercise2/router-data';
import { Exercise3RouterMetaData } from './Exercise3/router-data';
import { SliderRouterMetaData } from './MaterialUI/router-data';
import { BooleansRouterMetaData } from './Booleans/router-data';
import { LocalDevAndFetchRouterMetaData } from './LocalDevAndFetch/router-data';
import { ReduxRouterMetaData } from './Redux/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
  CountClicksRouterMetaData,
  Exercise2RouterMetaData,
  Exercise3RouterMetaData,
  SliderRouterMetaData,
  BooleansRouterMetaData,
  LocalDevAndFetchRouterMetaData,
  ReduxRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
