/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
    static template = "owl_playground.todo";
    static props = {
        id: { type: Number },
        description: { type: String },
        done: { type: Boolean },
        toggleState: { type: Function },
        removeTodo: { type: Function},
    };
    onClick(ev) {
        this.props.toggleState(this.props.id);
    };
    onRemove() {
        this.props.removeTodo(this.props.id);
    }

}
