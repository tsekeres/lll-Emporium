/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
// import { Chart } from 'react-google-charts';
import PropTypes from 'prop-types';
import { getRoleTypeByName } from '../../../helpers/data/roleTypeData';
import { getDesigners } from '../../../helpers/data/userData';

export const PieChart = () => {
  const [designerSales, setDesignerSales] = useState([]);

  useEffect(() => {
    getRoleTypeByName('Designer').then((roleObj) => {
      getDesigners(roleObj.id).then((response) => {
        setDesignerSales(response);
        console.warn(roleObj.id);
      });
    });
  }, []);

  console.warn(designerSales);
  return (
    <div></div>
  );
};

PieChart.propTypes = {
  designerSales: PropTypes.any,
  setDesignerSales: PropTypes.func,
};

export default PieChart;
