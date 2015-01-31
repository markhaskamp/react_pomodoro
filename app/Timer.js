
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    ea.publish('TICK', {});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  onChange: function() {
    this.forceUpdate();
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {Store.elapsedSeconds}</div>
    );
  }

});

React.render(<Timer />, document.getElementById('content'));

