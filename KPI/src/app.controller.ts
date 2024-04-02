import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  updateData(): string {
    this.appService.updateData();
    return "Aggiornamento avviato";
  }
}
