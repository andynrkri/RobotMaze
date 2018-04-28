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

    switch (this.orientation) {
        case "north":
            this.y++;
            break;
        case "south":
            this.y--;
            break;
        case "east":
            this.x++;
            break;
        case "west":
            this.x--;
            break;
    }
};


