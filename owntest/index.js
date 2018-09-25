var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el:"#app-2",
    data:{
        message:'页面加载于'+ new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el:"#app-3",
    data:{
        seen:true
    }
});

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text:"当官不为民做主"},
            {text:'不如回家卖红薯'},
            {text:"众人皆醉我独醒"},
        ]
    }
});

var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"你好 vue 我就是帅"
    },
    methods:{
        reverseMessage:function(){
            this.message =this.message.split(' ').reverse().join(' ')
        }
    }
});

var app6 = new Vue({
    el:"#app-6",
    data:{
        message:'Hello Vue!'
    }
});

Vue.component