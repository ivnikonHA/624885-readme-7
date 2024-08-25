import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

import { Controller } from '@nestjs/common';
import { EmailSubscriberService } from './email-subscriber.service';
import { RabbitRouting } from '@project/core';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly emailSubscriberService: EmailSubscriberService
  ) {}

  @RabbitSubscribe({
    exchange: 'readme.notifications.income',
    routingKey: RabbitRouting.AddSubscriber,
    queue: 'readme.notifications.income'
  })
  public async create(subscriber: CreateSubscriberDto) {
    this.emailSubscriberService.addSubscriber(subscriber);
  }
}
