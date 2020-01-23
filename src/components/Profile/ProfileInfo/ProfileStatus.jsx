import React from "react";

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false, status: "here" };
    this.activateEditMode = this.activateEditMode.bind(this);
    this.deactivateEditMode = this.deactivateEditMode.bind(this);
  }

  activateEditMode() {
    this.setState({ editMode: true });
  }
  deactivateEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.state.status}
            </span>
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
