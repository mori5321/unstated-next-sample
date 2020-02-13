import { useState } from 'react';
import { createContainer } from 'unstated-next';

type User = {
  name: string
}

const initialUser: User = { name: "" };

const useUser = () => {
  const [user, setUser] = useState<User>(initialUser);

  const setUserAsync = (user: User) => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          setUser(user)
          resolve()
        },
        2000);
    });
  }

  return { user, setUser, setUserAsync }
};

const UserContainer = createContainer(useUser);

export { UserContainer }