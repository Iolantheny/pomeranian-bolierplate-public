import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctions } from './JSFuncions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBlock22WarmUp } from './SetTimeOut/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataExercise } from './Exercise/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataUsersList } from './UsersList/router-data';
import { blockRouterMetaData as blockRouterMetaDataAsyncAwaitMeAndYou } from './AsyncAwaitMeAndYou/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsFunctions,
  blockRouterMetaDataBlock22WarmUp,
  blockRouterMetaDataHitTheMoleGame,
  blockRouterMetaDataExercise,
  blockRouterMetaDataMemoGame,
  blockRouterMetaDataUsersList,
  blockRouterMetaDataAsyncAwaitMeAndYou,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
