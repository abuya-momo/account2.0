//打印今天日期 判断今日信息是否存在
function todayMessage(){
	var today = new Date();
	today = "" + ( today.getMonth()+1 ) + "-" + today.getDate();
	$(".today").text("今天是"+today);
	var newestdate = $(".oneday:first").children("h3").html();
	if(today != newestdate){
		alert("暂无今日信息");
	}	
}

//自动计算一天总和 并返回月总和
function sum(){
	var monthSum = 0;//月总和
	var bigconsumeSum = 0;//大额花销总和
	
	$(".oneday").each(function(){//自动计算一个月的总和(绿框)
		var tempsum = 0;
		$(this).find("span").each(function(){
			var tempnumber = new Number( $(this).text() );
			tempsum += tempnumber;
		});

		$(this).find("span.sumForDay").text(tempsum.toFixed(1));
		monthSum += tempsum;
	});

	$("#BigConsume").find("p:not(:last) span").each(function(){//计算大额花销总和
		var tempnumber = new Number( $(this).text() );
		bigconsumeSum += tempnumber;
	});
	
	monthSum += bigconsumeSum;

	$("#onemonth span.sumForMonth").text(monthSum.toFixed(1));//显示月总和
	return monthSum;
}

//统计天数
function dateNumber(monthSum){
	var Day = $(".oneday");
	$("#onemonth h3 span").text("共计"+Day.length+"天");
	$(".avgForMonth").text((monthSum/Day.length).toFixed(1)+"/天");
	return Day.length;
}

//求某个class下的平均值
function average(source,aim,daylength){//数据来源，结果目标（均为字符串）,总天数
	var sum = 0;
	//daylength--;
	// $("." + source + ":not(:last)").each(function(){
	// 	sum += Number( $(this).html() );
	// });
	$("." + source).each(function(){
		sum += Number( $(this).html() );
	});
	$("." + aim).text( (sum/daylength).toFixed(1) );
}


$(document).ready(function(){
	todayMessage();
	var monthSum = sum();
	var daylength = dateNumber(monthSum);

	average("asagohan","avgForZC",daylength);//早餐平均花销
	average("hilogohan","avgForWC",daylength);//午餐平均花销
	average("bangohan","avgForWanC",daylength);//晚餐平均花销
});