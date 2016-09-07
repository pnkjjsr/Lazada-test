
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

//        Tab Active Class Changes
        var getTab = document.getElementsByClassName('tabs')[0].getElementsByClassName('tab')[0].getElementsByTagName('li');
        for (var i = 0; i < getTab.length; i += 1) {
            getTab[i].classList.remove("active");
        }

        var target;
        document.addEventListener('click', function (e) {
            e = e || window.event;
            target = e.target || e.srcElement;
            target.classList.add("active");
        });

//        Tab Container Changes
        var getContainer = document.getElementsByClassName('tabs')[0].getElementsByClassName('container')[0].getElementsByClassName('tab');
        for (var i = 0; i < getContainer.length; i += 1) {
            getContainer[i].style.display = "none";
        }
        getContainer = document.getElementsByClassName(el)[0].style.display = "block";
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