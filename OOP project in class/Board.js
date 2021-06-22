var Board = /** @class */ (function () {
    function Board() {
        this.boardSize = 3;
        this.matrix = new Array(this.boardSize);
        this.createBoard();
    }
    Board.prototype.createBoard = function () {
        for (var i = 0; i < this.matrix.length; i++) {
            this.matrix[i] = new Array(this.boardSize);
        }
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = Cell.Empty;
            }
        }
        return this.matrix;
    };
    Board.prototype.returnMoveLocation = function (move) {
        var i;
        var j;
        switch (move) {
            case 1:
                i = 0;
                j = 0;
                break;
            case 2:
                i = 0;
                j = 1;
                break;
            case 3:
                i = 0;
                j = 2;
                break;
            case 4:
                i = 1;
                j = 0;
                break;
            case 5:
                i = 1;
                j = 1;
                break;
            case 6:
                i = 1;
                j = 2;
                break;
            case 7:
                i = 2;
                j = 0;
                break;
            case 8:
                i = 2;
                j = 1;
                break;
            case 9:
                i = 2;
                j = 2;
        }
        var locationArr = [i, j];
        return locationArr;
    };
    Board.prototype.setCell = function (location, xOrO) {
        this.matrix[location[0]][location[1]] = xOrO;
    };
    return Board;
}());
//# sourceMappingURL=Board.js.map