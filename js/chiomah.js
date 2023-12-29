const myForm = document.querySelector("#nameForm");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const subjectMatter = document.querySelector("#subject");
const userEmail = document.querySelector("#email");
const userComment = document.querySelector("#comment");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(subjectMatter.value);
    console.log(userEmail.value);
    console.log(userComment.value);
    if (firstName.value === '') {
        alert('Please input your first name');
    } else if (lastName.value === '') {
        alert('Please input your last name');
    } else if (userEmail.value === '') {
        alert('Please input your email')
    } else if (userComment.value === '') {
        alert('Please let us know your comment')
    }
})