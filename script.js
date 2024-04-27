var pardiv = document.createElement("div")
pardiv.id = "pgn_div"
pardiv.style.alignItems = "center"



        function tr_fn(){
            var tr_elem = document.createElement("tr")
            return tr_elem
        }

        function th_fn(scope_val,content){
            var th_elem = document.createElement("th")
            th_elem.scope=scope_val
            th_elem.innerHTML=content
            return th_elem
        }

        function tr_fn(){
            var tr_elem = document.createElement("tr")
            return tr_elem
        }

        function td_fn(content){
            var td_elem = document.createElement("td")
            td_elem.style.textAlign="center"
            td_elem.style.fontSize="12px"
            td_elem.innerHTML = content
            return td_elem
        }

        var tbl = document.createElement("table")
        tbl.className = "table table-striped"
        tbl.style.width = "60%"
        tbl.style.textAlign="center"
        tbl.style.margin = "50px"
       
        var thd = document.createElement("thead")
        thd.className = "thead-dark"

        var tr = tr_fn()
        var th1 = th_fn("col","ID")
        var th2 = th_fn("col","Name")
        var th3 = th_fn("col","Email")

        var tbdy = document.createElement("tbody")
        tbdy.id = "table_body"

        pgn_link_load(1)
        
        function loadData(id,name,email){
                var tr1 = tr_fn()

                    var td_1a = td_fn(id)
                    var td_1b = td_fn(name)
                    var td_1c = td_fn(email)
            tr1.append(td_1a,td_1b,td_1c)
            tbdy.appendChild(tr1)

            
        }

        tr.append(th1,th2,th3)
        thd.appendChild(tr)
    tbl.append(thd,tbdy)
        
        

    function pgn_link_load(pagenum){
        tbdy.innerHTML = ''

        var request = new XMLHttpRequest();
        request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
        request.send()
        var response = {}
        request.onload = function(){
    
            var res = JSON.parse(request.response)
            response = res
            // console.log(res)
        }
        setTimeout(()=>{
        var tot = response.length
        var i = 0
        var n = 0
        
        if (pagenum=="First"){
            i=0
            n=10
        }
        else if (pagenum=="Last"){
            n=100
            i=n - 10
            
        }
        else{
        n = pagenum * 10
        i = n-10
        
        for(i;i<n;i++){
            obj_val = response[i]
            // console.log(obj_val.id," ",obj_val.name," ",obj_val.email)
            loadData(obj_val.id,obj_val.name,obj_val.email)}}},1000)

        }



var nav_pnl = document.createElement("nav") 
nav_pnl.id = "navpnl"


var pgn = document.createElement("ul") 
pgn.className = "pagination"
pgn.style.marginLeft = "100px"

var pgn_itm = document.createElement("li") 
pgn_itm.className="page-item"



var pgn_itm_first = document.createElement("li") 
pgn_itm_first.className="page-item"

var pg_lnk_fst = document.createElement("a")
pg_lnk_fst.className = "page-link"
pg_lnk_fst.setAttribute("href","#")
pg_lnk_fst.innerHTML = "&laquo; First"
pg_lnk_fst.setAttribute("onclick","pgn_link_load(1)")


var pgn_itm_lst1 = document.createElement("li") 
pgn_itm_lst1.className="page-item"

var pg_itm_lnk1 = document.createElement("a")
pg_itm_lnk1.className = "page-link"
pg_itm_lnk1.setAttribute("href","#")
pg_itm_lnk1.innerHTML = "1"
pg_itm_lnk1.setAttribute("onclick","pgn_link_load(1)")

var pgn_itm_lst2 = document.createElement("li") 
pgn_itm_lst2.className="page-item"

var pg_itm_lnk2 = document.createElement("a")
pg_itm_lnk2.className = "page-link"
pg_itm_lnk2.setAttribute("href","#")
pg_itm_lnk2.innerHTML = "2"
pg_itm_lnk2.setAttribute("onclick","pgn_link_load(2)")


var pgn_itm_lst3 = document.createElement("li") 
pgn_itm_lst3.className="page-item"

