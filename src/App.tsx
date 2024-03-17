import AddUserButton from "./components/ui/userAddButton";
import DisplayUsers from "./components/layout/displayUsers";

import styles from "./app.module.scss";
const App = () => {
  return (
    <div className={styles.app}>
      <AddUserButton />
      <DisplayUsers />
    </div>
  );
};

export default App;
