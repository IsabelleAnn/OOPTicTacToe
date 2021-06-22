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
var TicTacToe = /** @class */ (function (_super) {
    __extends(TicTacToe, _super);
    function TicTacToe(gui, board) {
        var _this = _super.call(this) || this;
        _this.gui = gui;
        _this.board = board;
        return _this;
    }
    TicTacToe.prototype.checkInput = function (move, gui) {
        while (move != 1 && move != 2 && move != 3 && move != 4 && move != 5 && move != 6 && move != 7 && move != 8 && move != 9 || isNaN(move)) {
            move = gui.inputError();
        }
        return move;
    };
    TicTacToe.prototype.checkIfEmpty = function (move, board, gui) {
        var location = this.board.returnMoveLocation(move);
        while (this.board[location[0]][location[1]] != Cell.Empty) {
            move = this.gui.takenError();
        }
        return move;
    };
    //public AIWin(move: number, board: Board, gui: ConsoleGUI, xOro: Cell): boolean {
    //    //horizontal
    //    for (let i = 0; i < this.board.matrix.length; i++) {
    //        let counter = 0;
    //        for (let j = 0; j < this.board.matrix.length; i++) {
    //            if (this.board.matrix[i][j] == Cell.O) {
    //                counter++;
    //            }
    //        } if (counter == board.boardSize) {
    //            return true;
    //        }
    //    }
    //    //vertical
    //    for (let i = 0; i < this.board.matrix.length; i++) {
    //        let counter = 0;
    //        for (let j = 0; j < this.board.matrix.length; i++) {
    //            if (this.board.matrix[j][i] == Cell.O) {
    //                counter++;
    //            }
    //        } if (counter == board.boardSize) {
    //            return true;
    //        }
    //    }
    //    //diagonal
    //    let counter = 0;
    //    for (let i = 0; i < this.board.matrix.length; i++) {
    //        if (this.board.matrix[i][i] == Cell.O) {
    //            counter++;
    //        }
    //    }
    //    if (counter == board.boardSize) {
    //        return true;
    //    }
    //    counter = 0;
    //    for (let i = this.board.matrix.length; i > 0; i++) {
    //        if (this.board.matrix[i][i] == Cell.O) {
    //            counter++;
    //        }
    //    }
    //    if (counter == board.boardSize) {
    //        return true;
    //    }
    //    return false;
    //}
    TicTacToe.prototype.AIWin = function (boardSize, gameBoard) {
        //horizontal
        for (var i = 0; i < gameBoard.length; i++) {
            var counter_1 = 0;
            for (var j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j] == Cell.O) {
                    counter_1++;
                }
            }
            if (counter_1 == boardSize) {
                return true;
            }
        }
        //vertical
        for (var i = 0; i < gameBoard.length; i++) {
            var counter_2 = 0;
            for (var j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[j][i] == Cell.O) {
                    counter_2++;
                }
            }
            if (counter_2 == boardSize) {
                return true;
            }
        }
        //diagonal
        var counter = 0;
        for (var i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i][i] == Cell.O) {
                counter++;
            }
        }
        if (counter == boardSize) {
            return true;
        }
        counter = 0;
        for (var i = 0; i > gameBoard.length; i++)
            for (var j = gameBoard[i].length; j > 0; j--) {
                if (gameBoard[i][j] == Cell.O) {
                    counter++;
                }
            }
        if (counter == boardSize) {
            return true;
        }
        return false;
    };
    //public humanWin(move: number, board: Board, gui: ConsoleGUI, xOro: Cell): boolean {
    //    //horizontal
    //    for (let i = 0; i < this.board.matrix.length; i++) {
    //        let counter = 0;
    //        for (let j = 0; j < this.board.matrix.length; i++) {
    //            if (this.board.matrix[i][j] == Cell.X) {
    //                counter++;
    //            }
    //        } if (counter == board.boardSize) {
    //            return true;
    //        }
    //    }
    //    //vertical
    //    for (let i = 0; i < this.board.matrix.length; i++) {
    //        let counter = 0;
    //        for (let j = 0; j < this.board.matrix.length; i++) {
    //            if (this.board.matrix[j][i] == Cell.X) {
    //                counter++;
    //            }
    //        } if (counter == board.boardSize) {
    //            return true;
    //        }
    //    }
    //    //diagonal
    //    let counter = 0;
    //    for (let i = 0; i < this.board.matrix.length; i++) {
    //        if (this.board.matrix[i][i] == Cell.X) {
    //            counter++;
    //        }
    //    }
    //    if (counter == board.boardSize) {
    //        return true;
    //    }
    //    counter = 0;
    //    for (let i = this.board.matrix.length; i > 0; i++) {
    //        if (this.board.matrix[i][i] == Cell.X) {
    //            counter++;
    //        }
    //    }
    //    if (counter == board.boardSize) {
    //        return true;
    //    }
    //    return false;
    //}
    TicTacToe.prototype.humanWin = function (boardSize, gameBoard) {
        //horizontal
        for (var i = 0; i < gameBoard.length; i++) {
            var counter_3 = 0;
            for (var j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j] == Cell.X) {
                    counter_3++;
                }
            }
            if (counter_3 == boardSize) {
                return true;
            }
        }
        //vertical
        for (var i = 0; i < gameBoard.length; i++) {
            var counter_4 = 0;
            for (var j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[j][i] == Cell.X) {
                    counter_4++;
                }
            }
            if (counter_4 == boardSize) {
                return true;
            }
        }
        //diagonal
        var counter = 0;
        for (var i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i][i] == Cell.X) {
                counter++;
            }
        }
        if (counter == boardSize) {
            return true;
        }
        counter = 0;
        for (var i = 0; i > gameBoard.length; i++)
            for (var j = gameBoard[i].length; j > 0; j--) {
                if (gameBoard[i][j] == Cell.X) {
                    counter++;
                }
            }
        if (counter == boardSize) {
            return true;
        }
        return false;
    };
    TicTacToe.prototype.checkEnd = function () {
        for (var i = 0; i < this.board.matrix.length; i++) {
            for (var j = 0; j < this.board.matrix.length; j++) {
                if (this.board.matrix[i][j] == Cell.Empty) {
                    return false;
                }
            }
        }
        return true;
    };
    return TicTacToe;
}(Logic));
//# sourceMappingURL=TicTacToe.js.map