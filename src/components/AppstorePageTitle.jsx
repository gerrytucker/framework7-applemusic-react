import React from 'react';
import { Link, Icon } from 'framework7-react';
import './AppstorePageTitle.less';

const AppstorePage = ({
  title,
  accountLink = true,
}) => {
  return (
    <h1 className="appstore-page-title">
      <span>{title}</span>
      {accountLink && (
        <Link href="/account/">
          <Icon f7="person_crop_circle" size="44px" />
        </Link>
      )}
    </h1>
  );
};

export default AppstorePage;
