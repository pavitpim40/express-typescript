"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
};
exports.createTodo = createTodo;
