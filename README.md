To install use `npm install forcepusher/event`<br>
In case you're :nerd_face: `npm install forcepusher/event#semver:^3.0.0 --save-dev`<br>
To uninstall use `npm uninstall event`<br>
<br>
Works similar to C# events.<br>
```typescript
import Event from 'event';

export default class Game {
  public playerAddedEvent = new Event<Player>();

  public addPlayer(player: Player) {
    this.playerAddedEvent.invoke(player);
  }
}
```
Use an Adapter pattern to redirect `onInvoke` method calls from `EventTarget`.<br>
```typescript
import Game from './Game';

export default class PlayerLog {
  public constructor(game: Game) {
    game.playerAddedEvent.subscribe({ onInvoke: (player) => this.onPlayerAdded(player) });
  }

  private onPlayerAdded(player: Player) {
    console.log(player);
  }
}
```
