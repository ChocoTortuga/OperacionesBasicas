app.component('calcu',{
    template: /*html*/
    `
    <div class="row text-center">
        <div class="col-12">
            <div class="input-group p-5">
            <span class="input-group-text bg-dark text-light fw-bold border border-dark border-3" id="inputGroup-sizing-default">1er Nro</span>
            <input type="number" class="form-control fw-bold border border-dark border-3" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="obj.uno" style="background-color: #FFF8B7">
            
            <select class="custom-select bg-warning fw-bold border border-dark border-3" id="inputGroupSelect04" v-model="obj.op">
                <option selected value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value="/">/</option>
            </select>
            
            <span class="input-group-text bg-dark text-light fw-bold border border-dark border-3" id="inputGroup-sizing-default">2do Nro</span>
            <input type="number" class="form-control fw-bold border border-dark border-3" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="obj.dos" style="background-color: #FFF8B7">

            <div class="input-group-append">
                <button class="btn btn-warning fw-bold border border-dark border-3" type="button" @click="Operaciones()">=</button>
            </div>
            </div>
        </div>
    </div>

    <div class="row text-center">
        <div class="col bg-warning m-5 p-3">
            <h1 class="bg-dark text-light rounded-2">Resultado</h1>
            <h2 class="bg-light rounded-2 w-50 mx-auto">{{obj.uno}} {{obj.op}} {{obj.dos}} = {{obj.resul}}</h2>
            <h4>{{obj}}</h4>
        </div>
    </div>
    `,
    data(){
        return {
            obj:{
                uno: "",
                op: "+",
                dos: "",
                resul: 0
            }
        }
    },
    computed: {
        suma() {
            return this.obj.resul = parseInt(this.obj.uno) + parseInt(this.obj.dos)
        },
        resta() {
            return this.obj.resul = parseInt(this.obj.uno) - parseInt(this.obj.dos)
        },
        multi() {
            return this.obj.resul = parseInt(this.obj.uno) * parseInt(this.obj.dos)
        },
        divi() {
            return this.obj.resul = parseInt(this.obj.uno) / parseInt(this.obj.dos)
        }
    },
    methods: {
        Operaciones(){
            switch(this.obj.op){
                case "+":
                    this.suma;
                break
                case "-":
                    this.resta;
                break
                case "x":
                    this.multi;
                break
                case "/":
                    this.divi;
                break
            }
        }
    }
})