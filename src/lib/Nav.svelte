<style>
    nav
    {
        display:flex ;
        justify-content:center;
        flex-wrap: wrap;    
        overflow: hidden;
        width:100%;
        padding:80px;
    }
    nav a
    {         
        text-align: center;  
    }

    nav ul{
        display:flex;
        list-style:none;
        margin:0;
        padding:0;
    }

    nav ul li a div, nav > div {
        padding: 15px 25px;
    }

    .nav-words :hover{
        background-color: #17d8ce!important;
        color: black;
    }

    .nav-words{
        color: white;
        font-size: 24px;
    }
</style>

<nav>
<ul class="nav-words">
    <li>
        <a id="Login">
            <div>Login</div>
        </a>
    </li>
    <li>
        <a id="Buy">
            <div>Buy</div>
        </a>
    </li>
    <li>
        <a id="Loan">
            <div>Loan</div>
        </a>
    </li>
    <li>
        <a id="Controls">
            <div>Controls</div>
        </a>
    </li>
</ul>
</nav>