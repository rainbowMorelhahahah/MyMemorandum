
let data = watch({
  value: ''
});
document.getElementById('input').addEventListener('input', function(e) {
  data.value = e.currentTarget.value;
})