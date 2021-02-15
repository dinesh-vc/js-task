var str=prompt("Enter Paragraph =");
    //Total Charcter
    var char=+(str.length);
    document.write("No of Char=" + char + "<br>");
    
    //white space
    var w=str.split(" ");
    var words = w.filter(function(item){   // w=["","","hi"]
        return (item!="");
    })
    document.write("No of Words=" + words.length + "<br>");
    
   // Space
    var sp=+(w.length)-1;
     document.write("No of Space=" + sp + "<br>");
    
    // total char without space
    
    var cws=char-sp;
     document.write("No of Total Char Without Space=" + cws + "<br>");
    