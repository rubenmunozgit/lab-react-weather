import { dateFormat } from './dateFomat';

const getMaxMinByDate = (list) => {
  const aggregateByDate = list.reduce((groups, wPoint) => {
    const date = dateFormat(wPoint.dt_txt.replace(/-/g, '/'));
    const temp = parseFloat(wPoint.main.temp.toFixed(1));
    if (!groups[date]) {
      groups[date] = { date, temps: [] };
    }
    groups[date].temps.push(temp);
    return groups;
  }, {});

  return Object.values(aggregateByDate)
    .map(({ date, temps }) => {
      const min = Math.min(...temps);
      const max = Math.max(...temps);
      return { date, min, max };
    })
    .slice(1);
};

export default getMaxMinByDate;
