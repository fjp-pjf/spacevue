import Styles from "@/styles/Dashboard.module.scss";
import { useQuery } from "react-query";
import { getMissionData } from "@/pages/api/dashboard.service";
import { Skeleton } from "antd";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgChartsReact } from "ag-charts-react";

const Dashboard = () => {
  const { data, isLoading } = useQuery("get-mission-data", getMissionData, {
    onError: (err) => {
      router.push("/error");
      console.log(err);
    },
  });

  const colDefs = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ];

  function getData() {
    return [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 40000 },
      { asset: "Cash", amount: 7000 },
      { asset: "Real Estate", amount: 5000 },
      { asset: "Commodities", amount: 3000 },
    ];
  }

  const getChartData = () => {
    const chartData = data?.reduce((acc, mission) => {
      const date = mission.date;
      const existingMission = acc.find((item) => item.asset === date);

      if (existingMission) {
        existingMission.amount += 1;
      } else {
        acc.push({ asset: date, amount: 1 });
      }

      return acc;
    }, []);

    return chartData;
  };

  const options = {
    data: getChartData(),
    title: {
      text: "Successful mission per day",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  };

  if (isLoading) {
    <Skeleton active />;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.navbar}>
        <h1 className={Styles.title}>SpaceVue</h1>
      </div>
      <div className={Styles.body}>
        <div className="ag-theme-quartz-dark" style={{ height: "56rem" }}>
          <AgGridReact rowData={data} columnDefs={colDefs} />
        </div>

        <div className={Styles.chartContainer}>
          <AgChartsReact options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
