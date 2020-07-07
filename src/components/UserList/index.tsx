import React from 'react'

import {Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string;
}


const UserRow: React.FC<UserProps> = ({nickname}) => {
  return (
    <User>
      <Avatar />
      <strong>{nickname}</strong>
    </User>
  )
}


const Userlist: React.FC = () => {

  return (
    <Container>
      <Role> Disponível - 1</Role>
      <UserRow nickname="Fulano"/>
      <Role> Offline - 18</Role>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
      <UserRow nickname="Cilano"/>
    </Container>
  )
}

export default Userlist; 