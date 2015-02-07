
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
            <div className="col-md-offset-1 col-md-5">
              <div className="input-group">
                <span className="input-group-addon">
                  <span>{this.state.minutes}:{this.state.displaySeconds}</span>
                </span>
                <input type="text" className="form-control" placeholder="doing what..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.startButtonClicked}>{this.state.startButtonLabel}</button>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

