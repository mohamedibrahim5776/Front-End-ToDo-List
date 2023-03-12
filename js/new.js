/*
1. analysis
2. find elements
3. check events
4. check proccess =>    CRUD 
*/

/*
1. analysis
btn:
    * click => empty inputs
        => empty title input
            task => show error message for title
        => empty date input
            task => show error message for date
        => data
            task => {
                * hide error msg
                * reset inputs
                * hide div {no data}
                * create div {task}
            }
*/

/*
2. find elements
    * btn => add task
    * inputs
    * error msg
    * div => no data
    * div => parent tasks
*/
let addTaskBtn = document.getElementById('addTaskBtn');
let taskInput = document.querySelectorAll('input');
let validationMessage = document.getElementById('validationMessage');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');

// 3. check events => onclick
addTaskBtn.addEventListener('click' ,
function() {
    // 4. check proccess

    // check inputs validation
    if(taskInput[0].value.trim().length && taskInput[1].value.trim().length) {
        // valid
        if(!validationMessage.classList.contains('none')) {
            validationMessage.classList.add('none')
        }
        noTask.classList.add('none')
        // create
       allTasks.innerHTML += `
       <div class='alert alert-info'> 
            ${taskInput[0].value.trim()}
            <i class="delete text-danger float-right fa-solid fa-rectangle-xmark"></i>
            <p class='float-right'>  ${taskInput[1].value.trim()} </p>
        </div>
       `
       taskInput[0].value = ''
        taskInput[1].value = ''

        document.addEventListener('click', function (e) {
            var [...x] = document.querySelectorAll('i.delete')
            console.log(x.length)
            if (x.length == 0 ) {
                noTask.classList.remove('none')
            }
            x.map((el,ind ,arr) => {
                
                el.addEventListener('click', function () {
                    this.parentElement.remove()
                })
            
            })
        })

    } else {
        // not valid
        if(!taskInput[0].value.trim().length) {
            validationMessage.classList.remove('none')
            validationMessage.innerText = 'you must enter title'
        } else if(!taskInput[1].value.trim().length) {
            validationMessage.classList.remove('none')
            validationMessage.innerText = 'you must enter date'
        }
    }
    
}

    )