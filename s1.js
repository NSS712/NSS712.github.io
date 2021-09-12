var rand=function(min,max){
    var a=Math.floor(Math.random()*(max-min+1)+min);
    return a;
}
var count=0;

var num=function(){
    count+=1;
    if(count<=10){
        var a=rand(0,li.length-1);
        var b=li[a];
        document.getElementById("a11").innerHTML=b.canteen;
        document.getElementById("a12").innerHTML=b.floor;
        document.getElementById("a13").innerHTML=b.cate;
    }
    else{
        document.getElementById("a11").innerHTML="事真多";
        document.getElementById("a12").innerHTML="爱吃不吃";
        document.getElementById("a13").innerHTML="饿死你";
    }

}

var canteen=["学三","学四"];
var li=[
    {"canteen":"学一","floor":"一楼","cate":"米饭+菜"},
    {"canteen":"学一","floor":"二楼","cate":"麻辣香锅"},
    {"canteen":"学一","floor":"二楼","cate":"小份菜"},
    {"canteen":"学一","floor":"二楼","cate":"脆皮鸡饭"},
    {"canteen":"学一","floor":"二楼","cate":"麻辣烫"},
    {"canteen":"学三","floor":"一楼","cate":"米饭+菜"},
    {"canteen":"学三","floor":"二楼","cate":"炸鸡"},
    {"canteen":"学三","floor":"二楼","cate":"小盘鸡面"},
    {"canteen":"学三","floor":"二楼","cate":"烤盘饭"},
    {"canteen":"学三","floor":"二楼","cate":"麻辣香锅"},
    {"canteen":"学三","floor":"二楼","cate":"石锅拌饭"},
    {"canteen":"学四","floor":"一楼","cate":"米饭+菜"},
    {"canteen":"学四","floor":"一楼","cate":"烤盘饭"},
    {"canteen":"学四","floor":"一楼","cate":"炒面"},
    {"canteen":"学四","floor":"二楼","cate":"重庆小面"},
    {"canteen":"学四","floor":"二楼","cate":"麻辣香锅"},
    {"canteen":"学四","floor":"二楼","cate":"黄焖鸡"},
    {"canteen":"学四","floor":"二楼","cate":"麻辣拌"},
    {"canteen":"学四","floor":"二楼","cate":"盖浇饭"},
    {"canteen":"学五","floor":"一楼","cate":"米饭+菜"},
    {"canteen":"学五","floor":"一楼","cate":"牛肉饭"},
    {"canteen":"学五","floor":"一楼","cate":"刀削面"}
];