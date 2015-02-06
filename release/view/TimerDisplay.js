
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
    //buttonStyle = {'float':'left', 'width': 75};
    descrStyle = {'marginLeft':60, 'marginTop':15, 'padding':3, 'paddingLeft':10, 'width':300};

    return (
      React.createElement("div", null, 
        React.createElement("div", {style: {'float':'left', 'marginBottom':25}}, "Doing what? ", React.createElement("input", {type: "text", id: "txtDescription", size: "75"})), 
        React.createElement("div", null, 
          React.createElement("input", {type: "button", 
                 id: "btnStart", 
                 value: this.state.startButtonLabel, 
                 onClick: this.startButtonClicked})
        ), 
        React.createElement("div", {style: {'clear':'both'}}), 
        React.createElement("div", {className: "timer"}, this.state.minutes, ":", this.state.displaySeconds), 
        React.createElement("div", {className: this.state.className}, this.state.description)
      )
    );
  }

});

React.render(React.createElement(TimerDisplay, null), document.getElementById('content'));


