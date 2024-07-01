import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { userLogged } from "../services/user";
import { signin } from "../services/user";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Inicie com null para indicar estado inicial desconhecido ou vazio

  async function getUserLogged() {
    try {
      const userResponse = await userLogged();
      setUser(userResponse.data);
    } catch (error) {
      console.error("Erro ao obter usuário logado:", error);
      setUser(null); // Defina como null em caso de erro
    }
  }

  useEffect(() => {
    getUserLogged();
  }, []);

  const login = async (formData) => {
    try {
      const token = await signin(formData);
      Cookies.set("token", token.data, { expires: 1 });
      getUserLogged();
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null); // Limpa o estado do usuário ao fazer logout
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
