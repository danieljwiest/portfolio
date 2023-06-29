function convertDateRangeFormat(dateRange: string) {
  const [startDate, endDate] = dateRange.split("-");

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate =
    endDate.toLowerCase() === "present" ? "Present" : formatDate(endDate);

  return `${formattedStartDate} - ${formattedEndDate}`;
}

function formatDate(dateString: string) {
  const [month, year] = dateString.split("/");
  const dateObj = new Date(parseInt(year), parseInt(month.slice(0)));
  const fullMonth = dateObj.toLocaleString("en-US", { month: "long" });
  return `${fullMonth} ${year}`;
}

export default convertDateRangeFormat;
