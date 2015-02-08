
var TimerDisplay = React.createClass({displayName: "TimerDisplay",
  getInitialState: function() {
    return timer_model;
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  startButtonClicked: function() {
    ea.publish('START_CLICKED', {}); 
  },

  pomodoroLabelClicked: function() {
    ea.publish('SET_TYPE', {type: 'pomodoro'});
  },

  breakLabelClicked: function() {
    ea.publish('SET_TYPE', {type: 'break'});
  },

  longBreakLabelClicked: function() {
    ea.publish('SET_TYPE', {type: 'longBreak'});
  },

  descriptionChanged: function(evt) {
    ea.publish('DESCRIPTION_CHANGED', {});
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {

    return (
      React.createElement("div", null, 
        React.createElement("p", null), 
        React.createElement("div", {className: "container"}, 

          React.createElement("div", {className: "row"}, 
            React.createElement("div", {id: "pomodoroLabel", className: "col-md-1 typeLabel selected", onClick: this.pomodoroLabelClicked}, "pomodoro"), 
            React.createElement("div", {id: "breakLabel", className: "col-md-1 typeLabel", onClick: this.breakLabelClicked}, "break"), 
            React.createElement("div", {id: "longBreakLabel", className: "col-md-2 typeLabel", onClick: this.longBreakLabelClicked}, "long break")
          ), 

          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-10"}, 
              React.createElement("div", {className: "input-group"}, 
                React.createElement("span", {className: "input-group-addon"}, 
                  React.createElement("span", {className: "timer col-md-1"}, this.state.minutes, ":", seconds_display(this.state.seconds))
                ), 
                React.createElement("input", {type: "text", 
                       className: this.state.className, 
                       id: "txtDescription", 
                       placeholder: "doing what..."}), 
                React.createElement("span", {className: "input-group-btn"}, 
                  React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.startButtonClicked}, 
                    this.state.startButtonLabel
                  )
                )
              )
            )
          )
        )

      )
    );
  }

});

React.render(React.createElement(TimerDisplay, null), document.getElementById('content'));

