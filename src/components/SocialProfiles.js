import React from 'react';
import SOCIALPROFILES from '../data/socialProfiles';

const Profile = ({ profile }) => (
  <div style={{ display: 'inline-block', margin:'10', width: '60px'  }}>
    <a href={profile.link} target="_blank" rel="noopener noreferrer">
      <img src={profile.image} alt={profile.title} style={{ height: '40px' }} />
    </a>
  </div>
);

const SocialProfiles = () => (
  <div>
    <h2>Social Networking</h2>
    {
      SOCIALPROFILES.map( PROFILE => (<Profile key={PROFILE.id} profile={PROFILE} />))
    }
  </div>
);

export default SocialProfiles;
