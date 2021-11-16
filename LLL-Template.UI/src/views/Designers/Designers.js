import React, { useEffect, useState } from 'react';
import DesignerCard from '../../components/Cards/DesignerCards/DesignerCards';
import { getDesigners } from '../../helpers/data/userData';

const Designers = () => {
  const [designers, ViewDesigners] = useState([]);

  useEffect(() => {
    getDesigners().then((response) => {
      ViewDesigners(response);
    });
  }, []);

  return (
    <>
    {designers.map((designerObj) => (
        <DesignerCard key={designerObj.id} bio={designerObj.bio} profilePicUrl={designerObj.profilePicUrl} />
    ))}
  </>
  );
};

export default { Designers };
