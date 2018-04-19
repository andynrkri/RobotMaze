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

Maze.prototype.setStart = (startX, startY) => {
    this.startX = startX;
    this.startY = startY;
};