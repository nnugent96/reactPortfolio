import React from 'react';
import SOCIALPROFILES from './data/socialProfiles';

const Profile = ({ profile }) => (
  <div style={{ display: 'inline-block', margin:'10', width: '100px'  }}>
    <a href={profile.link}><img src={profile.image} alt={profile.title} style={{ height: '50px' }} /></a>
  </div>
);

const SocialProfiles = () => (
  <div>
    <h2>Social Networking</h2>
    {
      SOCIALPROFILES.map( PROFILE => {
        return <Profile key={Profile.id} profile={PROFILE} />
      })
    }
  </div>
);

export default SocialProfiles;
