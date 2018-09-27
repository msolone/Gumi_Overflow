import React, { Component } from "react";

class AskQuestion extends Component {
  render() {
    return (
      <section className="ask_question_page">
        <form className="ask_question_form">
          <div className="ask_question_call_to_action">Ask a Question</div>
          <section className="ask_question_title_section"> 
            <div className="ask_question_title">Title</div>
            <input
                className="ask_question_title_input"
              type="text"
              placeholder="What's your programming question? Be Specific."
            />
          </section>
          <section className="ask_question_body_section">
            <div className="ask_question_body">Body</div>
            <input className="ask_question_body_input" type="text" placeholder="" />
          </section>
          <button className="ask_question_form_submit">Post Your Question</button>
        </form>
        <section className="how_to_format_section">
            <div className="format_title">How to Format</div>
            <ul>
                <li>put returns between paragraphs</li>
                <li>or linebreak add 2 spaces at end</li>
                <li><span className="italic">_italic_</span> or <span className="bold">**bold**</span></li>
                <li>indent code by 4 spaces</li>
                <li>backtick escapes `like _so_`</li>
                <li> quote by placing > at start of line</li>
                <li>to make links</li>
                <li>basic HTML also allowed</li>
            </ul>

        </section>
      </section>
    );
  }
}

export default AskQuestion;
