import React, { useEffect, useState } from 'react';
import DesignerCard from '../../components/Cards/DesignerCards/DesignerCards';
import { getRoleTypeByName } from '../../helpers/data/roleTypeData';
import { getDesigners } from '../../helpers/data/userData';
import logo from '../../Assets/NavBarIcons/LOGO.png';
import { LogoImg, CardContainer } from './DesignersElements';

const Designers = () => {
  const [designers, ViewDesigners] = useState([]);

  useEffect(() => {
    getRoleTypeByName('Designer').then((roleObj) => {
      getDesigners(roleObj.id).then((response) => {
        console.warn(roleObj.id);
        ViewDesigners(response);
      });
    });
  }, []);

  return (
    <>
    <CardContainer>
    <LogoImg src={logo} />
    {designers?.map((designerObj) => (
        <DesignerCard key={designerObj.id} bio={designerObj.bio} profilePicUrl={designerObj.profilePicUrl} />
    ))}
    </CardContainer>
  </>
  );
};

export default Designers;
