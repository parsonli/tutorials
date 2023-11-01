/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Todo } from "../todo/todo";
import {useAutofocus} from "../utils"

export class TodoList extends Component {
    static template = "owl_playground.todolist";
    static components = { Todo };
    setup() {
        this.nextId = 0;
        this.todoList = useState([]);
        useAutofocus('todolistinput');
    }
    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todoList.push({ id: this.nextId++, description: ev.target.value, done: false });
            ev.target.value = "";

        }

    }
}
