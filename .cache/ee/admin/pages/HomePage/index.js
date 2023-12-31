import * as React from 'react';

// eslint-disable-next-line import/no-cycle
import { HomePageCE } from '../../../../admin/src/pages/HomePage';
import { useLicenseLimitNotification } from '../../hooks/useLicenseLimitNotification';

export function HomePageEE() {
  useLicenseLimitNotification();

  return <HomePageCE />;
}
