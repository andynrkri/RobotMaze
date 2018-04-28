"use strict";

function Robot() {
    this.x = null;
    this.y = null;
    this.orientation = null;
    this.maze = null;
}

Robot.prototype.setMaze = function (maze) {
    this.maze = maze;
    this.x = maze.x;
    this.y = maze.y;
    this.orientation = maze.startOrientation;
};

Robot.prototype.turnTo = function (direction) {
    this.orientation = direction;
};

Robot.prototype.moveForward = function () {
    if (this.orientation === "north") {
        this.y++;
    } else if (this.orientation === "south") {
        this.y--;
    } else if (this.orientation === "east") {
        this.x++;
    } else if (this.orientation === "west") {
        this.x--;
    }
};


