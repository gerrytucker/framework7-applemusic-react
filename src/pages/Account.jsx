import React from 'react';
import {
  BlockFooter,
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  ListButton,
} from 'framework7-react';

import './Account.less';

const Account = () => {
  return (
    <Popup push swipeToClose="to-bottom" className="account-popup">
      <Page className="account-page">
        <Navbar title="Account">
          <Link popupClose slot="right">Done</Link>
        </Navbar>
        <List>
          <ListButton>Redeem Gift Card or Code</ListButton>
          <ListButton>Add Funds to Apple ID</ListButton>
          <ListButton>Manage Subscription</ListButton>
          <ListButton>Upgrade to Family Plan</ListButton>
        </List>
        <List>
          <ListButton>See what friends are listening to</ListButton>
        </List>
        <BlockFooter>
          <p>Set up your profile to share your music and see what your friends are playing.</p>
        </BlockFooter>
        <List>
          <ListItem
            title="Notifications"
            link
          />
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
