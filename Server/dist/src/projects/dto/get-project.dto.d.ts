import { BaseSuccessResponse } from "src/commons/dto/response-common.dto";
import { Project } from "../entity/project.entity";
export declare class GetProjectsResponseDto extends BaseSuccessResponse {
    constructor(projects: Project[]);
    res: any;
}
export declare class GetProjectResponseDto extends BaseSuccessResponse {
    constructor(project: Project[]);
    res: any;
}
