//TODO: adjust design so that long dates wrap the whole date and not just the year
//TODO: Fix font sizes for titles.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import "./ResumeItem.styles.css";
import convertDateRangeFormat from "../../../../../../utils/convertDateRangeFormat";

const ResumeItem = ({
  company = "Company X, Inc",
  location = "City X, ST",
  position = "<Position Name>",
  period = "10/1955-05/1965",
  status = "",
}: {
  company?: string;
  location?: string;
  position?: string;
  period?: string;
  status?: string;
}) => {
  const dateRange = convertDateRangeFormat(period);
  // const [periodStart, periodEnd] = convertDateRangeFormat(period).split("-");
  const statusValue = status.toUpperCase();

  return (
    <div className="columns is-mobile resumeItem ">
      <div className="column is-7 mb-4">
        <h4 className="is-size-5 mb-4 "> {position}</h4>
        <div className="is-flex is-flex-wrap-wrap">
          <div className="mr-3">
            <span className="icon">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <span className="CompanyName">{company}</span>
          </div>

          <div>
            <span className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="column is-flex-direction-columns is-justify-content-flex-end">
        <div className="is-flex is-justify-content-flex-end pb-1 mb-3">
          {status === "" ? (
            <div></div>
          ) : (
            <div className="tag  is-rounded is-info is-medium">
              {statusValue}
            </div>
          )}
        </div>
        <div className="is-flex is-justify-content-right">
          <span className="icon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
          <span>{dateRange}</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
