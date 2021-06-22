class AI extends Player {

    public move(board: Board, logic: Logic, gui: GUI): void {
        let emptySpot: number[] = new Array<number>();
        emptySpot = this.checkForWinMove(board);
        if (emptySpot.length < 2) {
            emptySpot = this.checkForBlockMove(board);
        }
        if (emptySpot.length < 2) {
            this.makeRandomMove(board);
        }
        else {
            board.setCell(emptySpot, Cell.O);
        }
    }

    public checkForWinMove(board: Board): number[] {
        //horizontal
        for (let i = 0; i < board.matrix.length; i++) {
            let counterO: number = 0;
            let counterX: number = 0;
            let emptySpot: number[] = new Array<number>();
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[i][j] == Cell.O) {
                    counterO++;
                }
                if (board.matrix[i][j] == Cell.X) {
                    counterX++;
                }
                if (board.matrix[i][j] == Cell.Empty) {
                    emptySpot = [i, j];
                }
            }
            if (counterO == (board.matrix.length - 1) && counterX == 0) {
                return emptySpot;
            }
        }
        //vertical
        for (let i = 0; i < board.matrix.length; i++) {
            let counterO: number = 0;
            let counterX: number = 0;
            let emptySpot: number[] = new Array<number>();
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[j][i] == Cell.O) {
                    counterO++;
                }
                if (board.matrix[j][i] == Cell.X) {
                    counterX++;
                }
                if (board.matrix[j][i] == Cell.Empty) {
                    emptySpot = [j, i];
                }
            }
            if (counterO == (board.matrix.length - 1) && counterX == 0) {
                return emptySpot;
            }
        }
        //diagonal from top to bottom
        let counterO: number = 0;
        let counterX: number = 0;
        let emptySpot: number[] = new Array<number>();
        for (let i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][i] == Cell.O) {
                counterO++;
            }
            if (board.matrix[i][i] == Cell.X) {
                counterX++;
            }
            if (board.matrix[i][i] == Cell.Empty) {
                emptySpot = [i, i];
            }
        }
        if (counterO == (board.matrix.length - 1) && counterX == 0) {
            return emptySpot;
        }
        //diagonal from bottom to top
        counterO = 0;
        counterX = 0;
        emptySpot = new Array<number>();
        let j: number = board.matrix.length - 1;
        for (let i: number = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][j] == Cell.O) {
                counterO++;
            }
            if (board.matrix[i][j] == Cell.X) {
                counterX++;
            }
            if (board.matrix[i][j] == Cell.Empty) {
                emptySpot = [i, j];
            }
            j--;
        }
        if (counterO == (board.matrix.length - 1) && counterX == 0) {
            return emptySpot;
        }
        return emptySpot = new Array<number>();
    }

    public checkForBlockMove(board: Board): number[] {
        //horizontal
        for (let i = 0; i < board.matrix.length; i++) {
            let counterO: number = 0;
            let counterX: number = 0;
            let emptySpot: number[] = new Array<number>();
            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[i][j] == Cell.O) {
                    counterO++;
                }
                if (board.matrix[i][j] == Cell.X) {
                    counterX++;
                }
                if (board.matrix[i][j] == Cell.Empty) {
                    emptySpot = [i, j];
                }
            }
            if (counterX == (board.matrix.length - 1) && counterO == 0) {
                return emptySpot;
            }
        }
        //vertical
        for (let i = 0; i < board.matrix.length; i++) {
            let counterO: number = 0;
            let counterX: number = 0;
            let emptySpot: number[] = new Array<number>();

            for (let j = 0; j < board.matrix.length; j++) {
                if (board.matrix[j][i] == Cell.O) {
                    counterO++;
                }
                if (board.matrix[j][i] == Cell.X) {
                    counterX++;
                }
                if (board.matrix[j][i] == Cell.Empty) {
                    emptySpot = [j, i];
                }
            }
            if (counterX == (board.matrix.length - 1) && counterO == 0) {
                return emptySpot;
            }
        }
        //diagonal from top to bottom
        let counterO: number = 0;
        let counterX: number = 0;
        let emptySpot: number[] = new Array<number>();
        for (let i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][i] == Cell.O) {
                counterO++;
            }
            if (board.matrix[i][i] == Cell.X) {
                counterX++;
            }
            if (board.matrix[i][i] == Cell.Empty) {
                emptySpot = [i, i];
            }
        }
        if (counterX == (board.matrix.length - 1) && counterO == 0) {
            return emptySpot;
        }
        //diagonal from bottom to top
        counterO = 0;
        counterX = 0;
        emptySpot = new Array<number>();
        let j: number = board.matrix.length - 1;
        for (let i: number = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][j] == Cell.O) {
                counterO++;
            }
            if (board.matrix[i][j] == Cell.X) {
                counterX++;
            }
            if (board.matrix[i][j] == Cell.Empty) {
                emptySpot = [i, j];
            }
            j--;
        }
        if (counterX == (board.matrix.length - 1) && counterO == 0) {
            return emptySpot;
        }
        return emptySpot = new Array<number>();
    }

    public makeRandomMove(board: Board): void {
        while (true) {
            let i: number = Math.floor(Math.random() * board.boardSize);
            let j: number = Math.floor(Math.random() * board.boardSize);
            if (board.matrix[i][j] == Cell.Empty) {
                let location: number[] = [i, j];
                board.setCell(location, Cell.O);
                break;
            }
        }
    }

}