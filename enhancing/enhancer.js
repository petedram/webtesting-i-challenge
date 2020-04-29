module.exports = {
  succeed,
  fail,
  repair,
  get,
  add,
};


function succeed(item) {
  if (item.enhancement == 20 ) {
    return { ...item };
  } else {
    return {...item, enhancement: item.enhancement + 1}
  }
}

// should decrease durability by 5 if enhancement is less than 15
// should decrease durability by 10 if enhancement is 15 or more
// should decrease enhancement by 1 if enhancement is greater than 16
// durability should not go below 0

function fail(item) {

  if (item.enhancement < 15) {
    if (item.durability < 5 ) {
      return { ...item, durability: item.durability - item.durability };
    } else {
      return { ...item, durability: item.durability - 5 };
    }
  } else if (item.enhancement >14) {
      if (item.enhancement > 16) {
        if (item.durability < 10 ) {
          return { ...item, durability: item.durability - item.durability, enhancement: item.enhancement-1 };
        } else {
          return { ...item, durability: item.durability - 10, enhancement: item.enhancement-1 };
        }
      } else 
      if (item.durability < 10 ) {
        return { ...item, durability: item.durability - item.durability };
      } else {
        return { ...item, durability: item.durability - 10 };
      }
  }
}

function repair(item) {
  return {...item, durability: 100 };
}

function get(item) {
  return { ...item };
}




function add (args) {

  const values = Array.isArray(args) ? args : Array.from(arguments);

  return Array.from(values).reduce((sum, value) => { //arguments is an object that consists of arguments passed in, array type object. this is why not args.
    if (typeof (value) !='number') { throw new Error('invalid args') };
      return sum + value;  
  }, 0)
}