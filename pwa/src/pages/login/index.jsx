import { Redirect } from "react-router-dom";
import { useUser } from "../../providers/user";

const Login = () => {
  const { isLogged } = useUser();

  if (isLogged) return <Redirect to={"/"} />;

  return (
    <>
      <div className="text-black">Login page</div>
      <form action="" onSubmit={null}>
        <input type="text" name="username" placeholder="Entrez votre email" />
        <input
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
        />
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
};

export default Login;
