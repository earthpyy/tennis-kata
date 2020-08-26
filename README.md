# tennis-kata

## Rules

+ A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
+ The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.
+ If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
+ If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

## Alternate explanations

+ Each player can have either of these points in one game 0 15 30 40
+ If you have 40 and you win the ball you win the game, however there are special rules.
+ If both have 40 the players are deuce. a. If the game is in deuce, the winner of a ball will have advantage and game ball. b. If the player with advantage wins the ball he wins the game c. If the player without advantage wins they are back at deuce.

## Requirements
- `npm`
- `node` >= 10

## Functions

### `createPlayer`
Create a player from player number and points.

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`playerNumber` | `1 \| 2` | Player number
`points` | `number` | Player points

#### Return
A `Player` implemented object.

### `updateGameScore`
Create a game for both players.

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`player1Points` | `number` | Player 1 points
`player2Points` | `number` | Player 2 points

#### Return
A `Game` implemented object.

### `isPlayerWinner`
Check whether this player is the winner or not by:
1. Score equals or more than 4 points
2. Score more than the other player at least 2 points

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`points` | `number` | Point of player to check
`otherPoints` | `number` | Point of other player

#### Return
(`boolean`) Given player is the winner or not.

### `decideGameWinner`
Decide which player is the game winner by given their points.

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`game` | `Game` | Game to decide

#### Return
(`string`) Winner player's name.

#### Exceptions
- `Error`: if no winner at the moment.

### `isInDeucePhase`
Check whether the game is in deuce phase or not (both player scored at least 3 points).

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`game` | `Game` | Game to decide

#### Return
(`boolean`) Given game is in deuce phase or not

### `convertNormalPhasePoints`
Convert points **in normal pahse** to score.

Points | Score
------ | -----
`0` | `love`
`1` | `fifteen`
`2` | `thirty`
`3` | `forty`

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`points` | `number` | Points to convert

#### Return
(`string`) Score as a text

### `printScore`
Print scores of both players.

#### Parameters
Parameter | Type | Description
--------- | ---- | -----------
`scores` | `number[]` | Scores of both player (index 0 = player 1, index 1 = player 2)

#### Return
(`string`) Scores of both players.

## Interfaces

### `Game`

Variable | Type | Description
-------- | ---- | -----------
`player1` | `Player` | Player 1 information
`player2` | `Player` | Player 2 information

### `Player`

Variable | Type | Description
-------- | ---- | -----------
`name` | `string` | Name of player
`points` | `number` | Points

## Constants

### `SCORES`
Presenting Tennis's scores in order of points.
