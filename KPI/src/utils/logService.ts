import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class LogService {
  logFilePath: string = 'log.txt';

  constructor() {
  }

  writeLog(message: string) {
    const formattedMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFile(this.logFilePath, formattedMessage, (err) => {
      if (err) {
        console.error(`Failed to write to log file: ${err}`);
      }
    });
  }

  clearLog() {
    fs.writeFile(this.logFilePath, '', (err) => {
      if (err) {
        console.error(`Failed to clear log file: ${err}`);
      }
    });
  }
}