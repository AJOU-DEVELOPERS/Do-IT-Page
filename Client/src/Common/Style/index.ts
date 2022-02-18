export const DefaultColor = "#707070";

export const GreyColor = `#F6F6F6`;

export const BlueColor = `#42556B`;

export const DefaultBoxShadow = `0px 3px 19px #00000029`;

export const AlignCenterAround = `
  align-items: center;
  justify-content: space-around;`;

export const AlignCenterBetween = `
align-items: center;
justify-content: space-between;`;

export const HoverPointer = `
    &:hover{
      cursor : pointer
    }
  `;

const BackgroundBorderBlack = {
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const SmallButtonType = {
  width: "150px",
  height: "50px",
  ...BackgroundBorderBlack,
};

export const MediumButtonType = {
  width: "200px",
  height: "100px",
  ...BackgroundBorderBlack,
};

export const LargeButtonType = {
  width: "300px",
  height: "150px",
  ...BackgroundBorderBlack,
};

export const LoginButtonType = {
  width: "320px",
  height: "48px",
  borderColor: "#0c218b",
  backGroundColor: "#0c218b",
  color: "#fff",
  fontSize: "18px",
  radius: "0px",
};

export const SmallLoginButtonType = {
  width: "150px",
  height: "50px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
  fontSize: "18px",
  radius: "0px",
};

export const MainPageLastButtonType = {
  width: "250px",
  height: "80px",
  borderColor: "#ffffff",
  backGroundColor: "#ffffff",
};
// Input

export const LoginInputType = {
  width: "320px",
  height: "45px",
  borderColor: "#e8f0fe",
  margin: "0 0 10px 0",
  padding: "0 0 0 10px",
  background: "#e8f0fe",
};

export const ApplyButtonType = (backgroundColor = "white") => ({
  title: "신청",
  width: "7vmin",
  height: "20%",
  borderColor: DefaultColor,
  backGroundColor: backgroundColor,
  color: DefaultColor,
  fontSize: "0.6rem",
  radius: "1px",
});

export const textOverflowSafe = `
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

export const CALENDAR_THEME = {
  "common.border": "1px solid #e5e5e5",
  "common.backgroundColor": "white",
  "common.holiday.color": "#ff4040",
  "common.saturday.color": "#333",
  "common.dayname.color": "#333",
  "common.today.color": "#333",

  // creation guide style
  "common.creationGuide.backgroundColor": "rgba(81, 92, 230, 0.05)",
  "common.creationGuide.border": "1px solid #515ce6",

  // month header 'dayname'
  "month.dayname.height": "31px",
  "month.dayname.borderLeft": "1px solid #e5e5e5",
  "month.dayname.paddingLeft": "10px",
  "month.dayname.paddingRight": "10px",
  "month.dayname.backgroundColor": "inherit",
  "month.dayname.fontSize": "12px",
  "month.dayname.fontWeight": "normal",
  "month.dayname.textAlign": "left",

  // month day grid cell 'day'
  "month.holidayExceptThisMonth.color": "rgba(255, 64, 64, 0.4)",
  "month.dayExceptThisMonth.color": "rgba(51, 51, 51, 0.4)",
  "month.weekend.backgroundColor": "inherit",
  "month.day.fontSize": "14px",

  // month schedule style
  "month.schedule.borderRadius": "2px",
  "month.schedule.height": "24px",
  "month.schedule.marginTop": "2px",
  "month.schedule.marginLeft": "8px",
  "month.schedule.marginRight": "8px",

  // month more view
  "month.moreView.border": "1px solid #d5d5d5",
  "month.moreView.boxShadow": "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
  "month.moreView.backgroundColor": "white",
  "month.moreView.paddingBottom": "17px",
  "month.moreViewTitle.height": "20px",
  "month.moreViewTitle.marginBottom": "12px",
  "month.moreViewTitle.backgroundColor": "inherit",
  "month.moreViewTitle.borderBottom": "none",
  "month.moreViewTitle.padding": "12px 17px 0 17px",
  "month.moreViewList.padding": "0 17px",

  // week header 'dayname'
  "week.dayname.height": "42px",
  "week.dayname.borderTop": "1px solid #e5e5e5",
  "week.dayname.borderBottom": "1px solid #e5e5e5",
  "week.dayname.borderLeft": "inherit",
  "week.dayname.paddingLeft": "0",
  "week.dayname.backgroundColor": "inherit",
  "week.dayname.textAlign": "left",
  "week.today.color": "#333",
  "week.pastDay.color": "#bbb",

  // week vertical panel 'vpanel'
  "week.vpanelSplitter.border": "1px solid #e5e5e5",
  "week.vpanelSplitter.height": "3px",

  // week daygrid 'daygrid'
  "week.daygrid.borderRight": "1px solid #e5e5e5",
  "week.daygrid.backgroundColor": "inherit",

  "week.daygridLeft.width": "72px",
  "week.daygridLeft.backgroundColor": "inherit",
  "week.daygridLeft.paddingRight": "8px",
  "week.daygridLeft.borderRight": "1px solid #e5e5e5",

  "week.today.backgroundColor": "rgba(81, 92, 230, 0.05)",
  "week.weekend.backgroundColor": "inherit",

  // week timegrid 'timegrid'
  "week.timegridLeft.width": "72px",
  "week.timegridLeft.backgroundColor": "inherit",
  "week.timegridLeft.borderRight": "1px solid #e5e5e5",
  "week.timegridLeft.fontSize": "11px",
  "week.timegridLeftTimezoneLabel.height": "40px",
  "week.timegridLeftAdditionalTimezone.backgroundColor": "white",

  "week.timegridOneHour.height": "52px",
  "week.timegridHalfHour.height": "26px",
  "week.timegridHalfHour.borderBottom": "none",
  "week.timegridHorizontalLine.borderBottom": "1px solid #e5e5e5",

  "week.timegrid.paddingRight": "8px",
  "week.timegrid.borderRight": "1px solid #e5e5e5",
  "week.timegridSchedule.borderRadius": "2px",
  "week.timegridSchedule.paddingLeft": "2px",

  "week.currentTime.color": "#515ce6",
  "week.currentTime.fontSize": "11px",
  "week.currentTime.fontWeight": "normal",

  "week.pastTime.color": "#bbb",
  "week.pastTime.fontWeight": "normal",

  "week.futureTime.color": "#333",
  "week.futureTime.fontWeight": "normal",

  "week.currentTimeLinePast.border": "1px dashed #515ce6",
  "week.currentTimeLineBullet.backgroundColor": "#515ce6",
  "week.currentTimeLineToday.border": "1px solid #515ce6",
  "week.currentTimeLineFuture.border": "none",

  // week creation guide style
  "week.creationGuide.color": "#515ce6",
  "week.creationGuide.fontSize": "11px",
  "week.creationGuide.fontWeight": "bold",

  // week daygrid schedule style
  "week.dayGridSchedule.borderRadius": "2px",
  "week.dayGridSchedule.height": "24px",
  "week.dayGridSchedule.marginTop": "2px",
  "week.dayGridSchedule.marginLeft": "8px",
  "week.dayGridSchedule.marginRight": "8px",
};
