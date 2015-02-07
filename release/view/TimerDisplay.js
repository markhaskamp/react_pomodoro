
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

  descriptionChanged: function(evt) {
    ea.publish('DESCRIPTION_CHANGED', {});
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {

    return (
      React.createElement("div", null, 
        React.createElement("div", null, "Doing what? ", React.createElement("input", {type: "text", id: "txtDescription", size: "75"})), 
        React.createElement("div", null, 
          React.createElement("input", {type: "button", 
                 id: "btnStart", 
                 value: this.state.startButtonLabel, 
                 onClick: this.startButtonClicked})
        ), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "timer col-md-offset-1 col-md-1"}, this.state.minutes, ":", this.state.displaySeconds), 
            React.createElement("div", {className: this.state.className}, this.state.description)
          )
        )
      )
    );
  }

});

React.render(React.createElement(TimerDisplay, null), document.getElementById('content'));


