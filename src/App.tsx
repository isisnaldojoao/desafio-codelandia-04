import './App.css'

function App() {
  

  return (
      <div className='main'>
       <div className='area'>
        <section className='area-image'>
          <img  src="src/assets/illustration.svg" style={{ width: '400px'}} alt="" />
        </section>
        <section className='area-count'>
          <div className='area-flex-container'>
          <div className='area-title'>
            <h3>Bem-vindo de volta</h3>
            <h1>Faça login na sua conta</h1>
          </div>

          <div className='area-login'>
            <p>E-mail</p>
            <input type='text' placeholder='exemplo@gmail.com'/>
            <p>Senha</p>
            <input type='password' placeholder='0123456789'/>
          </div>

          <div className='area-verify'>
            <div className='verify'>
              <input type='radio'/>
              <p>Lembre de mim</p>
            </div>
            <span>Esqueceu sua senha?</span>
          </div>

          <div className='area-login-option'>
            <button className='enter'>Entrar</button>
            <button className='google'>
              <img src='src/assets/google.png'/>
              Ou faça login com o Google
            </button>
          </div>

          <div className='area-register'>
            <p>Não tem uma conta?<span>Cadastre-se</span></p>
          </div>

          

          </div>
        </section>
       </div>
      </div>
  )
}

export default App
