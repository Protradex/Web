// 对象转url参数
/**
 * @param {Object} obj数据
 * @param {Object} 第一个字符
 * @param {Object} key
 * @param {Object} encode
 */
function urlEncode(param, firstSymbol, key, encode) {
	//if (param == null || Object.keys(param).length === 0) return "";
	if (param == null) return "";
	let paramStr = "";
	let t = typeof param;
	if (t == "string" || t == "number" || t == "boolean") {
		paramStr +=
			"&" +
			key +
			"=" +
			(encode == null || encode ? encodeURIComponent(param) : param);
	} else {
		for (let i in param) {
			let k =
				key == null ?
				i :
				key + (param instanceof Array ? "[" + i + "]" : "." + i);
			paramStr += urlEncode(param[i], "&", k, encode);
		}
	}

	firstSymbol = firstSymbol || "&";

	paramStr = firstSymbol + paramStr.substring(1, paramStr.length);
	return paramStr;
}

/**
 * null => ''
 * @param {*} data 要处理的数据
 */
function null2str(data) {
	for (let x in data) {
		if (data[x] === null) { // 如果是null 把直接内容转为 ''
			data[x] = '';
		} else {
			if (Array.isArray(data[x])) { // 是数组遍历数组 递归继续处理
				data[x] = data[x].map(z => {
					return null2str(z);
				});
			}
			if (typeof(data[x]) === 'object') { // 是json 递归继续处理
				data[x] = null2str(data[x])
			}
		}
	}
	return data;
}

/**
 * @description: 用于发送某个指定URL的PV统计请求  https://tongji.baidu.com/web/help/article?id=235&type=0
 * @param {pageUrl} 页面的URl
 * @example this.$util.baiduPageView();
 */
function baiduPageView(pageUrl) {
	// 加上storeId
	pageUrl = `${pageUrl}`
	_hmt.push(['_setAutoPageview', false]);
	_hmt.push(['_trackPageview', pageUrl]);
}

function MthodsAdd(arg1, arg2) {
	let r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	//动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return Number(((arg1 * m + arg2 * m) / m).toFixed(n));
}

function MthodsSub(arg1, arg2) {
	let r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	//last modify by deeka
	//动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

function MthodsMul(arg1, arg2) {
	// if (!arg1 || !arg2) {
	// 	return arg1;
	// }
	if (arg1 == 0 || arg2 == 0) {
		return 0;
	}
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		if (s1.split(".")[1]) {
			m += s1.split(".")[1].length;
		}
	} catch (e) {
		console.log(e);
	}
	try {
		if (s2.split(".")[1]) {
			m += s2.split(".")[1].length;
		}
	} catch (e) {
		console.log(e);
	}
	//最多保留8位小数
	return Number((Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(Math.min(6,
		m)));
}

function MthodsDiv(arg1, arg2, digit) {
	if (!arg1 || !arg2) {
		return 0;
	}
	if (arg2 == 0) {
		return 0
	}
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length
	} catch (e) {}
	try {
		t2 = arg2.toString().split(".")[1].length
	} catch (e) {}
	r1 = Number(arg1.toString().replace(".", ""))
	r2 = Number(arg2.toString().replace(".", ""))
	//获取小数点后的计算值
	var result = ((r1 / r2) * Math.pow(10, t2 - t1)).toString()
	var result2 = result.split(".")[1];
	result2 = result2.substring(0, digit > result2.length ? result2.length : digit);

	return Number(result.split(".")[0] + "." + result2);
}

// 计算出时间戳的具体数据：比如将85400转化为 n时n分n秒
function formateTimeStamp(timeStamp) {
	var day;
	var hour;
	var min;
	var seconds;

	// hour = parseInt(timeStamp / (60 * 60 * 1000)) // 计算整数小时数
	// var afterHour = timeStamp - hour * 60 * 60 // 取得算出小时数后剩余的秒数
	// min = parseInt(afterHour / 60) // 计算整数分
	// seconds = parseInt(timeStamp - hour * 60 * 60 - min * 60) // 取得算出分后剩余的秒数
	day = Math.floor(timeStamp / (1000 * 60 * 60) / 24);
	hour = Math.floor(timeStamp / (1000 * 60 * 60));
	min = Math.floor(timeStamp / (1000 * 60)) % 60;
	seconds = Math.floor(timeStamp / 1000) % 60;
	
	if (hour < 10) {
		hour = '0' + hour
	}

	if (min < 10) {
		min = '0' + min;
	}

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	const restTime = {
		day: day,
		hour: hour,
		min: min,
		seconds: seconds
	}
	return restTime
}


export default {
	urlEncode,
	null2str,
	baiduPageView,
	MthodsAdd,
	MthodsSub,
	MthodsMul,
	MthodsDiv,
	formateTimeStamp
};
