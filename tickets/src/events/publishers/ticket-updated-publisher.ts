import { Publisher, Subjects, TicketUpdatedEvent } from '@banzotickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
