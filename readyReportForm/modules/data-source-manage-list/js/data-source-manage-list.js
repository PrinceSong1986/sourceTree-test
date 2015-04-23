avalon.define({
    $id: "test",
    array: [1, 2, 3, 4],
    dbname: [{id:1111,name:'db_121'}, {id:11141,name:'db_121211'},{id:11311,name:'db_121121'},{id:11211,name:'db_1121221'}],
    delDBSource: function(el, $remove) {
        console.log(el);
        //  $.ajax({
        //       url: url,
        //       data: { offset: $index, size: 1},
        //       success: function(){
        //           $remove()
        //       }
        // })
        // $remove();
        console.log('111');
    },
    editdbsource: function(el) {
        debugger
    }
})
