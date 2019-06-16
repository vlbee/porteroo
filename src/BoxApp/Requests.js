import React from "react";
import { fetchPost } from "../fetch-util";
import { btn } from "../Reusable/buttons.js";
import { nhsColors } from "../Reusable/colors.js";

const Request = btn(nhsColors.white, nhsColors.darkgrey);

const RequestUrgent = btn(nhsColors.white, nhsColors.emergencyred);

export const RequestButtons = (ward, enableReq, enableUrg) => {
  const handleClick = async isUrgent => {
    if (!isUrgent) {
      await fetchPost(`http//localhost:5000/request`, {
        urgent: false,
        location: ward,
        destination: 0
      });
    } else {
      await fetchPost(`http://localhost:5000/request`, {
        urgent: true,
        location: ward,
        destination: 0
      });
    }
  };

  return (
    <>
      <Request enable={enableReq} onClick={() => handleClick(false)}>
        Request
      </Request>
      <RequestUrgent enable={enableUrg} onClick={() => handleClick(true)}>
        Urgent Request
      </RequestUrgent>
    </>
  );
};
