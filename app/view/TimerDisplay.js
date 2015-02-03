
var TimerDisplay = React.createClass({
  getInitialState: function() {
    return timer_model;
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  startButtonClicked: function() {
    ea.publish('START_CLICKED', {}); 
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {
    buttonStyle = {'float': 'left', 'width': 75};
    return (
      <div>
        <div>Doing what? <input type="text" id="txtDescription" /></div>
        <div style={buttonStyle}><input type="button" 
              id="btnStart" 
              value="Start"
              onClick={this.startButtonClicked} />
        </div>
        <div>{this.state.minutes}:{this.state.displaySeconds}</div>
        <div>{this.state.description}</div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

