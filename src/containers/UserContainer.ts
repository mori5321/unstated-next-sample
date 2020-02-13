import { useState } from 'react';
import { createContainer } from 'unstated-next';

type User = {
  name: string
}

const initialUser: User = { name: "" };

const useUser = () => {
  const [user, setUser] = useState<User>(initialUser);

  return { user, setUser }
};

const UserContainer = createContainer(useUser);

export { UserContainer }