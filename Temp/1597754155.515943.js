var BirthDay=new Date(new Date("2019/08/19")),today=new Date,timeold=today.getTime()-BirthDay.getTime(),daysold=Math.floor(timeold/864e5);document.getElementById("webinfo-runtime-count").innerHTML=daysold+" 天";