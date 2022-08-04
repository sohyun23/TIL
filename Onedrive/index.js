const doclist = document.getElementById('list');

function newfolder(){
    const createlist = document.createElement('li');
    createlist.innerHTML += ` <div class="listcheckbox" style="display: flex; width: 1100px;">
    <div class="checkboxpadding"><input type="checkbox" class="checkboxes" name='checkbox' onclick="checkselect()"></div>
    <div class="folderimg" style="width: 60px;"><img src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20211207.001/assets/item-types/20/folder.svg" alt="폴더" style="height: 20px; weight:20px;"></div>
    <div class="document">문서</div>
    <div class="date">2022.07.24.</div>
    <div class="nonesize"></div>
    <div class="sharenot">비공유</div>
    </div>`;

    doclist.appendChild(createlist);
}

function deleteFolder(){
    const checkboxes = document.getElementsByName('checkbox');  
    for(var i=checkboxes.length-1;i<checkboxes.length;i--){ 
        if(checkboxes[i].checked == true){
            checkboxes[i].parentElement.parentElement.remove();
        }
    }
}

function checkselect(){
    // 전체 체크박스
    const checkboxes = document.querySelectorAll('input[name="checkbox"]');
    // 선택된 체크박스
    const checked = document.querySelectorAll('input[name="checkbox"]:checked');

    // select all 체크박스
    const selectAll = document.querySelector('input[name="all"]');

    if(checkboxes.length === checked.length)  {
        selectAll.checked = true;
    }else {
        selectAll.checked = false;
    }
}

function selectAll(){
    const allcheckornot = document.querySelector('input[name="all"]');
    const checkboxes = document.getElementsByName('checkbox');

    //onclick해서 checked가 되면 전체선택
    if(allcheckornot.checked==true){
        for(var i=0;i<checkboxes.length;i++){
            if(checkboxes[i].checked == false){
                checkboxes[i].checked = true;
            }
    }
    }else{ // onclick해서 checked가 안되면 전체해제
        for(var i=0;i<checkboxes.length;i++){
            if(checkboxes[i].checked == true){
                checkboxes[i].checked = false;
            }
        }
    }
}