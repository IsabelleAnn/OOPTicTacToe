class TicTacToeLogic extends Logic {

    public checkMove(move: string, board: Board, gui: GUI): string {
        while (isNaN(Number(move)) || move == "" || Number(move) > 9 || Number(move) < 1) {
            move = gui.inputError();
        }
        let location: number[] = board.returnMoveLocation(Number(move));
        while (board.matrix[location[0]][location[1]] != Cell.Empty) {
            move = gui.takenError();
            while (isNaN(Number(move)) || move == "" || Number(move) > 9 || Number(move) < 1) {
                move = gui.inputError();
            }
            location = board.returnMoveLocation(Number(move));
        }
        return move;
    }

    public AIWin(board:Board): boolean {
        //horizontal
        for (let i = 0; i < board.matrix.length; i++) {
            let counter: number = 0;
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[i][j] == Cell.O) {
                    counter++;
                }
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //vertical
        for (let i = 0; i < board.matrix.length; i++) {
            let counter: number = 0;
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[j][i] == Cell.O) {
                    counter++;
                }
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //diagonal from top to bottom
        let counter: number = 0;
        for (let i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][i] == Cell.O) {
                counter++;
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //diagonal from bottom to top
        counter = 0;
        let j: number = board.matrix.length - 1;
        for (let i: number = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][j] == Cell.O) {
                counter++;
            }
            j--;
        }
        if (counter == board.matrix.length) {
            return true;
        }
        return false;
    }

    public humanWin(board:Board): boolean {
        //horizontal
        for (let i = 0; i < board.matrix.length; i++) {
            let counter: number = 0;
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[i][j] == Cell.X) {
                    counter++;
                }
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //vertical
        for (let i = 0; i < board.matrix.length; i++) {
            let counter: number = 0;
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[j][i] == Cell.X) {
                    counter++;
                }
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //diagonal from top to bottom
        let counter: number = 0;
        for (let i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][i] == Cell.X) {
                counter++;
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //diagonal from bottom to top
        counter = 0;
        let j: number = board.matrix.length - 1;
        for (let i: number = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][j] == Cell.X) {
                counter++;
            }
            j--;
        }
        if (counter == board.matrix.length) {
            return true;
        }
        return false;
    }

    public checkEnd(board:Board): boolean {
        if (this.humanWin(board) || this.AIWin(board)) {
            return true;
        }
        for (let i = 0; i < board.matrix.length; i++) {
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[i][j] == Cell.Empty) {
                    return false;
                }
            }
        }
        return true;
    }

}