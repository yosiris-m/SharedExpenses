const friends: string[] = [];

export function getFriends(): string[] {
  return friends;
}

export function createFriend(name: string) {
  friends.push(name);
}
