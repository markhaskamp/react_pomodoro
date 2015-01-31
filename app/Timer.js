
var Timer = React.createClass({
  getInitialState: function() {
    return {elapsedSeconds: 0,
            timerRunning:   true,
            toggleLabel:    'Stop'};
  },

  componentDidMount: function() {
    this.interval = setInterval(this.handleTick, 1000);
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  handleTick: function() {
    ea.publish('TICK', {});
  },

  handleToggle: function() {
    ea.publish('TIMER_TOGGLE', {}); 
  },

  onChange: function() {
    this.setState({elapsedSeconds: Store.timer.elapsedSeconds,
                   toggleLabel:    Store.timer.toggleLabel});;
  },

  render: function() {
    return (
      <div>
        <p>Elapsed Seconds: {this.state.elapsedSeconds}</p>
        <p><input type="button" id="btnTimerToggle" value={this.state.toggleLabel} onClick={this.handleToggle} /></p>
      </div>
    );
  }

});

React.render(<Timer />, document.getElementById('content'));

