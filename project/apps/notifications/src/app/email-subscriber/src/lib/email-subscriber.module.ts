import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { getRabbitMQOptions } from '@project/helpers';
import { EmailSubscriberModel, EmailSubscriberSchema } from './email-subscriber.model';
import { EmailSubscriberFactory } from './email-subscriber.factory';
import { EmailSubscriberRepository } from './email-subscriber.repository';
import { EmailSubscriberService } from './email-subscriber.service';
import { EmailSubscriberController } from './email-subscriber.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmailSubscriberModel.name, schema: EmailSubscriberSchema }
    ]),
    RabbitMQModule.forRootAsync(
      RabbitMQModule,
      getRabbitMQOptions('application.rabbit')
    )
  ],
  providers: [
    EmailSubscriberFactory,
    EmailSubscriberRepository,
    EmailSubscriberService
  ],
  controllers: [
    EmailSubscriberController
  ]
})
export class EmailSubscriberModule {};
