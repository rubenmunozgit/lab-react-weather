const bgColors = {
  burning: 'rgb(241,94,29)',
  verywarm: 'rgba(245, 182, 66, 1)',
  warm: 'rgba(236, 245, 66, 1)',
  normal: 'rgba(66, 245, 72, 1)',
  cold: 'rgba(66, 245, 221, 1)',
  verycold: 'rgba(66, 239, 245, 1)',
};

const getLinearGradient = (temp, isC) => {
  const [VERY_WARM, WARM, NORMAL, COLD, VERY_COLD] = isC
    ? [40, 30, 20, 10, 0]
    : [104, 86, 68, 50, 32];

  if (temp >= VERY_WARM) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 50%, ${bgColors.warm} 70%, ${bgColors.verywarm} 80%, ${bgColors.burning} 100%)`;
  }
  if (temp >= WARM) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 50%, ${bgColors.warm} 70%, ${bgColors.verywarm} 100%)`;
  }
  if (temp >= NORMAL) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 50%, ${bgColors.warm} 100%)`;
  }
  if (temp >= COLD) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 30%, ${bgColors.normal} 100%)`;
  }
  if (temp >= VERY_COLD) {
    return `linear-gradient(90deg, ${bgColors.verycold} 10%, ${bgColors.cold} 100%)`;
  }
  return `linear-gradient(90deg, ${bgColors.verycold} 0%, ${bgColors.verycold} 100%)`;
};

module.exports = { getLinearGradient };
