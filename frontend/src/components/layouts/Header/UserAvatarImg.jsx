const UserAvatarImg = ({ user }) => {
  const userInitial = user.name[0].toUpperCase();
  return (
    <div className=" bg-primary text-light-blue rounded-full w-6 h-6 flex items-center justify-center text-sm font-display font-semibold">
      {userInitial}
    </div>
  );
};

export default UserAvatarImg;
