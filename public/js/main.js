
function loop() {

    var serverAdd = 'http://192.168.100.60:8080';
    var socket = io(serverAdd, { transports: ['websocket'] });
    socket.on('datetime', function (data) {

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec',];

        var d = new Date(data.datetime);
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var month = d.getMonth();
        var day = d.getDay();
        var date = d.getDate();
        var year = d.getFullYear();
        h = addZero(h);
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


}




