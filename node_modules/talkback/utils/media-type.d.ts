import { ReqRes } from "../types";
export declare const jsonTypes: ((contentType: string) => boolean)[];
export default class MediaType {
    private htmlReqRes;
    constructor(htmlReqRes: ReqRes);
    isHumanReadable(): boolean;
    isJSON(): boolean;
    contentType(): string;
    headers(): any;
}
