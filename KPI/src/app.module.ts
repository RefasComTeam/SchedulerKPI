import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Db2Service } from 'repository/db2Client';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from 'repository/mysqlDbConf';
import { Xmoe0Sta, Xmoe1Sta, Xmoe2Sta, Xmoe3Sta, Xmoe4Sta, Xmoe5Sta, Xmoe6Sta, Xmoe7Sta, Xmoe8Sta } from 'entities/entities/entities';
import { LogService } from './utils/logService';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMySqlConfigService,
    }),
    TypeOrmModule.forFeature([Xmoe0Sta]),
    TypeOrmModule.forFeature([Xmoe1Sta]),
    TypeOrmModule.forFeature([Xmoe2Sta]),
    TypeOrmModule.forFeature([Xmoe3Sta]),
    TypeOrmModule.forFeature([Xmoe4Sta]),
    TypeOrmModule.forFeature([Xmoe5Sta]),
    TypeOrmModule.forFeature([Xmoe6Sta]),
    TypeOrmModule.forFeature([Xmoe7Sta]),
    TypeOrmModule.forFeature([Xmoe8Sta]),

  ],
  controllers: [AppController],
  providers: [AppService, Db2Service, LogService],
  exports: [Db2Service],
})
export class AppModule {}

