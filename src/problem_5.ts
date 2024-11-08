
function getProperty<T, K extends keyof T>(data: T, value: K): T[K] {
    return data[value];
}

const person = { name: "Jhanker Vai", age: 80 };
