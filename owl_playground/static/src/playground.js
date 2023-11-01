/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";
import { TodoList } from "./todo_list/todo_list";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter, TodoList};
      
    }
