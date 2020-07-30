import React from 'react'
import './SearchPage.css';

import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://avatars0.githubusercontent.com/u/16895376?s=400&u=bfb827ff2e4ffe5c38a93ec8fe097ff2cea0d7fa&v=4"
        channel="Lazar TheTechGuy"
        verified
        subs="2.4M"
        noOfVideos={928}
        description="You can find awesome programming tutorials"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="692K"
        description="Do you want FREE Python Course"
        timestamp="59 seconds"
        channel="Lazar TheTechGuy"
        title="🔴 Car Tracking in Python"
        image="https://img.youtube.com/vi/8dy0jfQeqdA/maxresdefault.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="692K"
        description="Do you want FREE Python Course"
        timestamp="59 seconds"
        channel="Lazar TheTechGuy"
        title="🔴 Responsive Sidebar Menu"
        image="https://img.youtube.com/vi/DvpSKoCyN5Q/maxresdefault.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="692K"
        description="Do you want FREE Python Course"
        timestamp="59 seconds"
        channel="Lazar TheTechGuy"
        title="🔴 Build Ecommerce Website"
        image="https://img.youtube.com/vi/MgQu2QRm-B4/maxresdefault.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="692K"
        description="Do you want FREE Python Course"
        timestamp="59 seconds"
        channel="Lazar TheTechGuy"
        title="🔴 Build A Zoom Clone"
        image="https://img.youtube.com/vi/DvlyzDZDEq4/maxresdefault.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="692K"
        description="Do you want FREE Python Course"
        timestamp="59 seconds"
        channel="Lazar TheTechGuy"
        title="🔴 Let's Build a Tinder Clone"
        image="https://img.youtube.com/vi/8dy0jfQeqdA/maxresdefault.jpg"
      />

    </div>
  )
}

export default SearchPage
