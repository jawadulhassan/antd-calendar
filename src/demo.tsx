import React from "react";
import "./index.css";
import "dayjs/locale/zh-cn";
import type { Dayjs } from "dayjs";
import { Calendar, Tag, theme } from "antd";
import type { CalendarProps } from "antd";

export const DATE_FORMAT = {
  YEAR_MONTH_DAY: "YYYY-MM-DD"
};

export const dateCellRender = (date) => {
  const d = date.$D;
  const validName = "Valid";
  const invalidName = "Invalid";
  const pendingName = "Pending";
  const partialName = "Partial";

  //Valid days
  if ([1, 3, 4, 5, 6].includes(+d)) {
    return <Tag color="green">{validName}</Tag>;
  }
  // Invalid days
  if ([2, 23, 24, 10, 11, 12].includes(+d)) {
    return <Tag color="red">{invalidName}</Tag>;
  }
  //Pending days
  if ([19, 17, 20, 21, 22].includes(+d)) {
    return <Tag color="orange">{pendingName}</Tag>;
  }
  //Partial days
  if ([26, 27, 29].includes(+d)) {
    return <Tag color="grey">{partialName}</Tag>;
  } else return null;
};

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const App: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 500,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        dateCellRender={(date) => dateCellRender(date)}
        mode="month"
        className="calenderRoster"
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default App;
