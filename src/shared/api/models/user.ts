export interface UserFlags {
  completedOnboarding?: boolean;
}

export default interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  flags: UserFlags;
}
