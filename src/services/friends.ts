const friends: string[] = ["Pablo", "Luis", "Pedro", "Lucas"];

export function getFriends(): string[] {
  return friends;
}

export function createFriend(name: string) {
  friends.push(name);
}