var pg_itm_lnk3 = document.createElement("a")
pg_itm_lnk3.className = "page-link"
pg_itm_lnk3.setAttribute("href","#")
pg_itm_lnk3.innerHTML = "3"
pg_itm_lnk3.setAttribute("onclick","pgn_link_load(3)")

var pgn_itm_lst4 = document.createElement("li") 
pgn_itm_lst4.className="page-item"

var pg_itm_lnk4 = document.createElement("a")
pg_itm_lnk4.className = "page-link"
pg_itm_lnk4.setAttribute("href","#")
pg_itm_lnk4.innerHTML = "4"
pg_itm_lnk4.setAttribute("onclick","pgn_link_load(4)")


var pgn_itm_lst5 = document.createElement("li") 
pgn_itm_lst5.className="page-item"

var pg_itm_lnk5 = document.createElement("a")
pg_itm_lnk5.className = "page-link"
pg_itm_lnk5.setAttribute("href","#")
pg_itm_lnk5.innerHTML = "5"
pg_itm_lnk5.setAttribute("onclick","pgn_link_load(5)")


var pgn_itm_lst6 = document.createElement("li") 
pgn_itm_lst6.className="page-item"

var pg_itm_lnk6 = document.createElement("a")
pg_itm_lnk6.className = "page-link"
pg_itm_lnk6.setAttribute("href","#")
pg_itm_lnk6.innerHTML = "6"
pg_itm_lnk6.setAttribute("onclick","pgn_link_load(6)")


var pgn_itm_lst7 = document.createElement("li") 
pgn_itm_lst7.className="page-item"

var pg_itm_lnk7 = document.createElement("a")
pg_itm_lnk7.className = "page-link"
pg_itm_lnk7.setAttribute("href","#")
pg_itm_lnk7.innerHTML = "7"
pg_itm_lnk7.setAttribute("onclick","pgn_link_load(7)")


var pgn_itm_lst8 = document.createElement("li") 
pgn_itm_lst8.className="page-item"

var pg_itm_lnk8 = document.createElement("a")
pg_itm_lnk8.className = "page-link"
pg_itm_lnk8.setAttribute("href","#")
pg_itm_lnk8.innerHTML = "8"
pg_itm_lnk8.setAttribute("onclick","pgn_link_load(8)")


var pgn_itm_lst9 = document.createElement("li") 
pgn_itm_lst9.className="page-item"

var pg_itm_lnk9 = document.createElement("a")
pg_itm_lnk9.className = "page-link"
pg_itm_lnk9.setAttribute("href","#")
pg_itm_lnk9.innerHTML = "9"
pg_itm_lnk9.setAttribute("onclick","pgn_link_load(9)")


var pgn_itm_lst10 = document.createElement("li") 
pgn_itm_lst10.className="page-item"

var pg_itm_lnk10 = document.createElement("a")
pg_itm_lnk10.className = "page-link"
pg_itm_lnk10.setAttribute("href","#")
pg_itm_lnk10.innerHTML = "10"
pg_itm_lnk10.setAttribute("onclick","pgn_link_load(10)")


var pgn_itm_last = document.createElement("li") 
pgn_itm_last.className="page-item"

var pg_lnk_lst = document.createElement("a")
pg_lnk_lst.className = "page-link"
pg_lnk_lst.setAttribute("href","#")
pg_lnk_lst.innerHTML = "Last &raquo;"
pg_lnk_lst.setAttribute("onclick","pgn_link_load(10)")


pgn_itm_first.append(pg_lnk_fst)
pgn_itm_last.append(pg_lnk_lst)

pgn.append(pgn_itm_first,pgn_itm_lst1,pg_itm_lnk1,
                        pgn_itm_lst2,pg_itm_lnk2,
                        pgn_itm_lst3,pg_itm_lnk3,
                        pgn_itm_lst4,pg_itm_lnk4,
                        pgn_itm_lst5,pg_itm_lnk5,
                        pgn_itm_lst6,pg_itm_lnk6,
                        pgn_itm_lst7,pg_itm_lnk7,
                        pgn_itm_lst8,pg_itm_lnk8,
                        pgn_itm_lst9,pg_itm_lnk9,
                        pgn_itm_lst10,pg_itm_lnk10, pgn_itm_last)

pardiv.append(tbl,pgn)
document.body.appendChild(pardiv)