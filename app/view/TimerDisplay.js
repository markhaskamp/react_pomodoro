
var TimerDisplay = React.createClass({
  getInitialState: function() {
    return {
      minutes:        timer_model.minutes,
      seconds:        timer_model.seconds,
      displaySeconds: timer_model.displaySeconds,
      timerRunning:   timer_model.timerRunning,
      toggleLabel:    timer_model.toggleLabel
    };
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  pauseButtonClicked: function() {
    ea.publish('PAUSE_TOGGLE', {}); 
  },

  onChange: function() {
    this.setState({minutes:        Store.timer.minutes,
                   seconds:        Store.timer.seconds,
                   displaySeconds: Store.timer.displaySeconds,
                   toggleLabel:    Store.timer.toggleLabel});;
  },

  render: function() {
    return (
      <div>
        <span><input type="button" 
              id="btnTimerToggle" 
              value={this.state.toggleLabel} 
              onClick={this.pauseButtonClicked} />
        </span>
        <span>Pomodoro: {this.state.minutes}:{this.state.displaySeconds}</span>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

