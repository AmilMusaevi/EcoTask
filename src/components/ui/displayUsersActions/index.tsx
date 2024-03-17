import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdTrash } from "react-icons/io";
import { Button, Modal, Popover } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { removeUser } from "../../../redux/TableSlice/TableSlice";

import DisplayUsersActionsModal from "../../layout/displayUsersActionsModal";

import styles from "./index.module.scss";

type TDisplayUsersActions = {
  user: TTableData;
};

const DisplayUsersActions = ({ user }: TDisplayUsersActions) => {
  /* Created DisplayUsersActions component for using actions edit and remove */

  const [modalIsActive, setModalIsActive] = useState(false);

  const dispatch = useDispatch();

  const content = (
    <div className={styles.actions_icon}>
      <div
        className={styles.actions_icon_item}
        onClick={() => setModalIsActive(true)}
      >
        <AiOutlineEdit />
      </div>
      <div
        className={styles.actions_icon_item}
        onClick={() =>
          Modal.confirm({
            title: "Are you sure delete this user",
            okText: "Yes",
            onOk() {
              dispatch(removeUser(user.key));
            },
          })
        }
      >
        <IoMdTrash />
      </div>
    </div>
  );
  return (
    <div>
      <Popover placement="bottom" content={content}>
        <Button className={styles.actions_icon_button}>
          <BsThreeDotsVertical />
        </Button>
      </Popover>
      <DisplayUsersActionsModal
        open={modalIsActive}
        onClose={() => setModalIsActive(false)}
        user={user}
      />
    </div>
  );
};

export default DisplayUsersActions;
