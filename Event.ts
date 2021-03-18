import EventSource from './EventSource';
import EventTarget from './EventTarget';

export default class Event<TArgument = void> implements EventSource<TArgument> {
  private eventTargets = new Set<EventTarget<TArgument>>();

  public subscribe(eventTarget: EventTarget<TArgument>): void {
    this.eventTargets.add(eventTarget);
  }

  public unsubscribe(eventTarget: EventTarget<TArgument>): void {
    this.eventTargets.delete(eventTarget);
  }

  public invoke(argument: TArgument): void {
    this.eventTargets.forEach((eventTarget) => eventTarget.onInvoke(argument));
  }
}
