
function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
  }
  
  const Person = { 
    name: "Yasin", 
    age: 50, 
    email: "yasinmunn@gmail.com",
    address: "Sunar Bangladesh",
};
  