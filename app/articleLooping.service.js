"use strict";
var Products = (function () {
    function Products() {
        this.names = ["Daniyal", "Fasih", "Shahroz", "Afzal", "Hammad", "Mobeen"];
        this.course = [];
        this.courseKeys = [];
    }
    //     {url:"https://www.google.com",name: "Usuf",tel:"100%",number:"0343-2556551",price:"Defence",description:"web developer",date: "2016-01-01",color:"#999999"},
    // {url:"https://www.google.com",name: "Fasih",tel:"50%",number:"0343-2556551",price:"Gulshan",description:"web developer",date: "2016-01-01",color:"#999999"},
    // {url:"https://www.google.com",name: "Daniyal",tel:"1%",number:"0343-2556551",price:"Clifton",description:"web developer",date: "2016-01-01",color:"#999999"},
    // {url:"https://www.google.com",name: "Ali",tel:"0%",number:"0343-2556551",price:"Korangi",description:"web developer",date: "2016-01-01",color:"#999999"}
    Products.prototype.groups = function () {
        var _this = this;
        this.course = [];
        this.courseKeys = [];
        var lists = firebase.database().ref('course');
        lists.off('child_added');
        lists.off('child_removed');
        //lists.off('child_removed');
        lists.on('child_added', function (snap) {
            _this.course.push(snap.val());
            _this.courseKeys.push(snap.key);
        });
        lists.on('child_removed', function (snap) {
            var index = _this.courseKeys.indexOf(snap.key);
            _this.course.splice(index, 1);
            _this.courseKeys.splice(index, 1);
        });
        return this.course;
    };
    Products.prototype.insertData = function (url, name, tel, number, price, description, date, color) {
        //this.course.push({url,name,tel,number,price,description,date,color});
        firebase.database().ref('course').push({
            name: name,
            tel: tel,
            price: price
        });
        // firebase.database().ref('course').push({
        //     name:name,
        //     tel: tel,
        //     price:price
        // })
    };
    Products.prototype.listOfNames = function () {
        return this.names;
    };
    Products.prototype.deleteItems = function (index) {
        var key = this.courseKeys[index];
        firebase.database().ref('course').child(key).set(null);
    };
    return Products;
}());
exports.Products = Products;
//# sourceMappingURL=articleLooping.service.js.map