const biodata = {
    name: 'Farhin',
    course : 'Acciojob',
    place: 'Arambagh',
    DOB : '12/06/1994',

    hobby:{
        frst: 'coding',
        sec : 'painting',
    }
};

let {name, DOB, place, course, hobby}= biodata;
console.log(`Name: ${name},
Course: ${course},
Place:${place},
DOB: ${DOB},
Hobbies :${hobby.frst} ${hobby.sec}`)
