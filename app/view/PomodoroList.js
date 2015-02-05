
var PomodoroList = React.createClass({
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
      return <li>{pomo.timestamp.getHours()}:{pomo.timestamp.getMinutes()} - {pomo.description}, {pomo.minutes}:{pomo.seconds}</li>;
    };
    return (
      <div>
      <h4>Completed Pomodoros</h4>
      <ul>{Store.pomodoroList.completedPomos.map(createItem)}</ul>
      </div>
      );
  }
});

React.render(<PomodoroList />, document.getElementById('pomodoroList'));


