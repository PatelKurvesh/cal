sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

        var num1, num2;
    return Controller.extend("cal.controller.View1", {
        onInit: function () {
            
        },

        getValue:function(){
            num1 = parseInt(this.getView().byId("num1").getValue())
            num2 = parseInt(this.getView().byId("num2").getValue())
            return;
        },
        
        onSum:function(){
            this.getValue();
            var sum = num1 + num2 
            var ans = this.getView().byId("ans_inp").setValue(sum)
        },

        onSub:function(){
            this.getValue();
            var sum = num1-num2
            var ans = this.getView().byId("ans_inp").setValue(sum)
        },

        onMul:function(){
            this.getValue();
            var sum = num1*num2
            var ans = this.getView().byId("ans_inp").setValue(sum)
        },

        onDiv:function(){
            this.getValue();
            var sum = num1/num2
            var ans = this.getView().byId("ans_inp").setValue(sum)
        },

        onClear: function(){
            num1 = this.getView().byId("num1").setValue("")
            num2 = this.getView().byId("num2").setValue("")
            this.ans_inp = this.getView().byId("ans_inp").setValue("")
        }

    });
});
