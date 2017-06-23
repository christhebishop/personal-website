// sets up database of links - SECTION A1
muresources=""
muresources["classical"]= "<A HREF='http://net.com/classical.file1'>Meditative classical music<A><P><A HREF='http://net.com/classical.file2'>Provoking classical music<A>"
muresources["rock"] = "<A HREF='http://net.com/rock.file1'>Popular rock music<A><P><A HREF='http://net.com/rock.file2'>Exciting rock music<A>"
muresources["ethnic"] = "<A HREF='http://net.com/mexican.file1'>Mexican music<A><P><A HREF='http://net.com/Indian.file2'>Indian music<A>"

function getLink() {
// constructs unique page using name and choice of music - SECTION A.2
temp = muresources[choice]
temp2 = "<TITLE>Custom Links</TITLE><H3>" +document.m.pername.value+", here are some links for you</H3><P>"+temp
}

function writeIt(){
// creates new window to display page - SECTION A.3
diswin = window.open();
diswin.document.open();
diswin.document.write(temp2);
diswin.document.close();
}

function doAll(){
// master routine calls other functions - SECTION A.4
getLink();
writeIt();
}
