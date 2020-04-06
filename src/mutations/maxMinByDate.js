import { dateFormat } from './dateFomat';

const getMaxMinByDate = list => {
  const aggregateByDate = list
    .map(wPoint => ({
      date: dateFormat(wPoint.dt_txt.replace(/-/g, '/')),
      temp: wPoint.main.temp
    }))
    .reduce((groups, item) => {
      const group = groups[item.date] || { date: groups[item.date], temps: [] };
      group.date = item.date;
      group.temps.push(item.temp);
      groups[item.date] = group;
      return groups;
    }, {});

  const groupByDateArray = Object.keys(aggregateByDate).map(date => {
    return {
      date,
      temps: aggregateByDate[date].temps
    };
  });

  const tempMaxMinByDate = groupByDateArray.map(curr => {
    const maxMinByDate = curr.temps.reduce((agg, currEle) => {
      agg.date = curr.date;
      agg.min = agg.min === undefined || currEle < agg.min ? currEle : agg.min;
      agg.max = agg.max === undefined || currEle > agg.max ? currEle : agg.max;
      //agg[datesTemps[i].date] = minMax
      return agg;
    }, {});
    //console.log(x)
    return maxMinByDate;
  });
  return tempMaxMinByDate;
};
export default getMaxMinByDate;
