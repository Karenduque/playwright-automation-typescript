import { Options } from "../options";
import { Req } from "../types";
import Tape from "../tape";
export default class Latency {
    private options;
    constructor(options: Options);
    simulate(req: Req, tape?: Tape): Promise<unknown>;
}
