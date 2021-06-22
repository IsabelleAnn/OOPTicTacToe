abstract class Logic {

    public abstract checkMove(move: string, board: Board, gui: GUI): string;
    public abstract AIWin(board:Board): boolean;
    public abstract humanWin(board:Board): boolean
    public abstract checkEnd(board:Board): boolean;

}