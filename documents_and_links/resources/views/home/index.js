const instance = axlos.create ({
    baseURL: 'http://127.0.0.1:3333',
    withCredentials: true
});

const Formulario = {
    formRegister:document.getElementById('form-register'),
    formLogin:document.getElementById('form-login'),
    btnLogout:document.getElementById('btn-logout'),

    registrar:() =>{

        Formulario.formRegister.onsubmit = (ev)=>{
            ev.preventDefault();
            let form = new FormData(Formulario.formRegister);
            instance.post('/register', form).then(response => {
                if(response.status == 200) {
                    localStorage.setItem('user', response.data);
                }                
            })
            .catch(console.error);
            return false;

        }
    },
    login: callback =>{
        Formulario.formLogin.onsubmit = ev => {
            ev.preventDefault();
            let form = new FormData(Formulario.formLogin);
            instance.post('/login', form).then(response=>{
                if(response.status == 200) {
                    window.localStorage.setItem('user', response.data);
                }
            }).catch(console.error);
            return false;
        }
    },
    mostrarUsuarioConectado:() =>{
        if(window.localStorage.getItem('user')) {
            const {id} = window.localStorage.getItem('user');
            instance(`/users/${id}`).then(response =>{
                if(response.status == 200) {
                    const {username} = response.data;
                    document.getElementById('username').innerHTML = username;
                }
            });
        }
    },
    logout:()=>{
        Formulario.btnLogout.onclick = () => {
            if(window.localStorage.getItem('user')) {
                instance('/logout').then(response => {
                    if(response.status == 401 || response.status == 200){
                        window.localStorage.removeItem('user');
                        window.location.reload();
                    }
                });
            }
        }
    },
    mostrarTodosUsuarios:() => {
        instance('/users/',{
            method: 'GET'
        }).then(response =>{
            if(response.status == 200){
                console.log(response.data)
            };
        });
    },

    iniciar:()=> {
        Formulario.registrar();
        Formulario.login();
        Formulario.logout();
        Formulario.mostrarTodosUsuarios();
        Formulario.mostrarUsuarioConectado();
    }
};

Formulario.iniciar();