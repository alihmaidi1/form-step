let btn_page1 = document.getElementById("btn-page1");
let btn_page2_next = document.getElementById("btn-page2-next");
let form_outer = document.getElementById("outer");
let btn_page3_next = document.getElementById("btn-page3-next");
let btn_page2_previous = document.getElementById("btn-page2-previous");
let btn_page3_preious = document.getElementById("btn-page3-preious");
let btn_page4_previous = document.getElementById("btn-page4-previous");
let counter_form = document.querySelectorAll(".counter-form");
let check = document.querySelectorAll(".check");
let text_counter = document.querySelectorAll(".text-counter");
let test_step = document.querySelectorAll(".test-step");
let max = 4;
let current = 0;

btn_page1.onclick = function() {

    form_outer.style.left = "-100%";
    counter_form[current].classList.add("active");
    check[current].classList.add("active");
    text_counter[current].classList.add("active");
    test_step[current].classList.add("active");
    current++;

}
btn_page2_next.onclick = function() {

    form_outer.style.left = "-200%";
    counter_form[current].classList.add("active");
    check[current].classList.add("active");
    text_counter[current].classList.add("active");
    test_step[current].classList.add("active");
    current++;
}

btn_page3_next.onclick = function() {

    form_outer.style.left = "-300%";
    counter_form[current].classList.add("active");
    check[current].classList.add("active");
    text_counter[current].classList.add("active");
    test_step[current].classList.add("active");
    current++;

}
btn_page2_previous.onclick = function() {


    form_outer.style.left = "0%";
    current--;
    counter_form[current].classList.remove("active");
    check[current].classList.remove("active");
    text_counter[current].classList.remove("active");
    test_step[current].classList.remove("active");

}

btn_page3_preious.onclick = function() {

    form_outer.style.left = "-100%";

    current--;
    counter_form[current].classList.remove("active");
    check[current].classList.remove("active");
    text_counter[current].classList.remove("active");
    test_step[current].classList.remove("active");


}

btn_page4_previous.onclick = function() {

    form_outer.style.left = "-200%";
    current--;
    counter_form[current].classList.remove("active");
    check[current].classList.remove("active");
    text_counter[current].classList.remove("active");
    test_step[current].classList.remove("active");


}