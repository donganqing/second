/**
 * Created by CC on 2016/10/10.
 */
function ajaxGet(url,fSuccess,fError){
    var xhr=new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                //
                fSuccess(xhr.responseText);
            }else{
                fError();
            }
        }
    }
    xhr.send();
}

function ajaxPost(url,data,fSuccess,fError){
    var xhr=new XMLHttpRequest();
    xhr.open("post",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                //
                fSuccess(xhr.responseText);
            }else{
                fError();
            }
        }
    }
    xhr.send(data);
}

function ajaxJson(url,fSuccess,fError){
    var xhr=new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                var obJson=JSON.parse(xhr.responseText);
                fSuccess(obJson);
            }else{
                fError();
            }
        }
    }
    xhr.send(data);
}
