import {Game, Player} from './main.model';

function createPlayer(playerNumber: number, points: number): Player {
    return {
        name: `Player ${playerNumber}`,
        points
    };
}

export function updateGameScore(player1Points: number, player2Points: number): Game {
    return {
        player1: createPlayer(1, player1Points),
        player2: createPlayer(2, player2Points)
    };
}

export function decideGameWinner(game: Game): string {
    // TODO
    return '';
}

export function printScore(scores: number[]): string {
    // TODO
    return '';
}