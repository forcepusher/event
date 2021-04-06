export default interface EventTarget<TArgument = void> {
  onInvoke(argument: TArgument): void;
}
