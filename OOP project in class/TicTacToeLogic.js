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
var TicTacToeLogic = /** @class */ (function (_super) {
    __extends(TicTacToeLogic, _super);
    function TicTacToeLogic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TicTacToeLogic.prototype.checkMove = function (move, board, gui) {
        while (isNaN(Number(move)) || move == "" || Number(move) > 9 || Number(move) < 1) {
            move = gui.inputError();
        }
        var location = board.returnMoveLocation(Number(move));
        while (board.matrix[location[0]][location[1]] != Cell.Empty) {
            move = gui.takenError();
            while (isNaN(Number(move)) || move == "" || Number(move) > 9 || Number(move) < 1) {
                move = gui.inputError();
            }
            location = board.returnMoveLocation(Number(move));
        }
        return move;
    };
    TicTacToeLogic.prototype.AIWin = function (board) {
        //horizontal
        for (var i = 0; i < board.matrix.length; i++) {
            var counter_1 = 0;
            for (var j_1 = 0; j_1 < board.matrix.length; j_1++) {
                if (board.matrix[i][j_1] == Cell.O) {
                    counter_1++;
                }
            }
            if (counter_1 == board.matrix.length) {
                return true;
            }
        }
        //vertical
        for (var i = 0; i < board.matrix.length; i++) {
            var counter_2 = 0;
            for (var j_2 = 0; j_2 < board.matrix.length; j_2++) {
                if (board.matrix[j_2][i] == Cell.O) {
                    counter_2++;
                }
            }
            if (counter_2 == board.matrix.length) {
                return true;
            }
        }
        //diagonal from top to bottom
        var counter = 0;
        for (var i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][i] == Cell.O) {
                counter++;
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //diagonal from bottom to top
        counter = 0;
        var j = board.matrix.length - 1;
        for (var i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][j] == Cell.O) {
                counter++;
            }
            j--;
        }
        if (counter == board.matrix.length) {
            return true;
        }
        return false;
    };
    TicTacToeLogic.prototype.humanWin = function (board) {
        //horizontal
        for (var i = 0; i < board.matrix.length; i++) {
            var counter_3 = 0;
            for (var j_3 = 0; j_3 < board.matrix.length; j_3++) {
                if (board.matrix[i][j_3] == Cell.X) {
                    counter_3++;
                }
            }
            if (counter_3 == board.matrix.length) {
                return true;
            }
        }
        //vertical
        for (var i = 0; i < board.matrix.length; i++) {
            var counter_4 = 0;
            for (var j_4 = 0; j_4 < board.matrix.length; j_4++) {
                if (board.matrix[j_4][i] == Cell.X) {
                    counter_4++;
                }
            }
            if (counter_4 == board.matrix.length) {
                return true;
            }
        }
        //diagonal from top to bottom
        var counter = 0;
        for (var i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][i] == Cell.X) {
                counter++;
            }
            if (counter == board.matrix.length) {
                return true;
            }
        }
        //diagonal from bottom to top
        counter = 0;
        var j = board.matrix.length - 1;
        for (var i = 0; i < board.matrix.length; i++) {
            if (board.matrix[i][j] == Cell.X) {
                counter++;
            }
            j--;
        }
        if (counter == board.matrix.length) {
            return true;
        }
        return false;
    };
    TicTacToeLogic.prototype.checkEnd = function (board) {
        if (this.humanWin(board) || this.AIWin(board)) {
            return true;
        }
        for (var i = 0; i < board.matrix.length; i++) {
            for (var j = 0; j < board.matrix.length; j++) {
                if (board.matrix[i][j] == Cell.Empty) {
                    return false;
                }
            }
        }
        return true;
    };
    return TicTacToeLogic;
}(Logic));
//# sourceMappingURL=TicTacToeLogic.js.map