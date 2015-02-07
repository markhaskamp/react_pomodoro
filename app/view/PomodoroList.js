
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
        <div className="container">
        <div className="row">
        <div className="col-md-4">eddie would go</div>
        <div className="col-md-3">we excel on ice</div>
        <div className="col-md-4">always read the plaque</div>
        </div>
        </div>
      <h4>Completed Pomodoros</h4>
      <ul>{Store.pomodoroList.completedPomos.map(createItem)}</ul>
      </div>
      );
  }
});

React.render(<PomodoroList />, document.getElementById('pomodoroList'));


