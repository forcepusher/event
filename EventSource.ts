import EventTarget from './EventTarget';

export default interface EventSource<TArgument = void> {
  subscribe(eventTarget: EventTarget<TArgument>): void;

  unsubscribe(eventTarget: EventTarget<TArgument>): void;

  invoke(argument: TArgument): void;
}
