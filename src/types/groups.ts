export interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: Array<User>;
}

export interface User {
  first_name: string;
  last_name: string;
}
