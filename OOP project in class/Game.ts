class Game {

    public board: Board;
    public human: Player;
    public ai: Player;
    public logic: Logic;
    public gui: GUI;

    public constructor() {
        this.board = new Board();
        this.human = new Human();
        this.ai = new AI();
        this.gui = new ConsoleGUI();
        this.logic = new TicTacToeLogic();
    }

    public start(): void {
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
    }

}