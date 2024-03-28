import { Injectable } from '@nestjs/common';
//import * as ibmdb from 'ibm_db';
//import odbc = require('odbc');

@Injectable()
export class Db2Service {
  private connection;

  constructor() {
    /*const dsn = "DATABASE=ACG_DATPLC;HOSTNAME=192.168.1.99;UID=qconnect;PWD=qconnect;PORT=446;PROTOCOL=TCPIP";

    ibmdb.open(dsn, function (err, conn) {
      if (err) return console.log(err);

      conn.query('SELECT * FROM MOE7STA', function (err, data) {
        if (err) console.log(err);
        else console.log(data);

        conn.close(function () {
          console.log('Connessione chiusa');
        });
      });
    });*/
    
  }

  async getOrdini() {
   /* const connection = await odbc.connect('DSN=ACG_DATPLC');
    try {
      const data = await connection.query('SELECT * FROM §MOE7STA');
      await connection.close();
      return data;
    } catch (error) {
      await connection.close();
      console.error(error);
      return 'eccezione non gestita';
    }*/
  }

}

//
/*
[DEVSHIPPY]
Description = iSeries Access ODBC Driver
Driver = IBM i Access ODBC Driver
System = 192.168.30.5
UserID = LINUX
Password = LINUX
Naming = 0
DefaultLibraries = SAIS_Y2KVF
Database =
ConnectionType = 0
CommitMode = 2
ExtendedDynamic = 1
DefaultPkgLibrary =
DefaultPackage = A/DEFAULT(IBM),2,0,1,0,512
AllowDataCompression = 1
LibraryView = 0
AllowUnsupportedChar = 1
ForceTranslation = 1
*/
