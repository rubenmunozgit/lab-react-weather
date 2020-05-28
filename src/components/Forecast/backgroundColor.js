const bgColors = {
  burning: "rgba(245, 120, 66, 1)",
  verywarm: "rgba(245, 182, 66, 1)",
  warm: "rgba(236, 245, 66, 1)",
  normal: "rgba(66, 245, 72, 1)",
  cold: "rgba(66, 245, 221, 1)",
  verycold: "rgba(66, 239, 245, 1)",
};

const getMaxTemps = (metrics) => ({
  MAX_VERYWARN: metrics === "metric" ? 40 : 104,
  MAX_WARN: metrics === "metric" ? 30 : 86,
  MAX_NORMAL: metrics === "metric" ? 20 : 68,
  MAX_COLD: metrics === "metric" ? 10 : 50,
  MAX_VERYCOLD: metrics === "metric" ? 0 : 32,
});

const getLinearGradient = (temp, metrics) => {
  const {
    MAX_VERYWARN,
    MAX_WARN,
    MAX_NORMAL,
    MAX_COLD,
    MAX_VERYCOLD,
  } = getMaxTemps(metrics);

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
