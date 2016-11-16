function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}



var app = new Vue({
  el: '#app',
  data: {
    services: [
      { id: '1', title: 'Facebook Messenger', src: 'https://www.messenger.com/', icon: 'icon-messenger.png'},
      { id: '2', title: 'Whatsapp', src: 'https://web.whatsapp.com/', icon: 'icon-whatsapp.png'},
      { id: '3', title: 'Telegram', src: 'https://web.telegram.org', icon: 'icon-telegram.png'}
    ],
    myservices: [
      { uid: '1', customtitle: 'Facebook', title: 'Facebook Messenger', src: 'https://www.messenger.com/', icon: 'icon-messenger.png'},
    ]
  },
  methods: {
    addService: function (service) {
      service.uid = guidGenerator();
      service.customtitle = '';
      this.myservices.push(service);
      console.log(this.myservices);
    }
  }
});
