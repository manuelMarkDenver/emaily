const Header = (props) => {
  const { user, isLoading } = props;
  console.log("🚀 ~ file: Header.js ~ line 3 ~ Header ~ user", user);
  console.log(typeof user);

  const renderContent = () => {
    if (isLoading) return "logging in";

    if (!isLoading) {
      if (!user) return "logged out";
    }
    
    return 'logged in';
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="" className="left brand-logo">
          Emaily
        </a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
