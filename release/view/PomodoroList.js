
var PomodoroList = React.createClass({displayName: "PomodoroList",
  getInitialState: function() {
    return pomodoroList;
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  onChange: function(e) {
    this.setState(pomodoroListModel);
  },


  render: function() {
    var createItem = function(pomo) {
      return React.createElement("li", null, pomo.timestamp.getHours(), ":", pomo.timestamp.getMinutes(), " - ", pomo.description, ", ", pomo.minutes, ":", pomo.seconds);
    };
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-md-4"}, "eddie would go"), 
        React.createElement("div", {className: "col-md-3"}, "we excel on ice"), 
        React.createElement("div", {className: "col-md-4"}, "always read the plaque")
        )
        ), 
      React.createElement("h4", null, "Completed Pomodoros"), 
      React.createElement("ul", null, Store.pomodoroList.completedPomos.map(createItem))
      )
      );
  }
});

React.render(React.createElement(PomodoroList, null), document.getElementById('pomodoroList'));


