var btn = document.querySelector('.btn');
var input = document.querySelector('.inp');
var para = document.querySelector('.cont');


btn.addEventListener('click',()=>{
let newpara = document.createElement('div')
newpara.setAttribute('class','new')
para.append(newpara);
newpara.innerHTML = `
<p>${input.value}</p>
<button class = 'del'>Delete</button>
<button class = 'edit'>Edit</button>`

});
para.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) {
        var mydiv = e.target.closest('.new');
        mydiv.remove();
    }
});