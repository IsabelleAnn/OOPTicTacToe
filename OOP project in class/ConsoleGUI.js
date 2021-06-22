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
var ConsoleGUI = /** @class */ (function (_super) {
    __extends(ConsoleGUI, _super);
    function ConsoleGUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleGUI.prototype.getMove = function () {
        var move = prompt("Enter your move (a number from 1 to 9).");
        return move;
    };
    ConsoleGUI.prototype.displayBoardState = function (board) {
        var s = "";
        var index = 1;
        for (var i = 0; i < board.matrix.length; i++) {
            for (var j = 0; j < board.matrix[i].length; j++) {
                switch (board.matrix[i][j]) {
                    case Cell.Empty:
                        s += index + " ";
                        break;
                    case Cell.X:
                        s += "X ";
                        break;
                    case Cell.O:
                        s += "O ";
                        break;
                }
                index++;
            }
            s += "\n";
        }
        alert(s);
    };
    ConsoleGUI.prototype.takenError = function () {
        var move = prompt("That cell is taken. Choose a different cell.");
        return move;
    };
    ConsoleGUI.prototype.inputError = function () {
        var move = prompt("Error! Enter a number from 1 to 9 only.");
        return move;
    };
    ConsoleGUI.prototype.humanWinMsg = function () {
        alert("You win! Woohoo!");
    };
    ConsoleGUI.prototype.AIWinMsg = function () {
        alert("You lose! Too bad.");
    };
    ConsoleGUI.prototype.tieMsg = function () {
        alert("Oh look! It's a tie.");
    };
    return ConsoleGUI;
}(GUI));
//# sourceMappingURL=ConsoleGUI.js.map