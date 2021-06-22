var Game = /** @class */ (function () {
    function Game() {
        this.board = new Board();
        this.human = new Human();
        this.ai = new AI();
        this.gui = new ConsoleGUI();
        this.logic = new TicTacToeLogic();
    }
    Game.prototype.start = function () {
        this.gui.displayBoardState(this.board);
        while (true) {
            this.human.move(this.board, this.logic, this.gui);
            this.gui.displayBoardState(this.board);
            if (this.logic.checkEnd(this.board)) {
                break;
            }
            this.ai.move(this.board, this.logic, this.gui);
            this.gui.displayBoardState(this.board);
            if (this.logic.checkEnd(this.board)) {
                break;
            }
        }
        if (this.logic.humanWin(this.board)) {
            this.gui.humanWinMsg();
        }
        else if (this.logic.AIWin(this.board)) {
            this.gui.AIWinMsg();
        }
        else {
            this.gui.tieMsg();
        }
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map