function Login(url) {
  window.location.href=url;
}
const form = document.getElementById('orderForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const set = document.getElementById('set').value;
  // const option = document.querySelector('input[name="option"]:checked').value;
  const phone = document.getElementById('phone').value;

 
  // if (!name || !address || !set || !option || !phone) {
  //   alert('Please fill in all required fields.');
  //   return;
  // }

  
  console.log('Name:', name);
  console.log('Address:', address);
  console.log('Set:', set);
  // console.log('Option:', option);
  console.log('Phone:', phone);
  window.location.href='./order.html';
  
  form.reset();
});