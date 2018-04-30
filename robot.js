"use strict";

function Robot() {
    this.x = null;
    this.y = null;
    this.orientation = null;
    this.maze = null;
}

Robot.prototype.setMaze = function (maze) {
    this.maze = maze;
    this.x = 1;
    this.y = 1;
    this.orientation = maze.startOrientation;
};

Robot.prototype.turnLeft = function () {
    switch (this.orientation) {
        case "north":
            this.orientation = "west";
            break;
        case "south":
            this.orientation = "east";
            break;
        case "east":
            this.orientation = "north";
            break;
        case "west":
            this.orientation = "south";
            break;
    }
};

Robot.prototype.turnRight = function () {
    switch (this.orientation) {
        case "north":
            this.orientation = "east";
            break;
        case "south":
            this.orientation = "west";
            break;
        case "east":
            this.orientation = "south";
            break;
        case "west":
            this.orientation = "north";
            break;
    }
};

Robot.prototype.moveForward = function () {
    if (this.x > this.maze.width || this.y > this.maze.height || this.x < 0 || this.y < 0) {
        return false;
    }
    switch (this.orientation) {
        case "north":
            if (!this.maze.canMove(this.x, this.y+1, this.orientation)) {
                return false;
            }
            this.y++;
            break;
        case "south":
            if (!this.maze.canMove(this.x, this.y-1, this.orientation)) {
                return false;
            }
            this.y--;
            break;
        case "east":
            if (!this.maze.canMove(this.x+1, this.y, this.orientation)) {
                return false;
            }
            this.x++;
            break;
        case "west":
            if (!this.maze.canMove(this.x-1, this.y, this.orientation)) {
                return false;
            }
            this.x--;
            break;
    }
    return true;
};