import { SCORES } from './main.constant';
import { Game, Player } from './main.model';

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

function isPlayerWinner(points: number, otherPoints: number): boolean {
    return (
        // player has at least 4 points
        points >= 4 &&
        // and at least 2 points ahead
        points - otherPoints >= 2
    );
}

export function decideGameWinner(game: Game): string {
    if (isPlayerWinner(game.player1.points, game.player2.points)) {
        return 'Player 1';
    } else if (isPlayerWinner(game.player2.points, game.player1.points)) {
        return 'Player 2';
    }
    throw new Error('No winner yet.');
}

function isInDeucePhase(game: Game): boolean {
    // both player scored at least 3 points
    return game.player1.points >= 3 && game.player2.points >= 3;
}

function convertNormalPhasePoints(points: number): string {
    return SCORES[points];
}

export function printScore(scores: number[]): string {
    // parse into Game
    const game = updateGameScore(scores[0], scores[1]);

    // deuce phase
    if (isInDeucePhase(game)) {
        // deuce
        if (game.player1.points === game.player2.points) {
            return 'deuce';
        }

        // advantage
        return 'advantage player ' + (game.player1.points > game.player2.points ? '1' : '2');
    }

    // normal phase
    const player1Score = convertNormalPhasePoints(game.player1.points);
    const player2Score = convertNormalPhasePoints(game.player2.points);

    return `${player1Score} - ${player2Score}`;
}