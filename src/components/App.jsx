import React, { useState, useEffect, useRef } from 'react';
import $ from 'dom7';

import {
  App,
  Views,
  View,
  Toolbar,
  Link,
} from 'framework7-react';

import PWA from '../js/pwa';
import routes from '../js/routes';

const AppComponent = () => {
  const [activeTab, setActiveTab] = useState('listen');
  const previousTab = useRef(null);

  useEffect(() => {
    previousTab.current = activeTab;
  }, [activeTab]);

  // Framework7 Parameters
  const f7params = {
    name: 'Apple Music',
    theme: 'ios',
    routes,
    autoDarkTheme: true,
  };
  if (process.env.NODE_ENV === 'production') {
    // Register service worker in production mode only
    PWA.init();
  }

  function onTabLinkClick(tab) {
    if (previousTab.current !== activeTab) return;
    if (activeTab === tab) {
      $(`#view-${tab}`)[0].f7View.router.back();
    }
  }
  return (
    <App params={f7params}>

      <Views tabs className="safe-areas">
        <Toolbar tabbar labels bottom>
          <Link
            onClick={() => onTabLinkClick('listen')}
            tabLink="#view-listen"
            tabLinkActive
            iconF7="play_circle_fill"
            text="Listen Now"
          />
          <Link
            onClick={() => onTabLinkClick('browse')}
            tabLink="#view-browse"
            iconF7="square_grid_2x2_fill"
            text="Browse"
          />
          <Link
            onClick={() => onTabLinkClick('radio')}
            tabLink="#view-radio"
            iconF7="dot_radiowaves_left_right"
            text="Radio"
          />
          <Link
            onClick={() => onTabLinkClick('library')}
            tabLink="#view-library"
            iconF7="music_albums_fill"
            text="Library"
          />
          <Link
            onClick={() => onTabLinkClick('search')}
            tabLink="#view-search"
            iconF7="search"
            text="Search"
          />
        </Toolbar>

        <View id="view-listen" onTabShow={() => setActiveTab('listen')} main tab tabActive url="/listen/" />
        <View id="view-browse" onTabShow={() => setActiveTab('browse')} tab url="/browse/" />
        <View id="view-radio" onTabShow={() => setActiveTab('radio')} tab url="/radio/" />
        <View id="view-library" onTabShow={() => setActiveTab('library')} tab url="/library/" />
        <View id="view-search" onTabShow={() => setActiveTab('search')} tab url="/search/" />

      </Views>
    </App>
  );
};

export default AppComponent;
