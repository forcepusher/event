/**
 * Event handler that can subscribe to a dispatcher.
 */
type EventHandler<E> = (event: E) => void;
export default EventHandler;
