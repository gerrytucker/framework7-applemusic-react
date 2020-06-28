import React from 'react';
import {
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  Toggle,
} from 'framework7-react';

import './Notifications.less';

const Notifications = () => {
  return (
    <Popup push swipeToClose="to-bottom" className="notifications-popup">
      <Page className="notifications-page">
        <Navbar title="Notifications">
          <Link popupClose slot="left">Account</Link>
        </Navbar>
        <List mediaList>
          <ListItem
            link="#"
            title="New Music"
            subtitle="Artists you like release new music and videos"
          >
            <Toggle slot="after" checked />
          </ListItem>
          <ListItem
            link="#"
            title="Show in library"
          >
            <Toggle slot="after" checked />
          </ListItem>
        </List>
      </Page>
    </Popup>
  );
};

export default Notifications;
