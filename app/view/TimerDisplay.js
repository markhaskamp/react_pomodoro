
var TimerDisplay = React.createClass({
  getInitialState: function() {
    return {
      minutes:      timer_model.minutes,
      seconds:      timer_model.seconds,
      timerRunning: timer_model.timerRunning,
      toggleLabel:  timer_model.toggleLabel
    };
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  handleToggle: function() {
    ea.publish('TIMER_TOGGLE', {}); 
  },

  onChange: function() {
    this.setState({minutes:     Store.timer.minutes,
                   seconds:     Store.timer.seconds,
                   toggleLabel: Store.timer.toggleLabel});;
  },

  render: function() {
    return (
      <div>
        <p>Pomodoro: {this.state.minutes}:{this.state.seconds}</p>
        <p><input type="button" 
                  id="btnTimerToggle" 
                  value={this.state.toggleLabel} 
                  onClick={this.handleToggle} />
        </p>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

