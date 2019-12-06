function language(name,country){
    this.name = name;
    this.country = country;

}

var hindi = new language('Hindi','India')

//////////Es6/////////

class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long= long;
    }
}
class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country;
        this.pop = 1000
    }
}

var tamil = new language1('Tamil','India',10.1,3.353)
