import { Publisher, Subjects, TicketCreatedEvent } from '@banzotickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
