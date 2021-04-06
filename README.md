To install use `npm install forcepusher/event`<br>
In case you're :nerd_face: `npm install forcepusher/event#semver:^2.0.0 --save-dev`<br>
To uninstall use `npm uninstall event`<br>
<br>
Works similar to C# events.<br>
```
import Event from 'event';

export default class Game {
  public playerAddedEvent = new Event<Player>();
}
```
Use an Adapter pattern to redirect `onInvoke` method calls from `EventTarget`.<br>
```
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
