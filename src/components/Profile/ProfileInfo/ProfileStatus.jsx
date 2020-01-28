import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false, status: this.props.status };
    this.activateEditMode = this.activateEditMode.bind(this);
    this.deactivateEditMode = this.deactivateEditMode.bind(this);
    this.statusOnChange = this.statusOnChange.bind(this);
  }

  activateEditMode() {
    this.setState({ editMode: true });
  }
  deactivateEditMode() {
    this.setState({ editMode: false });
    this.props.putUserStatus(this.state.status);
  }
  statusOnChange(e) {
    this.setState({ status: e.currentTarget.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <>
        Status:
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.statusOnChange}
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
