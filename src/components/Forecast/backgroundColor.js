const { units } = require('../../utils/units');
const bgColors = {
  burning: 'rgb(241,94,29)',
  verywarm: 'rgba(245, 182, 66, 1)',
  warm: 'rgba(236, 245, 66, 1)',
  normal: 'rgba(66, 245, 72, 1)',
  cold: 'rgba(66, 245, 221, 1)',
  verycold: 'rgba(66, 239, 245, 1)',
};

const getMaxTemps = (isC) => ({
  MAX_VERYWARN: isC ? 40 : 104,
  MAX_WARN: isC ? 30 : 86,
  MAX_NORMAL: isC ? 20 : 68,
  MAX_COLD: isC ? 10 : 50,
  MAX_VERYCOLD: isC ? 0 : 32,
});

const getLinearGradient = (temp, isC) => {
  const { MAX_VERYWARN, MAX_WARN, MAX_NORMAL, MAX_COLD, MAX_VERYCOLD } =
    getMaxTemps(isC);

  if (temp >= MAX_VERYWARN) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 50%, ${bgColors.warm} 70%, ${bgColors.verywarm} 80%, ${bgColors.burning} 100%`;
  }
  if (MAX_WARN <= temp && temp < MAX_VERYWARN) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 50%, ${bgColors.warm} 70%, ${bgColors.verywarm} 100%`;
  }
  if (MAX_NORMAL <= temp && temp < MAX_WARN) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 50%, ${bgColors.warm} 100%`;
  }
  if (MAX_COLD <= temp && temp < MAX_NORMAL) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 100%`;
  }
  if (MAX_VERYCOLD <= temp && temp < MAX_COLD) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 100%`;
  }
  if (temp < MAX_VERYCOLD) {
    return `linear-gradient(90deg, ${bgColors.verycold} 0%, ${bgColors.verycold} 100%`;
  }
};

module.exports = { getLinearGradient };
