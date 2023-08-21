const data = [
  { date: '2012-01-01', precipitation: 0.0, temp_max: 20.8, temp_min: 5.0},
  { date: '2012-01-02', precipitation: 0.0, temp_max: 12.8, temp_min: 5.0},
]

const cal = new CalHeatmap();
cal.paint({
  itemSelector: '#scale-color',
  range: 1,
  domain: { type: 'year', label: { text: null } },
  subDomain: { type: 'day' },
  data: {
    source: data,
    type: 'json',
    x: 'date',
    y: d => +d['temp_max'],
    groupY: 'max',
  },
  date: { start: new Date('2012-01-01') },
  scale: {
    color: {
      range: ['yellow', 'red'],
      interpolate: 'hsl',
      type: 'linear',
      domain: [0, 30],
    },
  },
});