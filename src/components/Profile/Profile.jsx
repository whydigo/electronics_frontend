import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../../styles/Profile.module.css";
import { fetchUser } from "../../features/applicationSlice";

const Profile = () => {
  const id = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.application.users);
  const filt = users.filter((i) => i._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className={s.profile}>
      <div className={s.container}>
        Ваше имя пользователя:
        {filt.map((i) => {
          return <div key={i._id} className={s.name}>{i.login}</div>;
        })}
        <button onClick={() => localStorage.clear()} className={s.exit}>Выйти из аккаунта</button>
      </div>
    </div>
  );
};

export default Profile;
