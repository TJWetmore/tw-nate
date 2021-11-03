export class Logger {

    constructor() {}

    public info(logText: string): void {
        console.log(new Date() + "info:::::" + logText);
    }
}