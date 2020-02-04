import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.putUserStatus(status);
  };
  const statusOnChange = e => {
    setStatus(e.currentTarget.value);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({ status: this.props.status });
  //   }
  // }

  return (
    <>
      Status:
      {editMode ? (
        <div>
          <input onChange={statusOnChange} value={status} onBlur={deactivateEditMode} autoFocus={true} />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
