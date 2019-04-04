/**
 * importing the react package and Paragraph component to use inside the ThemeSwitch class component
 */
import React, { Component } from "react";
import { Paragraph } from "./Paragraph";

/**
 * defining and declaring the ThemeSwitch class component
 */
class ThemeSwitch extends Component {
  /**
   * class component's default constructor
   */
  constructor(props) {
    /**
     * super is used to call the parent class props
     */
    super(props);
    /**
     * initializing the state
     */
    this.state = {
      active: false
    };
  }
  /**
   * isActive function is used to update the state data active
   */
  isActive = () => this.state.active;

  /**
   * toggle function is used to change the active state data into true or false
   */
  toggle = () => {
    this.setState({
      active: !this.isActive()
    });
  };

  /**
   * default render method of class
   */
  render() {
    this.css = `html { filter: invert(100%); background: #fefefe; } * { background-color: inherit } img:not([src*=".svg"]), video { filter: invert(100%) }`;

    this.store = typeof localStorage === "undefined" ? null : localStorage;
    return (
      <div>
        <button aria-pressed={this.isActive()} onClick={this.toggle}>
          dark theme:
          <span aria-hidden="true">{this.isActive() ? "on" : "off"}</span>
        </button>
        <style media={this.isActive() ? "screen" : "none"}>{this.css}</style>
        <Paragraph />
      </div>
    );
  }
}

/**
 * exporting the ThemeSwitch class component to use anywhere
 */
export default ThemeSwitch;
export { ThemeSwitch };
