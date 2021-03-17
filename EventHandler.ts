/**
 * Event handler that can subscribe to a dispatcher.
 */
type EventHandler<E = void> = (event: E) => void;
export default EventHandler;
