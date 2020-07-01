import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RouterPaths } from '../routes/RouterPaths';
import { HeaderButton } from '../styled/buttons/HeaderButton';
import { DropdownHeaderMenu } from '../styled/containers/DropdownHeaderMenu';
import { HeaderContainer } from '../styled/containers/HeaderContainer';
import { Div } from '../styled/miscellaneous/div';
import { Img } from '../styled/miscellaneous/img';
import { click } from '../utils/analytics';
import OutsideClose from './miscellaneous/OutsideClose';

const buttons = [{ text: 'ABOUT', path: RouterPaths.ABOUT }];

const GA_CAT = 'Header';

const Header: FC = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <Div isHiddenMobile>
        {buttons.map(({ path, text }) => (
          <HeaderButton
            key={text}
            transparent
            roundCorners
            onClick={() => {
              click(GA_CAT, text);
              if (path) {
                history.push(path);
              }
            }}
          >
            {text}
          </HeaderButton>
        ))}
      </Div>
      <OutsideClose onOutsideTrigger={() => setMenuOpen(false)}>
        <Div
          isHiddenDesktop
          style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          pointer
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Img icon="icons/menu" pointer style={{ margin: '0 5px 0 5px' }}></Img>
        </Div>
        {menuOpen && (
          <DropdownHeaderMenu isHiddenDesktop>
            {buttons.map(({ path, text }) => (
              <HeaderButton
                key={text}
                transparent
                roundCorners
                width="200px"
                height="45px"
                style={{ textAlign: 'left' }}
                onClick={() => {
                  click(GA_CAT, text);
                  setMenuOpen(false);
                  if (path) {
                    history.push(path);
                  }
                }}
              >
                {text}
              </HeaderButton>
            ))}
          </DropdownHeaderMenu>
        )}
      </OutsideClose>
      <div>
        <HeaderButton transparent whiteBorder width="150px" padding="10px">
          BUTTON
        </HeaderButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
