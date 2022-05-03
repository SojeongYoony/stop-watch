function Character(dramaId, name, author, characterDetail) {
    this.dramaId = dramaId;
    this.name = name;
    this.author = author;
    this.characterDetail = characterDetail;
}

function CharacterList(){
    this.list = [];
    this.addList = funciton(character) {
        this.list.push(character);
    }
}

function insertCharacter(){
    var characterList = new CharacterList();
    $('#insertBtn').on('click', function(){
        var dramaId = $('#drama_id').val(); // 거기서는 선택자로 찾음 $(this).children().children().last().val() 인가그럼
        var name = $('#name').val();
        var author = $('#author').val();
        var characterDetail = $('#characterDetail').val();
    characterList.addList(new Character(dramaId, name, author, characterDetail));
    reset(); // 대충 input 초기화하는 함수
    submitCharacterList(characterList);
    
    }) // end insertBtn click 

    $('#btn').on('click', function(){
        var submitList = characterList.list;

        $.ajax({
            url : '유알엘',
            type : 'get',
            traditional : true,
            data : submitList,
            contentType : 'application/json',
            dataType : 'json',
            success : function(map){
                if(map.result != 0) {
                    '성공'
                } else {
                    '실패'
                }
            }
        }) // End ajax

    }) // End btn click



}