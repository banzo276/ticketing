import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@banzotickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
