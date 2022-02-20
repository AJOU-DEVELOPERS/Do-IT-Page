export const DefaultColor = "#707070";
export const DefaultBorderColor = "#00000029";

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
  cursor : pointer;
`;

export const MainItemHover = `
&:hover {
  border-radius: 12px;
  border: 1px solid #b3b0b0;
  background-color: #ffffff;
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
  grid: "button",
  width: "90%",
  height: "90%",
  borderColor: "rgba(93,93,93,0.1)",
  backGroundColor: "white",
  color: "rgba(93,93,93)",
  fontSize: "12px",
  radius: "10px",
};

export const RegisterButtonType = {
  grid: "button",
  width: "30%",
  height: "40%",
  borderColor: "rgba(93,93,93,0.1)",
  backGroundColor: "white",
  color: "rgba(93,93,93)",
  fontSize: "12px",
  radius: "10px",
};

export const CheckDuplicateButton = {
  grid: "check",
  width: "30%",
  height: "100%",
  borderColor: "rgba(93,93,93,0.1)",
  backGroundColor: "white",
  color: "rgba(93,93,93)",
  fontSize: "12px",
  radius: "10px",
};

export const SmallLoginButtonType = {
  width: "150px",
  height: "50px",
  color: "#ffffff",
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
  height: "3vh",
  width: "13vw",
  borderColor: "#e8f0fe",
  radius: "10px",
  margin: "0",
  padding: "0",
  shadow: "inset 0 2px 45px #00000029",
  background: "white",
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
