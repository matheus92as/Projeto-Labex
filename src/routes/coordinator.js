export const pagInicial = (navegar) => {
    navegar("/")
}
export const voltarPag = (navegar) => {
    navegar(-1)
}
export const abreInscriçãoDeslogado = (navegar,modal) => {
    navegar(`index/${modal}`)
}
export const abreInscriçãoLogado = (navegar,modal) => {
    navegar(`/logado/${modal}`)
}
export const abreLogin = (navegar,modal) => {
    navegar(`index/${modal}`)
}
export const areaLogado = (navegar,log) => {
    navegar(`/${log}`, {replace:true})
}
export const pagGerenciar = (navegar,page) => {
    navegar(`/logado//${page}`)
}
export const abreViagem = (navegar,modal) => {
    navegar(`/logado/gerenciar/${modal}`)
}
export const abreDetalhes = (navegar,id) => {
    navegar(`/logado//gerenciar/detalhes/${id}`)
}