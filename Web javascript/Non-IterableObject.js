//Non-Iterable Object are such objects which doesn't have index positions

var dog={
    name:"Khondoba",
    age:20,
    breed:"Bulldog"
}
console.log(dog)

//for-in loop

for(var x in dog)
{
    console.log(x+" : "+dog[x] )
}