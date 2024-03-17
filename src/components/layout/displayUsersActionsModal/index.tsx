import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Form, Input, Modal, Select } from "antd";
import { addUser, editUser } from "../../../redux/TableSlice/TableSlice";

import { selectOptions } from "../../../data/data";

type TDisplayUsersActionsModal = {
  user?: TTableData;
  open: boolean;
  onClose(): void;
};

const DisplayUsersActionsModal = ({
  user,
  open,
  onClose,
  ...props
}: TDisplayUsersActionsModal) => {
  /* Created DisplayUsersActionsModal for editing selected data values and using functionality */
  
  const dispatch = useDispatch();

  const isEditing = !!user;
  const title = isEditing ? "Edit" : "Add user";

  const [form] = Form.useForm();

  const onOk = async () => form.submit();

  function onFinish(values: Omit<TTableData, "key">) {
    onClose();
    if (isEditing) {
      return dispatch(editUser({ ...user, ...values }));
    }
    dispatch(
      addUser({
        key: nanoid(),
        ...values,
      })
    );
  }

  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      onOk={onOk}
      destroyOnClose
      {...props}
    >
      <Form
        preserve={false}
        onFinish={onFinish}
        form={form}
        initialValues={isEditing ? user : {}}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Name field is required",
            },
          ]}
        >
          <Input placeholder="Please write your name" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Surname field is required",
            },
          ]}
        >
          <Input placeholder="Please write your surname" />
        </Form.Item>
        <Form.Item
          name="patronymic"
          rules={[
            {
              required: true,
              message: "Patronymic field is required",
            },
          ]}
        >
          <Input placeholder="Please write your patronymic" />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "Gender field is required",
            },
          ]}
        >
          <Select
            placeholder="Please select your gender"
            options={selectOptions}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DisplayUsersActionsModal;
function nanoId(): string {
  throw new Error("Function not implemented.");
}
