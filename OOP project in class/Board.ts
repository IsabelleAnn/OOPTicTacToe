class Board {

    public boardSize: number;
    public matrix: Array<Cell[]>;

    public constructor() {
        this.boardSize = 3;
        this.matrix = new Array<Cell[]>(this.boardSize);
        this.createBoard();
    }

    public createBoard(): Array<Cell[]> {
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i] = new Array<Cell>(this.boardSize);
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = Cell.Empty;
            }
        } return this.matrix;
    }

    public returnMoveLocation(move: number): number[] {
        let i: number;
        let j: number;
        switch (move) {
            case 1: i = 0; j = 0;
                break;
            case 2: i = 0; j = 1;
                break;
            case 3: i = 0; j = 2;
                break;
            case 4: i = 1; j = 0;
                break;
            case 5: i = 1; j = 1;
                break;
            case 6: i = 1; j = 2;
                break;
            case 7: i = 2; j = 0;
                break;
            case 8: i = 2; j = 1;
                break;
            case 9: i = 2; j = 2;
        }
        let locationArr: number[] = [i, j];
        return locationArr;
    }

    public setCell(location: number[], xOrO: Cell): void {
        this.matrix[location[0]][location[1]] = xOrO;
    }

}