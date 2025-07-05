import UserAvatarImg from "./UserAvatarImg";
import Logout from "../../../assets/icons/logout_icon.svg?react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoggedMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <ul className="flex items-center gap-5">
      <li className="flex items-center gap-2">
        {user.avatar_url ? (
          <img
            src={user?.avatar_url}
            alt="Imagem do usuário"
            className="rounded-full w-6 h-6"
          />
        ) : (
          <UserAvatarImg user={user} />
        )}

        <p className="text-primary">{user?.name}</p>
      </li>
      <li>
        <button
          className="flex items-center gap-2 font-display text-primary cursor-pointer"
          onClick={handleLogout}
        >
          Logout
          <Logout className="fill-primary" />
        </button>
      </li>
    </ul>
  );
};

export default LoggedMenu;
