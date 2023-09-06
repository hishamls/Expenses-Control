import Chart from "../Chart/Chart";

export default function ExpensesChart(props) {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //to get values:_
  for (const exp of props.expenses) {
    const expenseMonth = exp.date.getMonth(); //jan is 0 // step 2 // exp contain date, amount,and title
    chartDataPoint[expenseMonth].value += exp.amount; // step 1 // chartDataPoint contain label, and value
  }

  return <Chart dataPoints={chartDataPoint} />;
}
