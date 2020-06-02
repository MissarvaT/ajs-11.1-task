/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.members = [];
  }

  add(person) {
    this.members.push(person);
  }

  [Symbol.iterator]() {
    let current = this.members[0];
    const last = this.members.length;
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
