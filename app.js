var app = new function(){
    this.el= document.getElementById('tasks');
    this.tasks=[];

    this.FetchAll = function(){
        var data='';

        if(this.tasks.length>0){
            for(i=0;i<this.tasks.length;i++){
                data+='<tr>';
                data+='<td>'+(i+1)+'. '+this.tasks[i]+'</td>';
                data+='<td><button onclick="app.Edit('+i+')"class="btn btn-warning">Edit</button></td>';
                data+='<td><button onclick="app.Delete('+i+')"class="btn btn-danger">Delete</button></td>';
                data+='</tr>'
            }
        }
        this.Count(this.tasks.length);
        console.log(data);
        return this.el.innerHTML = data
    };

    this.Add = function(){
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim())
            el.value ='';
            this.FetchAll();

            var editInput =  document.getElementById('edit-todo');
            editInput.value = '';
            var saveBtn = document.getElementById("save-btn");
            saveBtn.removeAttribute("item");
            document.getElementById('edit-box').style.display = "none";
        }
    }
    this.Edit = function(item){
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        var saveBtn = document.getElementById("save-btn");
        saveBtn.setAttribute("item", item);    
    };
    this.Save = function() {
        var updatedTask =  document.getElementById('edit-todo').value;
        if (updatedTask) {
            var saveBtn = document.getElementById("save-btn");
            var index = parseInt(saveBtn.getAttribute("item"));
            this.tasks[index] = updatedTask;
            this.FetchAll();

            updatedTask.value = '';
            saveBtn.removeAttribute("item");
            document.getElementById('edit-box').style.display = "none";
        }
    };
    this.Delete = function(item){
        this.tasks.splice(item, 1);
        this.FetchAll();
    };

    this.Count = function(data){

    };
}
    
app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}