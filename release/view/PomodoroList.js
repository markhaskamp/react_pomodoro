
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
      React.createElement("h4", null, "Completed Pomodoros"), 
      React.createElement("ul", null, Store.pomodoroList.completedPomos.map(createItem))
      )
      );
  }
});

React.render(React.createElement(PomodoroList, null), document.getElementById('pomodoroList'));


