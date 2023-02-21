const solution = (k, roomNumbers) => {
  const used = new Map();
  return roomNumbers.map((number) => findRoom(number, used));
};

function findRoom(room, used) {
  if (used.get(room) == undefined) {
    used.set(room, room + 1);
    return room;
  }
  let next = findRoom(used.get(room), used);
  used.set(room, next + 1);
  return next;
}
