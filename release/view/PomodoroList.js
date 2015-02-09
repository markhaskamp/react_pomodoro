
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
      return  React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-sm-1"}, pomo.timestamp.getHours(), ":", seconds_display(pomo.timestamp.getMinutes())), 
                React.createElement("div", {className: "col-sm-5"}, pomo.description), 
                React.createElement("div", {className: "col-sm-4"}, pomo.minutes, ":", seconds_display(pomo.seconds))
              )
    };
    return (
      React.createElement("div", null, 
        React.createElement("p", null), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-sm-12"}, React.createElement("h4", null, "Completed Pomodoros"))
          )
        ), 
        React.createElement("div", {className: "container"}, 
          Store.pomodoroList.completedPomos.map(createItem)
        )
      )
      );
  }
});

React.render(React.createElement(PomodoroList, null), document.getElementById('pomodoroList'));


