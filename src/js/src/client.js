import fetch from 'unfetch';

const checkStatus = response => {

    if (response.ok){
        return response;
    }else{
        
        return response.json().then(e => {
            console.log(e); // 这里可以在控制台看到完整的错误对象
            let error = new Error(e.message || response.statusText);
            error.response = response;
            error.error = e;
            // 现在，我们在错误信息完全解析后拒绝Promise
            return Promise.reject(error);
        });
        
        /*
        console.log(response.statusText)
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
        */
    }

}

export const getAllStudents=()=>
    fetch('api/students').then(checkStatus);

export const addNewStudent = student => 
    fetch('api/students', {
       headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(student)
    })
    .then(checkStatus);
