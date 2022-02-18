export const GreyColor = `#f3f6f8`;

export const AlignCenterAround = `
  align-items: center;
  justify-content: space-around;`;

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
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
  fontSize: "18px",
  radius: "0px",
};

export const MainPageLastButtonType = {
  width: "320px",
  height: "70px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
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
