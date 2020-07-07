import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/logo-SL.svg'

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  mentions?: number;
  hasNotifications?: boolean;
}

const ServerButton: React.FC<Props> = ({selected, isHome, mentions, hasNotifications}) => {
  return (
    <Button isHome={isHome} hasNotifications={hasNotifications} mentions={mentions} className={selected? 'active' : ''}> 
      {isHome && <img src={Logo} alt="Rocket Discord" />}
    </Button>
  );
}

export default ServerButton;