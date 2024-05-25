type Identify = {
    id: string | number;
    username: string;
}

type DataStorage<T> = {
    storage: Array<T>;
    add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: ["x"],
    add: function(data: string) {
        this.storage.push(data);
    }
}


const userStorage : DataStorage<Identify> = {
    storage: [{id : 1, username:"Berkan"}],
    add: function(data: Identify) {
        this.storage.push(data);
    }
}

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}

const mergedObj = merge<{name: string}, {age: number}>({name: "Max"}, {age: 28});