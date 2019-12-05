call apply  


var person = {
    fullName: function(city,country){
        // return this.firstname+" "+this.lastname+" "+city+" "+country
        return city+" "+country
    }
}

var john = {
    firstname:'john',
    lastname:'eva'
}

person.fullName.call(john)
"john eva"
person.fullName.apply(john)
"john eva"

person.fullName.call(john,'London','England')

person.fullName.apply(john,['London','England'])

person.fullName.call(john,['London','England'],"abc")

person.fullName.apply(['London','England'])

person.fullName.apply()