export function getFriends(): string[] {
  return getFriendsFromLocalStorage();
}

export function createFriend(name: string) {
  const friends = getFriendsFromLocalStorage();
  friends.push(name);
  saveFriendsInLocalStorage(friends);
}

function getFriendsFromLocalStorage(): string[] {
  const friendsJson = localStorage.getItem("friends");
  if (friendsJson === null) {
    return [];
  }
  return JSON.parse(friendsJson);
}

function saveFriendsInLocalStorage(friends: string[]): void {
  localStorage.setItem("friends", JSON.stringify(friends));
}
