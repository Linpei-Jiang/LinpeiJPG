function switchToDaily() {
    // changing displayed element
    document.getElementById('dailyBlogs').style.display = 'grid';
    document.getElementById('travelBlogs').style.display = 'none';
    document.getElementById('otherBlogs').style.display = 'none';

    document.getElementById('daily').style.background = 'black';
    document.getElementById('daily').style.color = 'white';

    document.getElementById('travel').style.background = '#dcdcdc';
    document.getElementById('other').style.background = '#dcdcdc';
    document.getElementById('travel').style.color = 'black';
    document.getElementById('other').style.color = 'black';

}

function switchToTravel() {
    // changing displayed element
    document.getElementById('dailyBlogs').style.display = 'none';
    document.getElementById('travelBlogs').style.display = 'grid';
    document.getElementById('otherBlogs').style.display = 'none';

    document.getElementById('travel').style.background = 'black';
    document.getElementById('travel').style.color = 'white';

    document.getElementById('daily').style.background = '#dcdcdc';
    document.getElementById('other').style.background = '#dcdcdc';
    document.getElementById('daily').style.color = 'black';
    document.getElementById('other').style.color = 'black';
}

function switchToOther() {
    // changing displayed element
    document.getElementById('dailyBlogs').style.display = 'none';
    document.getElementById('travelBlogs').style.display = 'none';
    document.getElementById('otherBlogs').style.display = 'grid';

    document.getElementById('other').style.background = 'black';
    document.getElementById('other').style.color = 'white';

    document.getElementById('travel').style.background = '#dcdcdc';
    document.getElementById('daily').style.background = '#dcdcdc';
    document.getElementById('travel').style.color = 'black';
    document.getElementById('daily').style.color = 'black';
}
