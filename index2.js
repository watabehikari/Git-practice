window.alert();

window.console.log();

window.document.getElementById("");

const foo={
    // alert: function () {},
    alert () {},
};

foo.alert

function cut(food) {
    const cutFood = food.slice();
    return cutFood;
}

const cutCarrot=cut(carrot);
const cutPotato=cut(potato);

function throwAway(food){
    delete food;
}

function isTweetable(text) {
    return text.length <=140;
}

console.log(isTweetable("foo"));

function alertTweetable(text) {
    if(text.length<=140) {
        alert("you can tweet!");
    }
}

alertTweetable("foo");