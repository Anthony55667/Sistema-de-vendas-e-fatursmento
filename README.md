HTML:
HTML:
<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <title>Venda Certa</title>
</head>
<body>
    <div class="título">
        <h1 class="logo-superior">Venda Certa</h1>
    </div> 

    <div class="login-titulo">
        <form>

            <div class="titulo-login">
                <h2 style="color: w; font-family: sans-serif; margin-bottom: 20px;">criar conta</h2>
            </div>
               <div class="int-login">

                  <label>
                    E-mail
                  </label> 
                    <input type="email" required placeholder= ''>  
                </div>
                    <div class="int-login">
                        <label>
                            Senha
                        </label>
                            <input type="password" required placeholder="">
                    </div>
                        <div class="botao-login">
                            <button type="submit">logar</button>
                        </div>
      </div>                 
        </form>

    <div class="rede-socias">

    </div>

</body>
</html>

    CSS:
body{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: 
#0b0b0f; 
    background-image: 
        radial-gradient(circle 50vw at 50% 50%, rgba(26, 85, 216, 0.25) 0%, rgba(0, 0, 0, 0) 100%),
        radial-gradient(circle 80vw at 50% 50%, rgba(13, 37, 91, 0.4) 0%, rgba(11, 11, 15, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.titulo{
    position: absolute;
    top: 30px;
    left: 40px;
    z-index: 10;
}
.titulo-lo{
   margin: 0;
   padding: 0;
}
.logo-superior{
  background-image: linear-gradient(to right, blue, 
#04136b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Courier New', Courier, monospace;
    font-size: 42px;
    margin: 0;
    text-align: left;
}
.titulo-login{
    color: white;
    font-family: sans-serif;
    font-size: 24px;
    margin: 0 0 20px 0;
    text-align: center;

}
.login-titulo{
    background-color: 
#f80707; 
    width: 450px;              
    height: auto;
    min-height: 550px;             
    border-radius: 50px;       
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box;
}
.login-titulo input{
    width: 300px;
    height: 50px;
    border: none;
    margin-bottom: 50px;
    font-size: 20px;
    padding-left: 80px;
}
.login-titulo button{
    width: 150px;
    height: 50px;
    border-radius: 20px;
    border: none;
    background-color: white;
    color: 
#04136b;
    font-size: 20px;
    cursor: pointer;
}
.login-titulo button:hover{
    background-color: 
#ff0d00;
}
.login-titulo:after{
content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 55px;
    background-image: linear-gradient(to right, blue, 
#ff0d00);
    z-index: -1;
    filter: blur(20px); 
    opacity: 0.8;
}
    

    <div class="login-titulo">
        <form>

            <div class="titulo-login">
                <h2 style="color: w; font-family: sans-serif; margin-bottom: 20px;">criar conta</h2>
            </div>
               <div class="int-login">

                  <label>
                    E-mail
                  </label> 
                    <input type="email" required placeholder= ''>  
                </div>
                    <div class="int-login">
                        <label>
                            Senha
                        </label>
                            <input type="password" required placeholder="">
                    </div>
                        <div class="botao-login">
                            <button type="submit">logar</button>
                        </div>
      </div>                 
        </form>

    <div class="rede-socias">

    </div>

</body>
</html>
