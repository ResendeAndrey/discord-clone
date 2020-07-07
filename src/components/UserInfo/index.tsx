import React from 'react'

import {Container, Profile, Avatar, UserData, Icons, MicIcon, HeadfoneIcon, SettingsIcon
} from './styles'



const UserInfo: React.FC = () => {

  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong> Andrey Resende</strong>
          <span> #6654</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadfoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo; 