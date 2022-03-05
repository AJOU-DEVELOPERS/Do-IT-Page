import { BaseSuccessResponse } from "src/commons/dto/response-common.dto";
import { Project } from "../entity/project.entity";

export class GetProjectsResponseDto extends BaseSuccessResponse {
    constructor(projects: Project[]) {
        super();
        this.res.projects = projects;
    }
    res: any;
}

export class GetProjectResponseDto extends BaseSuccessResponse {
    constructor(project: Project[]) {
        super();
        this.res.project = project;
    }
    res: any;
}