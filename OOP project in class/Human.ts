class Human extends Player {

    public move(board: Board, logic: Logic, gui: GUI): void {
        let move: string = gui.getMove();
        move = logic.checkMove(move, board, gui);
        let location: number[] = board.returnMoveLocation(Number(move));
        board.setCell(location, Cell.X);
    }

}