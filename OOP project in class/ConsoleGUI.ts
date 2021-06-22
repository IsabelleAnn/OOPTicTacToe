class ConsoleGUI extends GUI {

    public getMove(): string {
        let move: string = prompt("Enter your move (a number from 1 to 9).");
        return move;
    }

    public displayBoardState(board:Board): void {
        let s: string = "";
        let index: number = 1;
        for (let i = 0; i < board.matrix.length; i++) {
            for (let j = 0; j < board.matrix[i].length; j++) {
                switch (board.matrix[i][j]) {
                    case Cell.Empty: s += index + " ";
                        break;
                    case Cell.X: s += "X ";
                        break;
                    case Cell.O: s += "O ";
                        break;
                }
                index++;
            }
            s += "\n";
        }
        alert(s);
    }

    public takenError(): string {
        let move: string = prompt("That cell is taken. Choose a different cell.");
        return move;
    }

    public inputError(): string {
        let move: string = prompt("Error! Enter a number from 1 to 9 only.");
        return move;
    }

    public humanWinMsg(): void {
        alert("You win! Woohoo!");
    }

    public AIWinMsg(): void {
        alert("You lose! Too bad.");
    }

    public tieMsg(): void {
        alert("Oh look! It's a tie.");
    }

}