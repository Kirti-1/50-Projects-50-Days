var allKeys = document.querySelectorAll('.keys');
var res = document.getElementById('text-result');

var result = ""
var operand1 = ""
var operator = ""
var operand2 = ""
var op1_flag = false, op_flag = false, op2_flag = false; 

allKeys.forEach( (key) => {
    key.addEventListener('click', (e) =>{
        var o = key.innerHTML;
        if(o == '='){
            if(!op1_flag){
                res.innerHTML = operand1;
            }else if(op2_flag){
                result = eval(operand1 + " " + operator + " " + operand2);
                if(isNaN(result)){
                    res.innerHTML = 'Error';
                }else{
                    res.innerHTML = result;
                }
                operand1 = result;
                operator = "";
                operand2 = "";
                op1_flag = false;
                op_flag = false;
                op2_flag = false;

            }else{
                res.innerHTML = operand1;
                operator = "";
                op1_flag = false;
                op_flag = false;
                op2_flag = false;
            }
        }
        else if(o == 'AC'){
            operand1 = ""
            operator = ""
            operand2 = ""
            result = ""
            res.innerHTML = result;
            op1_flag = false;
            op_flag = false;
            op2_flag = false;
        }else if(o == '+/-'){
            if(!op1_flag){
                operand1 = -parseInt(operand1) + "";
                res.innerHTML = operand1;
            }else if(op2_flag){
                operand2 = -parseInt(operand2) + "";
                res.innerHTML = operand2;
            }else{
                operand1 = -parseInt(operand1) + "";
                res.innerHTML = operand1;
                operator = "";
                op1_flag = false;
                op_flag = false;
                op2_flag = false;
            }
        }else if(o.match(/[0-9]/)){
            if(!op1_flag){
                operand1 += o;
                res.innerHTML = operand1;
            }else{
                op2_flag = true;
                operand2 += o;
                res.innerHTML = operand2;
            }
       }else if(o.match(/['-/*+=%']/)){
            op1_flag = true;
            op_flag = true;
            operator = o;
            res.innerHTML = operator;
        }
        
    })
    
}
)

