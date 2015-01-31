
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    // this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    ea.publish('TICK', {});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
    ea.subscribe('CHANGE', 'handleChange', this.handleChange);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  handleChange: function() {
    // console.log('wut');
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }


});

React.render(<Timer />, document.getElementById('content'));

