
        let arr = [];
        //total number
        let n = prompt("Enter Total Number=", " ");

        //minimum number
        let min = prompt("Enter Minimum number", " ");

        //maximum Number
        let max = prompt("Enter Maximun Number", " ");


        for (let i = 0; i < n; i++) {
            let d;
            d = Math.ceil(Math.random() * (max - min) + min);
            arr.push(d);
        }

        document.write("Randomly Genarated Array IS=" + arr + "<br>");

        function arraySort(arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
                return arr;
            
        }
        arraySort(arr);
        document.write("Sorted Array IS=" + arr + "<br>");
        
        //nth position
        var e= prompt("Enter Nth Smallest Positon =");
        document.write(`${e}` + "th Smallest Number= " + arr[+e-1]+ "<br>");

