
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

  descriptionChanged: function(evt) {
    ea.publish('DESCRIPTION_CHANGED', {});
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="timer col-md-1">{this.state.minutes}:{this.state.displaySeconds}</div>
            <div className={this.state.className}><input type="text" className="form-control" placeholder="wut"/></div>
            <div className="col-md-1">
              <input type="button" id="btnStart" value={this.state.startButtonLabel} onClick={this.startButtonClicked} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));



