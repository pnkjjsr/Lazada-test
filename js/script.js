
//LightBox Objectd
var lightBox = function () {
    this.close = function (el) {
        document.getElementById(el).style.display = "none";
    };
};
var objLightBox = new lightBox();

//Tabs Object
var tabs = function () {
    this.tab = function (el) {
        var getEl = document.getElementsByClassName('tabs')[0].getElementsByClassName('container')[0].getElementsByClassName('tab');
        for (var i = 0; i < getEl.length; i += 1) {
            getEl[i].style.display = "none";
        }
        getEl = document.getElementsByClassName(el)[0].style.display = "block";
    };
};
var objTabs = new tabs();

//Form Validation Object
var validation = function () {
    this.password = function (el) {
        var get_value = document.getElementsByName(el)[0].value;
        var expression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

        if (get_value.match(expression))
        {
            alert("Correct, try another...");
            return true;
        }
        else
        {
            alert("Wrong...!");
            return false;
        }
    };
};
var obvLogin = new validation();