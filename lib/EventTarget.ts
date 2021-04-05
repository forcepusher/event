export default interface EventTarget<TArgument = void> {
  /**
   * Use Adapter pattern to forward events from onInvoke. Like this object:
   * { onInvoke: (player) => this.onPlayerAdded(player) }
   */
  onInvoke(argument: TArgument): void;
}
