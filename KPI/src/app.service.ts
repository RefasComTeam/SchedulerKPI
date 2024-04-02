import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { AxiosError } from 'axios';
import { Xmoe1Sta } from 'entities/entities/Xmoe1Sta';
import { Db2Service } from 'repository/db2Client';
import { catchError, firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Xmoe0Sta } from 'entities/entities/Xmoe0Sta';
import { Xmoe2Sta } from 'entities/entities/Xmoe2Sta';
import { Xmoe3Sta } from 'entities/entities/Xmoe3Sta';
import { Xmoe4Sta } from 'entities/entities/Xmoe4Sta';
import { Xmoe5Sta } from 'entities/entities/Xmoe5Sta';
import { Xmoe6Sta } from 'entities/entities/Xmoe6Sta';
import { Xmoe7Sta } from 'entities/entities/Xmoe7Sta';
import { Xmoe8Sta } from 'entities/entities/Xmoe8Sta';
import { LogService } from './utils/logService';

@Injectable()
export class AppService {

  //Db2Client: Db2Service;
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly httpService: HttpService,
    private logService: LogService,
    @InjectRepository(Xmoe0Sta)
    private Xmoe0StaRepository: Repository<Xmoe0Sta>,
    @InjectRepository(Xmoe1Sta)
    private Xmoe1StaRepository: Repository<Xmoe1Sta>,
    @InjectRepository(Xmoe2Sta)
    private Xmoe2StaRepository: Repository<Xmoe2Sta>,
    @InjectRepository(Xmoe3Sta)
    private Xmoe3StaRepository: Repository<Xmoe3Sta>,
    @InjectRepository(Xmoe4Sta)
    private Xmoe4StaRepository: Repository<Xmoe4Sta>,
    @InjectRepository(Xmoe5Sta)
    private Xmoe5StaRepository: Repository<Xmoe5Sta>,
    @InjectRepository(Xmoe6Sta)
    private Xmoe6StaRepository: Repository<Xmoe6Sta>,
    @InjectRepository(Xmoe7Sta)
    private Xmoe7StaRepository: Repository<Xmoe7Sta>,
    @InjectRepository(Xmoe8Sta)
    private Xmoe8StaRepository: Repository<Xmoe8Sta>) {
    // this.Db2Client = new Db2Service();
    this.startJob();
  }
  updateData(): void {

    this.startJob();

  }

  /*
  * * * * * * *
  | | | | | |
  | | | | | day of week
  | | | | months
  | | | day of month
  | | hours
  | minutes
  seconds (optional)
*/

  // * * * * * *	every second
  // 45 * * * * *	every minute, on the 45th second
  // 0 10 * * * *	every hour, at the start of the 10th minute
  // 0 */30 9-17 * * *	every 30 minutes between 9am and 5pm
  // 0 30 11 * * 1-5	Monday to Friday at 11:30am 

  //CronExpression.EVERY_30_SECONDS

  //@Cron(new Date(Date.now() + 10 * 1000)) to schedule a job to run 10 seconds after the app starts

  //@Interval(10000) in ms, ogni 10 secondi

  @Cron(CronExpression.EVERY_DAY_AT_7AM)
  async handleCron() {

    await this.startJob();

  }

  async startJob(): Promise<void> {
    this.logService.clearLog();
    this.logService.writeLog('Cron job started!');

    await this.getXmoe0Sta();
    await this.getXmoe1Sta();
    await this.getXmoe2Sta();
    await this.getXmoe3Sta();
    await this.getXmoe4Sta();
    await this.getXmoe5Sta();
    await this.getXmoe6Sta();
    await this.getXmoe7Sta();
    await this.getXmoe8Sta();

    this.logService.writeLog('Cron job finished!');
  }

  async getXmoe0Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE0STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE0STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe0Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe0StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe0StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async getXmoe1Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE1STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE1STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe1Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe1StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe1StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }

  }

  async getXmoe2Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE2STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE2STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe2Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe2StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe2StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }

  }

  async getXmoe3Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE3STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE3STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe3Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe3StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe3StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async getXmoe4Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE4STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE4STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe4Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe4StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe4StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }
  
  async getXmoe5Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE5STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE5STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe5Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe5StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe5StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async getXmoe6Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE6STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE6STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe6Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe6StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe6StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async getXmoe7Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE7STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE7STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe7Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe7StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe7StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async getXmoe8Sta(): Promise<boolean> {
    try {
      this.logService.writeLog('XOMOE8STA cron job started!');

      var data = await await firstValueFrom(this.httpService.get('http://192.168.1.99:10088/refas/MYSQL/XMOE8STA.php').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ));

      var newValues: Xmoe8Sta[] = data.data;

      var dRes: DeleteResult = await this.Xmoe8StaRepository.delete({});

      this.logService.writeLog('deleted rows: ' + dRes.affected);

      var iRes = await this.Xmoe8StaRepository.save(newValues);

      this.logService.writeLog('inserted rows: ' + iRes.length);

      return true;
    }
    catch (error) {
      this.logger.error(error);
      return false;
    }
  }
}
