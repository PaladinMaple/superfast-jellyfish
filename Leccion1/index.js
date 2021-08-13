const app = new Vue({
  el: '#app',

  data:{
    img: 'https://pbs.twimg.com/profile_images/623323276522188801/D1ehYWlt.jpg',
    name: 'Duck Test',
    //Note: Ducks live between 5 and 10 years
    duckAge: 10,
    duckMiddleAge: 7,
    ducksNames: ['Mariano', 'Jeremy', 'Juan', 'Carlos', 'Cesar'],
    ducksDetail: [
      { name: 'Mariano', age: 8 },
      { name: 'Jeremy', age: 7 },
      { name: 'Juan', age: 12 },
      { name: 'Carlos', age: 9 },
      { name: 'Cesar', age: 4 }
    ],
    showDucksData: false,
    color: 'f4f4f4',
    nameToLook: '',
  },

  methods: {
    changeState(){
      this.showDucksData = !this.showDucksData;
      this.color = this.color.split('').reverse().join('');
    }
  },

  computed:{
    reversedName: function(){
      return this.name.split('').reverse().join('');
    },

    match: function(){
      return this.ducksDetail.findIndex(i => i.name.toLowerCase() == this.nameToLook.toLowerCase()) !== -1 ? "Duck's name found " : "";
    }
  },
  
  watch:{
    showDucksData (newValue, oldValue){
      console.log(newValue, oldValue);
    }
  }
})