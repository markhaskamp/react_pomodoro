
var Timer = React.createClass({
  getInitialState: function() {
    return {elapsedSeconds: 0};
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
    this.setState({elapsedSeconds: Store.elapsedSeconds});;
  },

  render: function() {
    return (
      <div>Elapsed Seconds: {this.state.elapsedSeconds}</div>
    );
  }

});

React.render(<Timer />, document.getElementById('content'));

