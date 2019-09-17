
function loop() {
    var socket = io.connect('http://192.168.137.26:8080');
    socket.on('datetime', function (data) {

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec',];
        var i;
        i = new Date(data.datetime);
        var h = i.getHours();
        var m = i.getMinutes();
        var s = i.getSeconds();
        var month = i.getMonth();
        var day = i.getDay();
        var date = i.getDate();
        var year = i.getFullYear();
        m = addZero(m);
        s = addZero(s);

        document.getElementById('day').innerHTML = days[day];

        day = addZero(day);

        var time = h + ':' + m + ':' + s;
        var date = months[month] + '/' + date + '/' + year;
        announce(h, m);

        document.getElementById('time').innerHTML = time;
        document.getElementById('date').innerHTML = date;



        function addZero(i) {
            if (i < 10) { i = "0" + i };
            //location.reload(true);
            return i;
        }
        function announce(h, m) {

            switch (h) {
                case 9: {
                    if (m >= 45) {
                        document.getElementById("info").innerHTML = "Breaktime";
                    }
                    break;
                }

                case 12: {
                    if (m >= 0) {
                        document.getElementById("info").innerHTML = "Breaktime";
                    }
                    break;
                }

                case 15: {
                    if (m >= 0 && m <= 14) {
                        document.getElementById("info").innerHTML = "testing";
                    }
                    break;
                }

                default: {
                    document.getElementById("info").innerHTML = "Pamugas Mode!";
                    break;
                }


            }

        }

    });

    setTimeout(loop, 1000);


}



/*function show() {


    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var day = d.getDay();
        var date = d.toLocaleDateString();
        s = addZero(s);
        m = addZero(m);
        var time = h + ':' + m + ':' + s;

        setTimeout(show, 500);

        document.getElementById('time').innerHTML = time;
        document.getElementById('date').innerHTML = date;
        document.getElementById('day').innerHTML = days[day];


    function addZero(i) {
        if (i < 10) {i = "0" + i};
        //location.reload(true);
        return i;
    }






}*/




