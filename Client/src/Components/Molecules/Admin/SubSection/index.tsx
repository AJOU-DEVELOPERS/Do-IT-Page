import { ADMIN_CATEGORY } from "@Constant/.";
import MemberContainer from "./Member";
import MemberRegisterContainer from "./MemberRegister";
import NoticeContainer from "./Notice";
import ProjectContainer from "./Project";
import RoomRegisterContainer from "./RoomRegister";
import StudyContainer from "./Study";

const SubSection = ({ category }: { category: number }) => {
  const getSubToCategory = (category: number) => {
    switch (ADMIN_CATEGORY[category]) {
      case "동아리원 관리":
        return <MemberContainer />;
      case "동아리 신청 관리":
        return <MemberRegisterContainer />;
      case "스터디 관리":
        return <StudyContainer />;
      case "프로젝트 관리":
        return <ProjectContainer />;
      case "과방 신청 관리":
        return <RoomRegisterContainer />;
      case "공지사항 관리":
        return <NoticeContainer />;
      default:
        return <MemberContainer />;
    }
  };

  return getSubToCategory(category);
};

export default SubSection;
