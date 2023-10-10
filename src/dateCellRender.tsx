import React from "react";
import dayjs from "dayjs";
import { Tag } from "antd";
import { DATE_FORMAT, PEN_STATUS_FONT_COLORS } from "./demo";

const PEN_STATUS_FONT_COLORS = [
  { date: "2023-10-01", status: 1 },
  { date: "2023-10-02", status: 0 },
  { date: "2023-10-03", status: 2 },
  { date: "2023-10-04", status: 3 }
];

export const dateCellRender = (
  value,
  validDate,
  invalidDate,
  patialDate,
  pendingDate,
  datesArray,
  dateDetailsArray
) => {
  console.log({ value });
  let isInvalid = true;
  let isValid = true;
  let validName = "Valid";
  let invalidName = "Invalid";

  const date = dayjs(value, DATE_FORMAT.YEAR_MONTH_DAY);

  return PEN_STATUS_FONT_COLORS.map((item) => {
    <Tag
      color={
        item.status === 0
          ? "green"
          : item.status === 1
          ? "red"
          : item.status === 2
          ? "organ"
          : "grey"
      }
    >
      {item.status === 0
        ? "valid"
        : item.status === 1
        ? "invalid"
        : item.status === 2
        ? "partial"
        : "pending"}
    </Tag>;
  });
};
