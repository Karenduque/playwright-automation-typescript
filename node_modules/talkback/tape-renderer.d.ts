import Tape from "./tape";
import { Options } from "./options";
import { ReqRes } from "./types";
export default class TapeRenderer {
    private tape;
    constructor(tape: Tape);
    static fromStore(raw: any, options: Options): Promise<Tape>;
    static prepareBody(tape: Tape, reqResObj: ReqRes, rawBody: string, metaPrefix: "res" | "req"): Promise<any>;
    render(): Promise<{
        meta: import("./types").Metadata;
        req: {
            body: any;
            url: string;
            method: string;
            headers: any;
        };
        res: {
            body: any;
            status: number;
            headers: any;
        };
    }>;
    bodyFor(reqResObj: ReqRes, metaPrefix: "req" | "res"): Promise<any>;
}
