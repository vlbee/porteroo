import React from "react";
import { fetchPost } from "../fetch-util";
import { btn } from "../Reusable/buttons.js";
import { nhsColors } from "../Reusable/colors.js";

const Request = btn(nhsColors.white, nhsColors.darkgrey);

const RequestUrgent = btn(nhsColors.white, nhsColors.emergencyred);

export const RequestButtons = (ward, enableReq, enableUrg) => {
  const handleClick = async isUrgent => {
    if (!isUrgent) {
      await fetchPost(
        `https://placeholder.com/newTask?urgent=false&location=${ward}`
      );
      alert("Non Urgent Requested");
    } else {
      await fetchPost(
        `https://placeholder.com/newTask?urgent=true&location=${ward}`
      );
      alert("Urgent Requested");
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
