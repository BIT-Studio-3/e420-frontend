<footer> 
    <div class="footer_box">
        <div class="footer_content_left">
            <div class="footer_header_left">
                <h5 class="credits">
                    <div>Credits</div>
                </h5>      
            </div>
            <ul class="credit_list_box"> <!--Api's-->
                <li class="credit_list"><a style=text-decoration:none href="https://spacetraders.io/">API from spacetraders.io</a></li>
                <li class="credit_list">Designed by Silverside Games</li>
                <li class="credit_list">2023</li>
            </ul>                
        </div>
    </div>
</footer>

<style>
a{
text-decoration: none;
color: white;
}

.footer_box{
display: flex;
padding: 4vh 5vw;
justify-content: space-between;
background-color: rgb(66, 66, 66);
}

.footer_content_left{
flex: 1;
width: 100%;
max-width: 25vw;
}

.footer_header_left{
border-bottom: 2px solid rgb(46, 46, 46);
display: flex;
align-items: center;
margin-bottom: 1em;
}

.credits{
text-decoration: none;
color:white;
margin: 1em 0;
font-size: 15px;
font-family: sans-serif;
letter-spacing: 1.5px;
line-height: 1.4em;
padding: 0;
}

/* API styling*/
.credit_list_box{
padding: 0;
list-style: none;
line-height: 1rem;
margin-left: 0;
}

.credit_list_box > li{
margin-bottom: 0.75rem;
}

.credit_list{
color: white;
font-size: 1rem;
font-family: 'Courier New', Courier, monospace;
}
</style>
