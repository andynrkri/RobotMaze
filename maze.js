"use strict";

function Maze(width, height) {
    this.width = width;
    this.height = height;

    this.startX = null;
    this.startY = null;

    this.directions = ["east", "west", "north", "south"];

    this.startOrientation = null;

    this.endX = null;
    this.endY = null;

    this.spaces = [];

    for (var i = 0; i < this.width; i++) {
        this.spaces[i] = [];
        for (var j = 0; j < this.height; j++) {
            this.spaces[i][j] = new MazeSpace(this.directions);
        }
    }
}

Maze.prototype.setStart = function (startX, startY, orientation) {
    this.startX = startX;
    this.startY = startY;
    this.startOrientation = orientation;
};

Maze.prototype.setEnd = function (endX, endY) {
    this.endX = endX;
    this.endY = endY;
};

Maze.prototype.setWall = function (x, y, direction) {
    this.spaces[x - 1][y - 1].setWall(direction);
};

Maze.prototype.canMove = function (x, y, direction) {
    return !this.spaces[x - 1][y - 1][direction];
};
