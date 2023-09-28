//Write your pseudo code first! 

//Take a celsius temperature and convert it to fahrenheit.


//Click into a form string input.
//Type out a number (celsius value).
//Click on a button that says "convert".
//That "convert" button must multiply the given number by whatever.
//The value of the input number (celsius) multiplied by the converter number gives a new value.
//That value is then displayed.


//0 ---> 32


//type in the celsius value

//convert from celsius to fahrenheit

//show it

document.querySelector('#convert').addEventListener('click', convert)

function convert() {
//type in the celsius value, convert to fahrenheit
  const fahrenheit = document.querySelector('#celsius').value * 9/5 + 32
//show it
  document.querySelector('#result').innerText = `${fahrenheit}` //or just fahrenheit
}