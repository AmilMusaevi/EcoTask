import { useState } from "react";
import { Button } from "antd";

import DisplayUsersActionsModal from "../../layout/displayUsersActionsModal";

const AddUserButton = () => {
  /* Created AddUserButton component for adding new user */

  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalActive(true)}>
        <span>Add user</span>
      </Button>
      <DisplayUsersActionsModal
        open={isModalActive}
        onClose={() => setIsModalActive(false)}
      />
    </>
  );
};

export default AddUserButton;
