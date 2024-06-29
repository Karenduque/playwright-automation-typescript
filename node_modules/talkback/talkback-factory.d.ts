import Options from "./options";
import TalkbackServer from "./server";
import RequestHandler from "./request-handler";
export default class TalkbackFactory {
    static server(options: Partial<Options>): TalkbackServer;
    static requestHandler(options: Partial<Options>): Promise<RequestHandler>;
}
