class SearchBook{
    static SearchBookFromApi(){
        
        $('#mon_form').submit(function(e) {
            var TitleBook=getElementbyId("Titre du livre");
            var AuthorBook=getElementbyId("Auteur");
            console.log(TitleBook + AuthorBook);
        });
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q="+TitleBook+"inauthor:"+AuthorBook+"&key=AIzaSyDGVWbj3CXDrrvYtTaWypB2Hm7Zpgntguo",
            type: "GET",
            success: function (result) {
            console.log(result);
            },
            error:function(ErrorMsg){
                console.log(ErrorMsg);
            }
            
           });

           
        
    }
}