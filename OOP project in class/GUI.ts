abstract class GUI {

    public abstract getMove(): string;
    public abstract displayBoardState(board: Board): void;
    public abstract inputError(): string;
    public abstract takenError(): string;
    public abstract humanWinMsg(): void;
    public abstract AIWinMsg(): void;
    public abstract tieMsg(): void;

}