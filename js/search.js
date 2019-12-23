adressFn();
function adressFn() {
	var chinaRegion = adress["中国地区"];
	var chinaRegionStr = ''//用于存储结构
	var region = $(".adress-container>ul:nth-of-type(1)")[0];
	forEach(chinaRegion,function(el,index){
		chinaRegionStr += '<li><a href="javascript:;">'+el+'</a></li>';
	})
	region.innerHTML = chinaRegionStr; //插入结构
	var otherAreas = $(".other-Areas>span");
	otherAreas[0].innerHTML = adress["地区专享版"][0];
	otherAreas[1].innerHTML = '<a href="">'+adress["中国港澳"][0]+'</a>';
	var AvailableSites = $(".Available-Sites>span:nth-of-type(1)")[0];
	 AvailableSites.innerHTML = "Available Sites";
	var AvailableSitesUl = $(".Available-Sites>ul:nth-of-type(1)")[0];
	var otherAdress = ''//其他地区存储结构
	forEach(adress["Available Sites"],function(el){
		otherAdress += '<li><span class="iconfont">&#xe74e;</span><a href="">'+el+'</a></li>';
	})
	AvailableSitesUl.innerHTML = otherAdress;
	//显示地区
	var adressBtn = $(".header-adress>adress")[0];
	var adressNone = $(".adress-container")[0];
	adressBtn.onmouseenter = function () {
		adressNone.style.display = 'block';
	}
	adressBtn.onmouseleave = function () {
		adressNone.style.display = 'none';
	}
	var regionLis = $("li",region);
	var activeAdress = $(".active-adress")[0];
	var regionAs = $("a",region);
	regionAs[chinaRegion.indexOf("四川")].style.background = "#f10215";
	regionAs[chinaRegion.indexOf("四川")].style.color = "#fff";
	forEach(regionLis,function(el,index){
		el.onclick = function () {
			forEach(regionAs,function(el,index){
				el.style.background = "";
				el.style.color = "#999"
			});
			regionAs[index].style.background = "#f10215";
			regionAs[index].style.color = "#fff";
			activeAdress.innerHTML = this.innerText;
		}
	});
}
//nav部分
navFn();
function navFn(){
		var user = window.localStorage.getItem("user");
		var headerRight = $('.header-right')[0];
		if(user){
			var navS = '<li><a href="../html/login.html">'+user+'</a></li>';
		}else{
			var navS = '<li><a href="../html/login.html">'+"您好，请登录"+'</a></li>';
		}
		forEach(nav,function(el,index){
			if(el['content'] && el['href']){
				navS += 	'<li><a href="'+el['href']+'">'+el['title']+'<i class="iconfont">&#xe6eb;</i></a><span></span><div class="item-box"></div></li>';
			}else if(el['href']){
				navS += 	'<li><a href="'+el['href']+'">'+el['title']+'</a><span></span></li>';
			}else if(el['content']){
				navS += 	'<li>'+el['title']+'<i class="iconfont">&#xe6eb;</i><span></span><div class="item-box"></div></li>';
			}else{
				navS += 	'<li>'+el['title']+'<span></span></li>';
			}
		})
		headerRight.innerHTML = navS;
		if(user){
			var header_right = document.querySelectorAll(".header-right>li");
			header_right[1].innerHTML = `<a href="javascript:;">注销</a>`;
			header_right[0].innerHTML = `<a href="javascript:;">${user}</a>`;
			header_right[1].onclick = function(){
				window.localStorage.removeItem("shuliang");
				window.localStorage.removeItem("user");
				gwc();
				gwcspxx();
				navFn();
			}
		}
		//我的京东部分
		Myjd();
		function Myjd () {
			var divStr = '';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[3])[0];
			forEach(nav[2]["content"],function(el,index){
					divStr += '<div class="item"><a href="#">'+el+'</a></div>';
			})
			innerStr(headerRightListDiv,divStr);
			headerRightList[3].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[3].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		
		// 企业采购部分
		caigou();
		function caigou(){
			var divStr = '';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[5])[0];
			forEach(nav[4]["content"],function(el,index){
			divStr += '<div class="itemT"><a href="#">'+el+'</a></div>';
			innerStr(headerRightListDiv,divStr);
			})
			headerRightList[5].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[5].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		//客户服务部分
		kehu();
		function kehu(){
			var divStr = '';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[6])[0];
			forEach(nav[5]["content"],function(el,index){
			divStr += '<div class="itemT"><a href="#">'+el['title']+'</a></div>';
				forEach(el['content'],function(el,index){
					divStr += '<div class="itemT-next"><a href="#">'+el+'</a></div>';
				})
			innerStr(headerRightListDiv,divStr);
			})
			headerRightList[6].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[6].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		//网站导航部分
		webDaoHang();
		function webDaoHang(){
			var divStr = '<div>';
			var headerRightList = $("li",headerRight);
			var headerRightListDiv = $("div",headerRightList[7])[0];
			forEach(nav[6]['content'],function(el,index){
					divStr += '<dl><dt>'+el['title']+'</dt>';
					forEach(el['content'],function(el,index){
						divStr += '<dd><a href="">'+el+'</a></dd>';
					})
					divStr += '</dl>';
			});
			headerRightListDiv.innerHTML = divStr;
			headerRightList[7].onmouseenter=function(){
				this.style.background = "white";
				headerRightListDiv.style.display = "block";
			}
			headerRightList[7].onmouseleave=function(){
				headerRightListDiv.style.display = "none";
				this.style.background = "#e3e4e5";
			}	
		}
		
}
// 收索数据渲染
searchData();
function searchData(){
	// console.log(shangpingxx)
	var shangpinglx = document.querySelector("#shangpinglx");//商品类型
    var searchValue = window.localStorage.getItem("searchS");
	var arrs = [];
	shangpinglx.innerHTML = searchValue;
    shangpingxx.forEach(function(el,index){
            if(el["lx"] == searchValue){
                arrs.push(el);
            }
    })
    var search_shangpingUl = document.querySelector(".search_shangping>ul");
    if(arrs.length){
        arrs.forEach(function(el,index){
            var li = document.createElement("li");
            li.innerHTML = `
            <a href="">
            <img src="${el["shangpingImg"]}" alt="">
            </a>
            <span>${el["price"]}</span>
            <p>
                <a href="">
                    <i>京东超市</i>  ${el["jj"]}
                </a>
            </p>
            <p>
                ${el["pl"]}+评论
            </p>
            <p>
                <b>美的京东自营官方旗舰店</b>
            </p>
            <p>
                <u>自营</u>
                <u>放心购</u>
                <u>秒杀</u>
                <u>限时</u>
            </p>
			<p>
				<span class="duibiBtn">对比</span>
                <span>关注</span>
                <span><a href="shangping.html?${el["id"]}">查看信息</a></span>
            </p>
            `
            search_shangpingUl.appendChild(li);   
        })
    }else{
        var search_shangping = document.querySelector(".search_shangping");
        var noAll = document.querySelector(".noAll");
        search_shangping.style.display = "none";
        noAll.style.display = 'block';
        return;
    }
    // 按价格排序
    var shengxu = document.querySelector("#shengxu");
    var jiangxu = document.querySelector("#jiangxu");
    jiangxu.onclick = function(){
        var arrN = [];
        var strArr=[];
        var le = arrs.length;
        arrs.forEach(function(el,index){
            arrN.push(parseFloat(el["price"].substring(1)))
        })
        arrN.sort(function(a, b){return b - a})
        arrN.forEach(function(el,index){
            arrs.forEach(function(elS,indexS){
                if(el == parseFloat(elS["price"].substring(1))){
					if(strArr.indexOf(elS)==-1){
						strArr.push(elS);
					}
                }
            })
		})
		var str='';
		strArr.forEach(function(el,index){
			str+=`
				<li>
				<a href="">
				<img src="${el["shangpingImg"]}" alt="">
				</a>
				<span>${el["price"]}</span>
				<p>
					<a href="">
						<i>京东超市</i>  ${el["jj"]}
					</a>
				</p>
				<p>
					${el["pl"]}+评论
				</p>
				<p>
					<b>美的京东自营官方旗舰店</b>
				</p>
				<p>
					<u>自营</u>
					<u>放心购</u>
					<u>秒杀</u>
					<u>限时</u>
				</p>
				<p>
					<span class="duibiBtn">对比</span>
					<span>关注</span>
					<span><a href="shangping.html?${el["id"]}">查看信息</a></span>
				</p>
				</li>
			`
		})
		search_shangpingUl.innerHTML = str;
		// console.log(strArr);
		duibi();
    }
    shengxu.onclick = function(){
        var arrN = [];
        var strArr=[];
        var le = arrs.length;
        arrs.forEach(function(el,index){
            arrN.push(parseFloat(el["price"].substring(1)))
        })
        arrN.sort(function(a, b){return b - a})
        arrN.forEach(function(el,index){
            arrs.forEach(function(elS,indexS){
                if(el == parseFloat(elS["price"].substring(1))){
					if(strArr.indexOf(elS)==-1){
						strArr.push(elS);
					}
                }
            })
		})
		var str='';
		for(var i = strArr.length-1; i>=0;i--){
			str+=`
				<li>
				<a href="">
				<img src="${strArr[i]["shangpingImg"]}" alt="">
				</a>
				<span>${strArr[i]["price"]}</span>
				<p>
					<a href="">
						<i>京东超市</i>  ${strArr[i]["jj"]}
					</a>
				</p>
				<p>
					${strArr[i]["pl"]}+评论
				</p>
				<p>
					<b>美的京东自营官方旗舰店</b>
				</p>
				<p>
					<u>自营</u>
					<u>放心购</u>
					<u>秒杀</u>
					<u>限时</u>
				</p>
				<p>
					<span class="duibiBtn">对比</span>
					<span>关注</span>
					<span><a href="shangping.html?${strArr[i]["id"]}">查看信息</a></span>
				</p>
				</li>
			`
		}
		search_shangpingUl.innerHTML = str;
		// console.log(strArr);
		duibi();
    }
    

}
duibi();
function duibi(){
	var duibiBtn = document.querySelectorAll(".duibiBtn");
	var xuanranData = [];//用于存数据
	var duibiUl = document.querySelector("#duibiUl");
	var border_xuanxiangI = document.querySelector(".border_xuanxiang>i");
	var arr = [];
	border_xuanxiangI.onclick = function(){
		this.parentElement.parentElement.parentElement.parentElement.style.display = "none";
	}
	for(var i = 0 ; i < duibiBtn.length;i++){
		duibiBtn[i].onclick = function(){
			var str = '';
			if(arr.indexOf(this.nextElementSibling.nextElementSibling.querySelector("a").href.split("?")[1])==-1){
				arr.push(this.nextElementSibling.nextElementSibling.querySelector("a").href.split("?")[1])
			}else{
				alert("亲，已经加入对比了")
			}
			shangpingxx.forEach(function(el,index){
				arr.forEach(function(els,index){
					if(els == el["id"] && xuanranData.indexOf(el)==-1){
						xuanranData.push(el);
					}
				})
			})
			xuanranData.forEach(function(el,index){
				str += `
					<li>
					<div class="left-img">
						<a href="">
							<img src="${el['shangpingImg']}" alt="">
						</a>
					</div>
					<div class="right-text">
						<p>
							<a href="">${el['jj']}</a>
						</p>
						<b>${el['price']}</b>
					</div>
					</li>	
				`;
			})
			duibiUl.innerHTML = str;
			duibiUl.parentElement.parentElement.style.display = 'block';
		}
		


	}
}




//封装一个插入html结构的方法
function innerStr(el,str){
	el.innerHTML = str;
}
//封装一个获取元素的方法;
function $(el,parent){
	parent = parent?parent:document;  
	return parent.querySelectorAll(el);
}
//封装一个for循环
function forEach(el,fn){
	for(var i = 0 ; i < el.length ; i++){
		var index = i;
		fn(el[i],index);
	}
}

