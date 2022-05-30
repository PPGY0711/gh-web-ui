/**
 * Author: Guanyan Peng
 * Create Date: 28/5/2022
 * Upadte Date: 29/5/2022
 * Project: Web UI for grasshopper
 */

// 决定还是写成导航栏的形式，这样子都可以在一个页面之内切换完成
// 连接button与Input，使点击事件能够通过监听input的value变化反映到grasshopper中
// var count = 0;
$(window).on("load", function(){
    $("#startFillBtn").on("click", function(){
        /**
         * 区域选择页面跳转至具体区域填充部分的逻辑
         */
        // 获取radio的值，并根据所选更改input框的值
        let choose = $("input[name='fillRadio']:checked").val();
        // console.log(choose);
        // console.log(typeof(choose)); //string
        choose = parseInt(choose, 10);
        $("#fillBtnClick").val(choose);
        // 根据choose的值改变页面ui
        switch(choose){
            case 1:
                $("#fillAreaChooseDiv").addClass("d-none");
                $("#fillAreaDiv").removeClass("d-none");
                $("#fillHoleAreaTab").attr("class","card-group d-flex");
                $("#fillStripeAreaTab").attr("class","card-group d-none");
                $("#fillBlockAreaTab").attr("class","card-group d-none");
                $("#fillHoleLink").attr("class","nav-link active");
                $("#fillStripeLink").attr("class","nav-link disabled");
                $("#fillBlockLink").attr("class","nav-link disabled");
                break;
            case 2:
                $("#fillAreaChooseDiv").addClass("d-none");
                $("#fillAreaDiv").removeClass("d-none");
                $("#fillHoleAreaTab").attr("class","card-group d-none");
                $("#fillStripeAreaTab").attr("class","card-group d-flex");
                $("#fillBlockAreaTab").attr("class","card-group d-none");
                $("#fillHoleLink").attr("class","nav-link disabled");
                $("#fillStripeLink").attr("class","nav-link active");
                $("#fillBlockLink").attr("class","nav-link disabled");
                break;
            case 3:
                $("#fillAreaChooseDiv").addClass("d-none");
                $("#fillAreaDiv").removeClass("d-none");
                $("#fillHoleAreaTab").attr("class","card-group d-none");
                $("#fillStripeAreaTab").attr("class","card-group d-none");
                $("#fillBlockAreaTab").attr("class","card-group d-flex");
                $("#fillHoleLink").attr("class","nav-link disabled");
                $("#fillStripeLink").attr("class","nav-link disabled");
                $("#fillBlockLink").attr("class","nav-link active");
                break;
        }
    });

    $("#fromHole2homeBtn").on("click", function(){
        $("#fillAreaChooseDiv").removeClass("d-none");
        $("#fillAreaDiv").addClass("d-none");
        $("#fillBtnClick").val(0);
    });

    /**
     * 轮廓线拾取部分JS代码逻辑
     * 当选取edge的button被按下之后，其他两个button被disabled
     * 对应input的value设置为-1，此时需要完成轮廓线的选取，选取完成后会input框的值会被设置为1
     * 同时被disabled的按钮会恢复，并且显示选取完成标志
     */
    $("#chooseOuterEdgeForHABtn").on("click", function(){
        
        $("#chooseInnerEdgeForHABtn").attr("disabled", true);
        $("#chooseRefEdgeForHABtn").attr("disabled", true);
        $("#checkerForHoleOuterLine").addClass("d-none");
        $("#holeOuterClick").val(-1);
    });

    $("#chooseInnerEdgeForHABtn").on("click", function(){
        $("#chooseOuterEdgeForHABtn").attr("disabled", true);
        $("#chooseRefEdgeForHABtn").attr("disabled", true);
        $("#checkerForHoleInnerLine").addClass("d-none");
        $("#holeInnerClick").val(-1);
    });

    $("#chooseRefEdgeForHABtn").on("click", function(){
        $("#chooseInnerEdgeForHABtn").attr("disabled", true);
        $("#chooseOuterEdgeForHABtn").attr("disabled", true);
        $("#checkerForHoleRefLine").addClass("d-none");
        $("#holeRefClick").val(-1);
    });

    $("#holeOuterClick").bind("input propertychange",function(event){
        // console.log(event.target);
        // console.log($("#holeOuterClick").val())
        let val = $("#holeOuterClick").val();
        if(val){
            $("#chooseInnerEdgeForHABtn").attr("disabled", false);
            $("#chooseRefEdgeForHABtn").attr("disabled", false);
            $("#checkerForHoleOuterLine").removeClass("d-none");
        }
    });

    $("#holeInnerClick").bind("input propertychange",function(event){
        // console.log(event.target);
        // console.log($("#holeInnerClick").val())
        let val = $("#holeInnerClick").val();
        if(val == 1){
            $("#chooseOuterEdgeForHABtn").attr("disabled", false);
            $("#chooseRefEdgeForHABtn").attr("disabled", false);
            $("#checkerForHoleInnerLine").removeClass("d-none");
        }
    });

    $("#holeRefClick").bind("input propertychange",function(event){
        // console.log(event.target);
        // console.log($("#holeRefClick").val())
        let val = $("#holeRefClick").val();
        if(val == 1){
            $("#chooseInnerEdgeForHABtn").attr("disabled", false);
            $("#chooseOuterEdgeForHABtn").attr("disabled", false);
            $("#checkerForHoleRefLine").removeClass("d-none");
        }
    });

    /**
     * 轮廓线拾取部分结束
     */
});