window.addEventListener('load',()=>{

const form=document.querySelector('#new-task-form');
const input=document.querySelector('#new-task-input');
const list_el = document.querySelector('#tasks');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    console.log('Submitted!')
    const task=input.value;

if(!task){
    alert('Please add a task!');
    return;
}
// TASK Section DIV
const task_el=document.createElement("div");
task_el.classList.add("task");

//TASK CONTENT MAIN DIV
const task_content_el=document.createElement("div");
task_content_el.classList.add("content");

//Appending task content to task
task_el.appendChild(task_content_el);

//input Text init
const input_text_el=document.createElement("input");
input_text_el.classList.add("text");
input_text_el.type="text";
input_text_el.value=task;
input_text_el.setAttribute("readonly","readonly");


//appending input to task_content
task_content_el.appendChild(input_text_el);

//Actions and Button init
const task_actions=document.createElement("div");
task_actions.classList.add("actions");

const task_edit=document.createElement("button");
task_edit.classList.add("edit");
task_edit.innerHTML="Edit";

const task_delete=document.createElement("button");
task_delete.classList.add("delete");
task_delete.innerHTML="Delete";


//Appending edit and delete to action div
task_actions.appendChild(task_edit);
task_actions.appendChild(task_delete);

//Appending actions to task_el
task_el.appendChild(task_actions);


list_el.appendChild(task_el);
input.value="";


task_edit.addEventListener('click',()=>{

    if(task_edit.innerText.toLocaleLowerCase()=='edit'){
        input_text_el.removeAttribute("readonly");
        input_text_el.focus();
        task_edit.innerText="Save";
    } else {
        input_text_el.setAttribute("readonly","readonly");
        task_edit.innerText="Edit";
    }
});

task_delete.addEventListener('click',()=>{

    list_el.removeChild(task_el);
   
});
});
});
