function LinkedList() {
    this.head = null;
}

LinkedList.prototype.isEmpty = function () {
    return this.head === null;
};

LinkedList.prototype.size = function () {
    var current = this.head;
    var count = 0;

    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}

LinkedList.prototype.prepend = function (val) {
    var newNode = {
        data: val,
        next: this.head
    };
    this.head = newNode;
}
LinkedList.prototype.add = function (val) {
    var newNode = {
        data: val,
        next: null
    }
    if (this.isEmpty()) {
        this.head = newNode;
        return;
    }

    var current = this.head;
    while (current.next !== null) {
        current = current.next
    }
    current.next = newNode;
}
LinkedList.prototype.contains = function (val) {
    var current = this.head;
    while (current !== null) {
        if (current.data === val) {
            return true
        }
        current = current.next
    }
    return false;
}


LinkedList.prototype.remove = function (val) {
    if (!this.contains(val)) return
    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }
    var prev = null;
    var current = this.head;
    while (current.data !== val) {
        prev = current;
        current = current.next;
    }
    prev.next = current.next
}

LinkedList.prototype.print = function () {
    var output = [];
    var current = this.head;
    while (current !== null) {
        output.push(current.data);
        current = current.next;
    }
    return output;

}


var list = new LinkedList();
list.add(323)
list.add(3223423)
list.add("hello")
list.add("hello")
list.prepend("hello")


console.log(list);