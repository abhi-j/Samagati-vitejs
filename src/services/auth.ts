import axios from "axios";
import { API_LINK } from "../config";

const strapiUrl = API_LINK;

type signInType = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: signInType) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

type signUpType = {
  username: string;
  email: string;
  password: string;
  contact: string;
  confirmPassword: string;
};

export async function signUp({
  username,
  email,
  password,
  contact,
  confirmPassword,
}: signUpType) {
  const res = await axios.post(`${API_LINK}/api/auth/local/register`, {
    email,
    password,
    username,
    contact,
  });

  return res.data;
}

export async function getUserData(api_token: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${api_token}`,
    },
  };

  const res = await axios.get(`${API_LINK}/api/users/me?populate=*`, config);
  return res.data;
}
