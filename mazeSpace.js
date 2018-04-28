"use strict";

function Maze(width, height) {
    this.width = width;
    this.height = height;

    this.startX = null;
    this.startY = null;

    this.startOrientation = null;

    this.endX = null;
    this.endY = null;
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
