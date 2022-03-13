import { BasicType } from "@Molecules/Content/type";

interface Indexable {
  [key: string]: any;
}

export interface BasicWorkType extends Indexable {
  name: string;
  description: string;
  totalHeadcount: number;
  leaderName: string;
  status: string;
  deletedAt?: Date;
}

export interface UserStudy extends Indexable {
  userStudyIdx: number;
  userIdx: number;
  // userName:string;
  studyIdx: number;
  status: string;
}
export interface UserProject extends Indexable {
  userProjectIdx: number;
  userIdx: number;
  // userName:string;
  projectIdx: number;
  status: string;
}

export interface StudyType extends BasicWorkType {
  studyIdx: number;
  userStudies: UserStudy[];
}

export interface ProjectType extends BasicWorkType {
  projectIdx: number;
  userProjects: UserProject[];
  projectTechStacks: string[];
}

export type WorkType = StudyType & ProjectType;

export interface DeepWorkType extends BasicType {
  work: WorkType;
}

export type UserWorkType = UserStudy | UserProject;
