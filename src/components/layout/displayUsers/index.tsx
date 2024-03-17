import { Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import DisplayUsersActions from "../../ui/displayUsersActions";

const DisplayUsers = () => {
  /* Created display users component for create table */

  const dataSource = useSelector((state: RootState) => state.TableSlice.data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Patronymic",
      dataIndex: "patronymic",
      key: "patronymic",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "",
      dataIndex: "",
      key: "actions",
      render: (user: TTableData) => {
        return <DisplayUsersActions user={user} />;
      },
    },
  ];

  return (
    <Table columns={columns} dataSource={dataSource} style={{ width: 800 }} />
  );
};

export default DisplayUsers;
