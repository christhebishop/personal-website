test = "What is all this?";

document.open();

document.write(test.bold() + "<P>");

document.write(test.fontsize(7) + "<P>");

document.write(test.fontcolor("red") + "<P>");

document.write(test.toUpperCase() + "<P>");

document.write(test.italics().fontsize(6).fontcolor("green") + "<P>");

document.open();

muresources = "";

muresources["classical"] = "<A HREF='http://net.com/classical.file1'>Meditative classical music<A><P><A HREF='http://net.com/classical.file2'>Provoking classical music<A>";

muresources["rock"] = "<A HREF='http://net.com/rock.file1'>Popular rock music<A><P><A HREF='http://net.com/rock.file2'>Exciting rock music<A>";

muresources["ethnic"] = "<A HREF='http://net.com/mexican.file1'>Mexican music<A><P><A HREF='http://net.com/Indian.file2'>Indian music<A>";

function getLink() {
    temp = muresources[choice];
    temp2 = "<TITLE>Custom Links</TITLE><H3>" + document.m.pername.value + ", here are some links for you</H3><P>" + temp;
}

function writeIt() {
    diswin = window.open();
    diswin.document.open();
    diswin.document.write(temp2);
    diswin.document.close();
}

function doAll() {
    getLink();
    writeIt();
}