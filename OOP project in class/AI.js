var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AI = /** @class */ (function (_super) {
    __extends(AI, _super);
    function AI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AI.prototype.move = function (board, logic, gui) {
        var emptySpot = new Array();
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
    };
    AI.prototype.checkForWinMove = function (board) {
        //horizontal
        for (var i = 0; i < board.matrix.length; i++) {
            var counterO_1 = 0;
            var counterX_1 = 0;
            var emptySpot_1 = new Array();
            for (var j_1 = 0; j_1 < board.matrix.length; j_1++) {
                if (board.matrix[i][j_1] == Cell.O) {
                    counterO_1++;
                }
                if (board.matrix[i][j_1] == Cell.X) {
                    counterX_1++;
                }
                if (board.matrix[i][j_1] == Cell.Empty) {
                    emptySpot_1 = [i, j_1];
                }
            }
            if (counterO_1 == (board.matrix.length - 1) && counterX_1 == 0) {
                return emptySpot_1;
            }
        }
        //vertical
        for (var i = 0; i < board.matrix.length; i++) {
            var counterO_2 = 0;
            var counterX_2 = 0;
            var emptySpot_2 = new Array();
            for (var j_2 = 0; j_2 < board.matrix.length; j_2++) {
                if (board.matrix[j_2][i] == Cell.O) {
                    counterO_2++;
                }
                if (board.matrix[j_2][i] == Cell.X) {
                    counterX_2++;
                }
                if (board.matrix[j_2][i] == Cell.Empty) {
                    emptySpot_2 = [j_2, i];
                }
            }
            if (counterO_2 == (board.matrix.length - 1) && counterX_2 == 0) {
                return emptySpot_2;
            }
        }
        //diagonal from top to bottom
        var counterO = 0;
        var counterX = 0;
        var emptySpot = new Array();
        for (var i = 0; i < board.matrix.length; i++) {
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
        emptySpot = new Array();
        var j = board.matrix.length - 1;
        for (var i = 0; i < board.matrix.length; i++) {
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
        return emptySpot = new Array();
    };
    AI.prototype.checkForBlockMove = function (board) {
        //horizontal
        for (var i = 0; i < board.matrix.length; i++) {
            var counterO_3 = 0;
            var counterX_3 = 0;
            var emptySpot_3 = new Array();
            for (var j_3 = 0; j_3 < board.matrix.length; j_3++) {
                if (board.matrix[i][j_3] == Cell.O) {
                    counterO_3++;
                }
                if (board.matrix[i][j_3] == Cell.X) {
                    counterX_3++;
                }
                if (board.matrix[i][j_3] == Cell.Empty) {
                    emptySpot_3 = [i, j_3];
                }
            }
            if (counterX_3 == (board.matrix.length - 1) && counterO_3 == 0) {
                return emptySpot_3;
            }
        }
        //vertical
        for (var i = 0; i < board.matrix.length; i++) {
            var counterO_4 = 0;
            var counterX_4 = 0;
            var emptySpot_4 = new Array();
            for (var j_4 = 0; j_4 < board.matrix.length; j_4++) {
                if (board.matrix[j_4][i] == Cell.O) {
                    counterO_4++;
                }
                if (board.matrix[j_4][i] == Cell.X) {
                    counterX_4++;
                }
                if (board.matrix[j_4][i] == Cell.Empty) {
                    emptySpot_4 = [j_4, i];
                }
            }
            if (counterX_4 == (board.matrix.length - 1) && counterO_4 == 0) {
                return emptySpot_4;
            }
        }
        //diagonal from top to bottom
        var counterO = 0;
        var counterX = 0;
        var emptySpot = new Array();
        for (var i = 0; i < board.matrix.length; i++) {
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
        emptySpot = new Array();
        var j = board.matrix.length - 1;
        for (var i = 0; i < board.matrix.length; i++) {
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
        return emptySpot = new Array();
    };
    AI.prototype.makeRandomMove = function (board) {
        while (true) {
            var i = Math.floor(Math.random() * board.boardSize);
            var j = Math.floor(Math.random() * board.boardSize);
            if (board.matrix[i][j] == Cell.Empty) {
                var location_1 = [i, j];
                board.setCell(location_1, Cell.O);
                break;
            }
        }
    };
    return AI;
}(Player));
//# sourceMappingURL=AI.js.map