const button = document.getElementById('create-course')
const form = document.getElementById('course-form')
button.addEventListener('mouseenter', function(e){
  e.target.className = 'btn btn-danger margin-prom'
})
button.addEventListener('mouseout', function(e){
  e.target.className = 'btn btn-primary margin-prom'
})

form.addEventListener('submit',function(e){

  e.preventDefault();
  let title = document.getElementById('title-form').value
  let description = document.getElementById('description-form').value

  console.log(title);
  console.log(description);
})