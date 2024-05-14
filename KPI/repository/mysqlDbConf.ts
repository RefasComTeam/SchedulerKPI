import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Xfoxcsta, Xmoe0Sta, Xmoe1Sta, Xmoe2Sta, Xmoe3Sta, Xmoe4Sta, Xmoe5Sta, Xmoe6Sta, Xmoe7Sta, Xmoe8Sta} from "entities/entities/entities";


@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
        type: 'mysql',
        host: '192.168.1.203',
        port: 3306,
        username: 'service',
        password: 'Refas123$1',
        database: 'RefasKpi',
        entities: [
          Xmoe0Sta,
          Xmoe1Sta,
          Xmoe2Sta,
          Xmoe3Sta,
          Xmoe4Sta,
          Xmoe5Sta,
          Xmoe6Sta,
          Xmoe7Sta,
          Xmoe8Sta,
          Xfoxcsta
        ],
        synchronize: true,
    };
  }
}