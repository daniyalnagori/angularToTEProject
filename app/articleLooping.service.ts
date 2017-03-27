
export class Products {

    private names = ["Daniyal", "Fasih", "Shahroz", "Afzal", "Hammad", "Mobeen"]

    course = []
    courseKeys = [];

    //     {url:"https://www.google.com",name: "Usuf",tel:"100%",number:"0343-2556551",price:"Defence",description:"web developer",date: "2016-01-01",color:"#999999"},
    // {url:"https://www.google.com",name: "Fasih",tel:"50%",number:"0343-2556551",price:"Gulshan",description:"web developer",date: "2016-01-01",color:"#999999"},
    // {url:"https://www.google.com",name: "Daniyal",tel:"1%",number:"0343-2556551",price:"Clifton",description:"web developer",date: "2016-01-01",color:"#999999"},
    // {url:"https://www.google.com",name: "Ali",tel:"0%",number:"0343-2556551",price:"Korangi",description:"web developer",date: "2016-01-01",color:"#999999"}


    groups() {
        this.course = [];
        this.courseKeys = [];
        var lists = firebase.database().ref('course')
        lists.off('child_added');
        lists.off('child_removed');
        //lists.off('child_removed');
        lists.on('child_added', snap => {
            this.course.push(snap.val());
            this.courseKeys.push(snap.key);
        })
        lists.on('child_removed', snap => {
            let index = this.courseKeys.indexOf(snap.key);
            this.course.splice(index, 1)
            this.courseKeys.splice(index, 1);
        })
        return this.course;
    }


    insertData(url, name, tel, number, price, description, date, color) {
        //this.course.push({url,name,tel,number,price,description,date,color});
        firebase.database().ref('course').push({
            name: name,
            tel: tel,
            price: price
        })
        // firebase.database().ref('course').push({
        //     name:name,
        //     tel: tel,
        //     price:price
        // })
    }
    listOfNames() {
        return this.names;

    }
    deleteItems(index) {
        let key = this.courseKeys[index]
        firebase.database().ref('course').child(key).set(null);
    }
}