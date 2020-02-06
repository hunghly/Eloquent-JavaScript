{
    "use strict";

    class Vec {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        plus(vector) {
            return new Vec(this.x + vector.x, this.y + vector.y);
        }

        minus(vector) {
            return new Vec(this.x - vector.x, this.y - vector.y);
        }

        get length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }

    /*    console.log(new Vec(1, 2).plus(new Vec(2, 3)));
    // → Vec{x: 3, y: 5}
        console.log(new Vec(1, 2).minus(new Vec(2, 3)));
    // → Vec{x: -1, y: -1}
        console.log(new Vec(3, 4).length);
    // → 5*/

    class Group {
        constructor() {
            this.set = [];
        }

        add(value) {
            if (this.set.indexOf(value) === -1) {
                this.set.push(value);
            }
        }

        delete(value) {
            if (this.set.indexOf(value) !== -1) {
                let sliceIndex = this.set.indexOf(value);
                this.set.splice(sliceIndex, 1);
            }
        }

        static from(iterableObj) {
            let group = new Group();
            for (let elem of iterableObj) {
                group.add(elem);
            }
            return group;
        }

        [Symbol.iterator] = function () {
            return new GroupIterator(this);
        }
    }

    class GroupIterator {
        constructor(group) {
            this.currentIndex = 0;
            this.group = group;
        }

        next() {
            if (this.currentIndex === this.group.set.length) {
                return {done: true};
            }
            let value = {
                currentIndex: this.currentIndex,
                value: this.group.set[this.currentIndex],
            };
            this.currentIndex++;
            return {value, done: false};
        }
    }

    // let group = new Group();
    let group = Group.from([10, 20, 30, 40, 50, 60]);
    // console.log(group.has(10));
// → true
//     console.log(group.has(30));
// → false
//     group.add(10);
//     group.add(20);
//     group.add(30);
//     group.add(40);
//     console.log(group);
//     group.delete(20);
//     console.log(group);
//     // console.log(group.has(10));
//     for (let value of group) {
//         console.log(value);
//     }
// → a
// → b
// → c
// → false

    /*    let obj = {
            hasOwnProperty: true
        };
        console.log(obj.hasOwnProperty("hasOwnProperty"));*/
    let map = {
        one: true,
        two: true,
        hasOwnProperty: true,
    };

// Fix this call

    console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
}