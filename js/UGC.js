

// 上次图片
var upImages = new MKupImages({
	autoSize: true,
	width: 1000, 
	height: 2000,
	inputElem: '#file',
	boxElem: '#imgCont',
  cmpGrade: 0.7, //压缩图片质量
	multiple: false,
	upCallback: function(dataurl){
		var _img = new Image();
		_img.src = dataurl;
		this.boxElem.appendChild(_img);
    

    // alert("图片src是"+dataurl)


	}
});



var imgsuffix = "jpeg";//图片后缀名
var image = $("#imgCont img").attr("src");
imgsuffix = image.substring(0,image.indexOf(';'));
imgsuffix = imgsuffix.substring(imgsuffix.lastIndexOf('/')+1); 

