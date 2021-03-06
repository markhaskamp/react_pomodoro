
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
      return  <div className="row">
                <div className="col-sm-1">{pomo.timestamp.getHours()}:{seconds_display(pomo.timestamp.getMinutes())}</div>
                <div className="col-sm-5">{pomo.description}</div>
                <div className="col-sm-4">{pomo.minutes}:{seconds_display(pomo.seconds)}</div>
              </div>
    };
    return (
      <div>
        <p/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12"><h4>Completed Pomodoros</h4></div>
          </div>
        </div>
        <div className="container">
          {Store.pomodoroList.completedPomos.map(createItem)}
        </div>
      </div>
      );
  }
});

React.render(<PomodoroList />, document.getElementById('pomodoroList'));


